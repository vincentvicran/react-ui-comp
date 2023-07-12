/// <reference types="react" />
import { BodyPropsType, ConfirmationModalPropsType, ExtendedModalProps, FooterPropsType, HeaderPropsType, ModalProps } from './modal.type';
export declare var ModalContext: import("react").Context<{
    closeModal: () => void;
    height: number;
}>;
export declare const ModalContainer: ({ children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, width, height, overlay, overlayBlur, overlayDark, }: ModalProps) => JSX.Element;
export declare const ConfirmationModalContainer: ({ onOk, onCancel, children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, headerTitle, width, height, icon, }: ModalProps) => JSX.Element;
export declare const Modal: (props: ExtendedModalProps) => JSX.Element;
export declare const ConfirmationModal: (props: ConfirmationModalPropsType) => JSX.Element;
export declare const ModalHeader: ({ children, style, className, closeIcon }: HeaderPropsType) => JSX.Element;
export declare const ModalBody: ({ children, style, className, align }: BodyPropsType) => JSX.Element;
export declare const ModalFooter: ({ children, style, className, align }: FooterPropsType) => JSX.Element;
//# sourceMappingURL=modal.component.d.ts.map