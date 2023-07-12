/// <reference types="react" />
import * as React$1 from 'react';
import React__default, { ReactNode, CSSProperties } from 'react';
import * as zustand from 'zustand';

declare const AccordionItem: ({ content, header, children, globalHeight, itemHeight, iconVisible, handleClick, clicked, }: NAccordion.AccordionItemProps) => JSX.Element;
declare const Accordion: ({ children, accordionList, globalHeight, iconVisible, style, }: NAccordion.AccordionProps) => JSX.Element;

declare const Button: React$1.ForwardRefExoticComponent<NButton.ButtonProps & React$1.RefAttributes<unknown>>;
declare const RippleButton: React$1.ForwardRefExoticComponent<NButton.ButtonProps & React$1.RefAttributes<unknown>>;

interface CollapseProps {
    type?: 'accordion' | 'collapse' | 'details';
    children?: ReactNode;
    collapseList?: Array<CollapseItems>;
    style?: CSSProperties;
    multiple?: boolean;
    header?: ReactNode;
    iconVisible?: boolean;
    content?: ReactNode | string | number | Element;
    globalHeight?: number;
    trigger?: boolean;
    triggerToggle?: boolean;
}
interface CollapseItemProps {
    children?: ReactNode;
    header: ReactNode;
    content?: ReactNode | string | number | Element;
    iconVisible?: boolean;
    itemHeight?: number;
    trigger?: boolean;
    triggerToggle?: boolean;
    globalHeight?: number;
}
interface CustomCollapseItemProps extends CollapseItemProps {
    childrenClassName?: string;
}
type CollapseItems = {
    itemHeight?: number;
    header: ReactNode;
    content: ReactNode | string | number | Element;
};

declare const CollapseItem: ({ content, header, children, globalHeight, trigger, itemHeight, iconVisible, triggerToggle, }: CollapseItemProps) => JSX.Element;
declare const Collapse: ({ children, collapseList, multiple, header, content, globalHeight, style, trigger, triggerToggle, iconVisible, }: CollapseProps) => JSX.Element;
declare const CustomCollapseItem: ({ content, header, children, globalHeight, trigger, itemHeight, iconVisible, triggerToggle, }: CustomCollapseItemProps) => JSX.Element;

interface DropdownProps {
    children?: React.ReactNode;
    triggerElement?: React.ReactNode;
    trigger?: (elementArg: triggerElementArgType) => React.ReactNode;
    active?: boolean;
    isAnimated?: boolean;
    animationType?: 'elastic' | 'fade' | 'ease';
    style?: Omit<React.CSSProperties, 'transform' | 'position' | 'opacity'>;
    placement?: placementType;
    outDismiss?: boolean;
    inDismiss?: boolean;
    triggerToggle?: boolean;
    containerClass?: React.CSSProperties;
}
type DropdownMenuItem = {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    title?: React.ReactNode;
    hoverColor?: string;
    onClick?: () => void;
    danger?: boolean | string;
};
type triggerElementArgType = {
    active: boolean;
};
type placementType = 'bottomleft' | 'bottomright' | 'bottommiddle' | 'topleft' | 'topright' | 'topmiddle';

declare const Dropdown: {
    ({ children, trigger, triggerElement, active, isAnimated, animationType, style, placement, outDismiss, inDismiss, triggerToggle, containerClass, }: DropdownProps): JSX.Element;
    Menu: ({ children, style, className }: any) => JSX.Element;
    Item: ({ title, children, style, className, icon, hoverColor, onClick, danger, }: DropdownMenuItem) => JSX.Element;
    Break: ({ style, className }: any) => JSX.Element;
};
declare const Menu: ({ children, style, className }: any) => JSX.Element;
declare const MenuItem: ({ title, children, style, className, icon, hoverColor, onClick, danger, }: DropdownMenuItem) => JSX.Element;
declare const MenuBreak: ({ style, className }: any) => JSX.Element;

interface InputFieldProps extends React__default.InputHTMLAttributes<any> {
    name: string;
    style?: CSSProperties;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    loaderStyle?: CSSProperties;
    labelStyle?: CSSProperties;
    color?: ColorType$1;
    onChange: React__default.FormEventHandler<HTMLInputElement>;
    leftAdorn?: ReactNode;
    rightAdorn?: ReactNode;
    leftStyle?: CSSProperties;
    rightStyle?: CSSProperties;
    inputCount?: boolean;
    clear?: () => void;
    loading?: boolean;
    disabled?: boolean;
    required?: boolean;
    borderless?: boolean;
    max?: string | number;
    min?: string | number;
}
interface TextAreaProps extends React__default.TextareaHTMLAttributes<any> {
    name: string;
    style?: CSSProperties;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    cols?: number;
    rows?: number;
    labelStyle?: CSSProperties;
    loaderStyle?: CSSProperties;
    color?: ColorType$1;
    onChange: React__default.FormEventHandler<HTMLTextAreaElement>;
    inputCount?: boolean;
    clear?: () => void;
    loading?: boolean;
    disabled?: boolean;
    required?: boolean;
    borderless?: boolean;
    maxLength?: number;
    minLength?: number;
}
interface SearchFieldProps extends React__default.InputHTMLAttributes<any> {
    name: string;
    style?: CSSProperties;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    labelStyle?: CSSProperties;
    loaderStyle?: CSSProperties;
    color?: ColorType$1;
    onChange: React__default.FormEventHandler<HTMLInputElement>;
    right?: boolean;
    leftStyle?: CSSProperties;
    rightStyle?: CSSProperties;
    inputCount?: boolean;
    clear?: () => void;
    loading?: boolean;
    disabled?: boolean;
    borderless?: boolean;
    max?: string | number;
    min?: string | number;
}
type ColorType$1 = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'defaultFill' | 'primaryFill' | 'secondaryFill' | 'infoFill' | 'successFill' | 'warningFill' | 'errorFill';

