/// <reference types="react" />
export interface ModalProps {
    id?: string;
    children?: React.ReactNode;
    visible: boolean;
    onOutsideClick?: (event: MouseEvent) => void;
    closeOnOutsideClick?: boolean;
    style?: Omit<React.CSSProperties, 'transform'>;
    isAnimated?: boolean;
    animationType?: 'elastic' | 'ease' | 'bounce' | 'wooble';
    disableScroll?: boolean;
    onOk?: ButtonProps;
    onCancel?: ButtonProps;
    modalContainerStyle?: Omit<React.CSSProperties, 'opacity'>;
    modalSize?: ModalSize;
    closeModal: () => void;
    onOkClose?: boolean;
    width?: number;
    height?: number;
    overlay?: boolean;
    overlayDark?: boolean;
    overlayBlur?: number;
    headerTitle?: string;
    icon?: React.ReactNode | boolean;
}
export interface ExtendedModalProps {
    id?: string;
    className?: string;
    style?: Omit<React.CSSProperties, 'transform' | 'position' | 'opacity'>;
    children?: React.ReactNode;
    active?: boolean;
    triggerElement?: React.ReactNode;
    triggerToggle?: boolean;
    isAnimated?: boolean;
    animationType?: 'elastic' | 'ease' | 'bounce' | 'wooble';
    disableScroll?: boolean;
    withPortal?: boolean;
    onOutsideClick?: (event: MouseEvent) => void;
    closeOnOutsideClick?: boolean;
    modalContainerStyle?: Omit<React.CSSProperties, 'opacity'>;
    containerStyle?: React.CSSProperties;
    size?: ModalSize;
    width?: number;
    height?: number;
    overlay?: boolean;
    overlayDark?: boolean;
    overlayBlur?: number;
}
export interface ConfirmationModalPropsType extends ExtendedModalProps {
    onOk?: ButtonProps;
    onCancel?: ButtonProps;
    headerTitle?: string;
    icon?: React.ReactNode | boolean;
}
export type ModalSize = 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export interface ModalPropsType {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
export interface HeaderPropsType extends ModalPropsType {
    closeIcon?: boolean;
}
export type AlignType = 'center' | 'left' | 'right';
export interface BodyPropsType extends ModalPropsType {
    align?: AlignType;
}
export interface FooterPropsType extends BodyPropsType {
}
export interface ButtonProps {
    title?: string;
    style?: React.CSSProperties;
    color?: string;
    action?: (event: MouseEvent) => void;
    closeModalOnClick?: boolean;
}
//# sourceMappingURL=modal.type.d.ts.map