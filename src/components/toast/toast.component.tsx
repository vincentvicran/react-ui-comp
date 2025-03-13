import { useState, useEffect } from 'react';
import { create } from 'zustand';
import {
    useMountedValue,
    makeAnimatedComponent,
    AnimationConfigUtils,
    useMeasure,
    useAnimatedValue,
    interpolate,
} from 'react-ui-animate';
import { NToast } from './toast.type';

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
import { MdClose, MdInfo, RiCheckboxCircleFill, RiErrorWarningFill } from 'components/icons';

const MasterContainerAnimated = makeAnimatedComponent(MasterContainer);
const MessageContainerAnimated = makeAnimatedComponent(MessageContainer);

export const Toast = ({ timeout = 5000, style, dark, closeIcon, dismissOnClick = true }: NToast.ToastProps) => {
    const items = useToastStore(({ items }) => items);

    return (
        <ToastContainer>
            {items &&
                items.length > 0 &&
                items?.map((item) => (
                    <ToastItem
                        key={item.key}
                        id={item.key}
                        keyValue={item.key}
                        message={item.message}
                        type={item.type}
                        timeout={timeout}
                        closeIcon={closeIcon}
                        closeToast={dismissOnClick}
                        style={style}
                        dark={dark}
                        subMsg={item.subMsg}
                    />
                ))}
        </ToastContainer>
    );
};

const toastData = {
    success: {
        title: 'Success!',
        color: '#5cb85c',
        icon: <RiCheckboxCircleFill size={20} style={{ color: '#5cb85c' }} />,
    },
    error: {
        title: "Something's wrong!",
        color: '#ff2400',
        icon: <RiErrorWarningFill size={20} style={{ color: '#ff2400' }} />,
    },
    info: {
        title: 'Did you know?',
        color: '#008ecc',
        icon: <RiErrorWarningFill size={20} style={{ color: '#008ecc' }} />,
    },
    warning: {
        title: 'Watch Out!',
        color: '#ffa500',
        icon: <MdInfo size={20} style={{ color: '#ffa500' }} />,
    },
};

export const useToastStore = create<NToast.ToastStoreTypes>((set, get) => ({
    items: [],
    addItems: (item) => {
        let items = [...get().items, item];

        set({ items });
    },
    removeItem: (itemId) => {
        let items = get().items.filter((item) => itemId !== item.key);

        set({ items });
    },
}));

const setItems = (toastArg: NToast.ToastArg) => {
    const item = [
        {
            key: Math.floor(Math.random() * 10000),
            message: toastArg.message,
            type: toastArg.type,
            subMsg: toastArg.subMsg,
        },
    ];
    return useToastStore.setState({
        items: [...useToastStore.getState().items, ...item],
    });
};

export const toast = {
    success: (message?: string, subMsg?: string) => setItems({ message, type: 'success', subMsg }),
    error: (message?: string, subMsg?: string) => setItems({ message, type: 'error', subMsg }),
    warning: (message?: string, subMsg?: string) => setItems({ message, type: 'warning', subMsg }),
    info: (message?: string, subMsg?: string) => setItems({ message, type: 'info', subMsg }),
};

// MARK: - ToastItem
const ToastItem = ({
    id,
    message,
    type = 'success',
    style,
    timeout,
    closeToast,
    closeIcon = true,
    dark,
    subMsg,
}: NToast.ToastItemProps) => {
    const [open, setOpen] = useState(true);
    const [height, setHeight] = useState<number>(0);
    const heightAnimation = useAnimatedValue(open ? height : 0);

    const removeItem = useToastStore(({ removeItem }) => removeItem);

    const bind = useMeasure(({ height }) => {
        Number(height) <= 50 ? setHeight(80) : setHeight(Number(height) + 50);
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

        const r = setTimeout(() => {
            removeItem(id);
        }, (timeout ?? 1000) + 1000);

        return () => {
            clearTimeout(t);
            clearTimeout(r);
        };
    }, [id, removeItem, setOpen, timeout]);

    const { color, icon, title } = toastData[type];

    return mv(
        (animation, mounted) =>
            mounted && (
                <MasterContainerAnimated
                    style={{
                        height: heightAnimation.value,
                        opacity: interpolate(animation.value, [0, 1, 2], [0, 1, 0]),
                        scale: interpolate(animation.value, [0, 1, 2], [1, 1, 0.95]),
                        marginBottom: interpolate(animation.value, [0, 1, 2], [0, 10, 0]),
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
                        <ToastIconContainer>{icon}</ToastIconContainer>
                        <Message {...bind()} style={{ color: dark ? `white` : `black`, width: 180 }}>
                            <MessageHeader>{message ?? title}</MessageHeader>
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