declare const InputField: React__default.ForwardRefExoticComponent<InputFieldProps & React__default.RefAttributes<HTMLInputElement>>;
declare const TextArea: React__default.ForwardRefExoticComponent<TextAreaProps & React__default.RefAttributes<HTMLTextAreaElement>>;
declare const SearchField: React__default.ForwardRefExoticComponent<SearchFieldProps & React__default.RefAttributes<HTMLInputElement>>;

interface ModalProps {
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
interface ExtendedModalProps {
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
interface ConfirmationModalPropsType extends ExtendedModalProps {
    onOk?: ButtonProps;
    onCancel?: ButtonProps;
    headerTitle?: string;
    icon?: React.ReactNode | boolean;
}
type ModalSize = 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
interface ModalPropsType {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
interface HeaderPropsType extends ModalPropsType {
    closeIcon?: boolean;
}
type AlignType = 'center' | 'left' | 'right';
interface BodyPropsType extends ModalPropsType {
    align?: AlignType;
}
interface FooterPropsType extends BodyPropsType {
}
interface ButtonProps {
    title?: string;
    style?: React.CSSProperties;
    color?: string;
    action?: (event: MouseEvent) => void;
    closeModalOnClick?: boolean;
}

declare var ModalContext: React$1.Context<{
    closeModal: () => void;
    height: number;
}>;
declare const ModalContainer: ({ children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, width, height, overlay, overlayBlur, overlayDark, }: ModalProps) => JSX.Element;
declare const ConfirmationModalContainer: ({ onOk, onCancel, children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, headerTitle, width, height, icon, }: ModalProps) => JSX.Element;
declare const Modal: (props: ExtendedModalProps) => JSX.Element;
declare const ConfirmationModal: (props: ConfirmationModalPropsType) => JSX.Element;
declare const ModalHeader: ({ children, style, className, closeIcon }: HeaderPropsType) => JSX.Element;
declare const ModalBody: ({ children, style, className, align }: BodyPropsType) => JSX.Element;
declare const ModalFooter: ({ children, style, className, align }: FooterPropsType) => JSX.Element;

interface SelectFieldProps {
    name: string;
    onInputChange: (e: any) => void;
    options: any;
    label?: string;
    height?: string | number;
    width?: string | number;
    containerStyle?: CSSProperties;
    placeholder?: string;
    fontStyle?: FontType;
    labelStyle?: CSSProperties;
    controlStyle?: CSSProperties;
    optionStyle?: CSSProperties;
    inputStyle?: CSSProperties;
    placeholderStyle?: CSSProperties;
    singleValueStyle?: CSSProperties;
    multiValueStyle?: CSSProperties;
    multiValueLabelStyle?: CSSProperties;
    menuListStyle?: CSSProperties;
    menuStyle?: CSSProperties;
    color?: ColorType;
    isMulti?: boolean;
    isLoading?: boolean;
}
type FontType = {
    fontFamily?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
};
type ColorType = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'defaultFill' | 'primaryFill' | 'secondaryFill' | 'infoFill' | 'successFill' | 'warningFill' | 'errorFill';

declare const SelectField: ({ name, onInputChange, label, width, height, options, placeholder, fontStyle, containerStyle, labelStyle, controlStyle, optionStyle, inputStyle, placeholderStyle, singleValueStyle, multiValueStyle, multiValueLabelStyle, menuStyle, menuListStyle, isMulti, isLoading, color, }: SelectFieldProps) => JSX.Element;

declare const Toast: ({ timeout, style, dark, closeIcon, dismissOnClick }: NToast.ToastProps) => JSX.Element;
declare const useToastStore: zustand.UseBoundStore<zustand.StoreApi<NToast.ToastStoreTypes>>;
declare const toast: {
    success: (message?: string, subMsg?: string) => void;
    error: (message?: string, subMsg?: string) => void;
    warning: (message?: string, subMsg?: string) => void;
    info: (message?: string, subMsg?: string) => void;
};

type TabPanePropsType = {
    title: ReactNode;
    children: ReactNode;
    id: string;
};
interface TabPropsType {
    children: ReactNode;
    trigger?: (fn: (id: string) => void) => void;
    activeId?: string;
    onTabChange?: (arg: TabChangeType) => void;
}
type TabChangeType = {
    activeTabId: string;
};

declare const Tabs: {
    ({ children, trigger, activeId, onTabChange }: TabPropsType): JSX.Element;
    Pane: ({ children }: TabPanePropsType) => JSX.Element;
};
declare const useTab: () => {
    handler: {
        trigger: (fn: (id: string) => void) => (id: string) => void;
    };
    activateTab: (id: string) => any;
};

declare const Loader: ({ variant, children, color, size, type, loading, style, description, background, }: NLoader.LoaderProps) => JSX.Element;

declare const ReactPortal: ({ children, wrapperId }: NPortal.ReactPortalPropsType) => React$1.ReactPortal;

export { Accordion, AccordionItem, Button, Collapse, CollapseItem, ConfirmationModal, ConfirmationModalContainer, CustomCollapseItem, Dropdown, InputField, Loader, Menu, MenuBreak, MenuItem, Modal, ModalBody, ModalContainer, ModalContext, ModalFooter, ModalHeader, ReactPortal, RippleButton, SearchField, SelectField, Tabs, TextArea, Toast, toast, useTab, useToastStore };
