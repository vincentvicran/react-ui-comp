import { useState, useEffect, useRef } from 'react';
import {
    useMountedValue,
    makeAnimatedComponent,
    AnimationConfigUtils,
    useMeasure,
    useAnimatedValue,
    interpolate,
} from 'react-ui-animate';
import { MdClose, MdInfo } from 'react-icons/md';
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';

import {
    MasterContainer,
    MessageContainer,
    Message,
    CloseIconContainer,
    ToastIconContainer,
    ToastIndicator,
    MessageHeader,
    ToastContainer,
    MessageContent,
} from './toast.styled';

const toastData = {
    success: { title: 'Success!', color: '#5cb85c' },
    error: { title: "Something's wrong!", color: '#ff2400' },
    info: { title: 'Did you know?', color: '#008ecc' },
    warning: { title: 'Watch Out!', color: '#ffa500' },
};

const MasterContainerAnimated = makeAnimatedComponent(MasterContainer);
const MessageContainerAnimated = makeAnimatedComponent(MessageContainer);

export const useToast = () => {
    const toastRef = useRef<((v: NToast.ToastArg) => void) | null>(null);

    return {
        handler: {
            child: (fn: (toastObj: NToast.ToastArg) => void) => (toastRef.current = fn),
        },
        toast: {
            success: (message?: string, subMsg?: string) => toastRef.current?.({ message, type: 'success', subMsg }),
            error: (message?: string, subMsg?: string) => toastRef.current?.({ message, type: 'error', subMsg }),
            warning: (message?: string, subMsg?: string) => toastRef.current?.({ message, type: 'warning', subMsg }),
            info: (message?: string, subMsg?: string) => toastRef.current?.({ message, type: 'info', subMsg }),
        },
    };
};

export const Toast = ({
    child,
    timeout = 5000,
    style,
    dark,
    closeIcon,
    dismissOnClick = true,
    noHeader,
}: NToast.ToastProps) => {
    const toastId = useRef(0);
    const [items, setItems] = useState<Array<NToast.ItemObject>>([]);

    useEffect(() => {
        child((toastObj: NToast.ToastArg) => {
            setItems((prev: any) => [
                ...prev,
                {
                    key: toastId.current++,
                    message: toastObj.message,
                    type: toastObj.type,
                    subMsg: toastObj.subMsg,
                },
            ]);
        });
    }, [child]);

    return (
        <ToastContainer>
            {items.map((item, i) => (
                <ToastItem
                    key={i}
                    keyValue={item.key}
                    message={item.message}
                    type={item.type}
                    timeout={timeout}
                    closeIcon={closeIcon}
                    closeToast={dismissOnClick}
                    style={style}
                    dark={dark}
                    subMsg={item.subMsg}
                    noHeader={noHeader}
                />
            ))}
        </ToastContainer>
    );
};

// MARK: - ToastItem
const ToastItem = ({
    message,
    type = 'success',
    style,
    timeout,
    closeToast,
    closeIcon = true,
    dark,
    subMsg,
    noHeader,
}: NToast.ToastItemProps) => {
    const [open, setOpen] = useState(true);
    const [height, setHeight] = useState<number>(0);
    const heightAnimation = useAnimatedValue(open ? height : 0);

    const bind = useMeasure(({ height }) => {
        height <= 50 ? setHeight(90) : setHeight(Number(height) + 50);
    });

    const mv = useMountedValue(open, {
        from: 0,
        enter: 1,
        exit: 2,
        config: {
            ...AnimationConfigUtils.POWER4,
        },
    });

    useEffect(() => {
        const t = setTimeout(() => {
            setOpen(false);
        }, timeout);

        return () => clearTimeout(t);
    }, [setOpen, timeout]);

    const { color } = toastData[type];

    return mv(
        (animation, mounted) =>
            mounted && (
                <MasterContainerAnimated
                    style={{
                        height: heightAnimation.value,
                        opacity: interpolate(animation.value, [0, 1, 2], [0, 1, 0]),
                        scale: interpolate(animation.value, [0, 1, 2], [1, 1, 0.95]),
                    }}
                >
                    <MessageContainerAnimated
                        style={{
                            ...style,
                            height: height - 20,
                            border: dark ? `none` : ``,
                            backgroundColor: dark ? `black` : `white`,
                        }}
                        onClick={() => closeToast && setOpen(false)}
                    >
                        <ToastIndicator style={{ background: color }} />
                        <ToastIconContainer>
                            {type === 'success' && <RiCheckboxCircleFill size={20} style={{ color }} />}
                            {type === 'error' && <RiErrorWarningFill size={20} style={{ color }} />}
                            {type === 'warning' && <RiErrorWarningFill size={20} style={{ color }} />}
                            {type === 'info' && <MdInfo size={20} style={{ color }} />}
                        </ToastIconContainer>
                        <Message {...bind()} style={{ color: dark ? `white` : `black`, width: 180 }}>
                            {message && <MessageHeader>{message}</MessageHeader>}
                            {subMsg && <MessageContent>{subMsg}</MessageContent>}
                        </Message>
                        {closeIcon && (
                            <CloseIconContainer>
                                <MdClose />
                            </CloseIconContainer>
                        )}
                    </MessageContainerAnimated>
                </MasterContainerAnimated>
            )
    );
};
