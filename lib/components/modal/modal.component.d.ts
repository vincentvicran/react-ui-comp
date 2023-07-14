/// <reference types="react" />
export declare var ModalContext: import("react").Context<{
    closeModal: () => void;
    height: number;
}>;
export declare const ModalContainer: ({ children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, width, height, overlay, overlayBlur, overlayDark, }: NModal.ModalProps) => JSX.Element;
export declare const ConfirmationModalContainer: ({ onOk, onCancel, children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, headerTitle, width, height, icon, }: NModal.ModalProps) => JSX.Element;
export declare const Modal: (props: NModal.ExtendedModalProps) => JSX.Element;
export declare const ConfirmationModal: (props: NModal.ConfirmationModalPropsType) => JSX.Element;
export declare const ModalHeader: ({ children, style, className, closeIcon }: NModal.HeaderPropsType) => JSX.Element;
export declare const ModalBody: ({ children, style, className, align }: NModal.BodyPropsType) => JSX.Element;
export declare const ModalFooter: ({ children, style, className, align }: NModal.FooterPropsType) => JSX.Element;
//# sourceMappingURL=modal.component.d.ts.map