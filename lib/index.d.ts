/// <reference types="react" />
import * as React from 'react';
import React__default, { CSSProperties } from 'react';
import * as zustand from 'zustand';

declare const AccordionItem: ({ content, header, children, globalHeight, itemHeight, iconVisible, handleClick, clicked, }: NAccordion.AccordionItemProps) => JSX.Element;
declare const Accordion: ({ children, accordionList, globalHeight, iconVisible, style, }: NAccordion.AccordionProps) => JSX.Element;

declare const Button: React.ForwardRefExoticComponent<NButton.ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const RippleButton: React.ForwardRefExoticComponent<NButton.ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const CollapseItem: ({ content, header, children, globalHeight, trigger, itemHeight, iconVisible, triggerToggle, }: NCollapse.CollapseItemProps) => JSX.Element;
declare const Collapse: ({ children, collapseList, multiple, header, content, globalHeight, style, trigger, triggerToggle, iconVisible, }: NCollapse.CollapseProps) => JSX.Element;
declare const CustomCollapseItem: ({ content, header, children, globalHeight, trigger, itemHeight, iconVisible, triggerToggle, }: NCollapse.CustomCollapseItemProps) => JSX.Element;

declare const Dropdown: {
    ({ children, trigger, triggerElement, active, isAnimated, animationType, style, placement, outDismiss, inDismiss, triggerToggle, containerClass, }: NDropdown.DropdownProps): JSX.Element;
    Menu: ({ children, style, className }: any) => JSX.Element;
    Item: ({ title, children, style, className, icon, hoverColor, onClick, danger, }: NDropdown.DropdownMenuItem) => JSX.Element;
    Break: ({ style, className }: any) => JSX.Element;
};
declare const Menu: ({ children, style, className }: any) => JSX.Element;
declare const MenuItem: ({ title, children, style, className, icon, hoverColor, onClick, danger, }: NDropdown.DropdownMenuItem) => JSX.Element;
declare const MenuBreak: ({ style, className }: any) => JSX.Element;

declare const InputField: React__default.ForwardRefExoticComponent<NInputField.InputFieldProps & React__default.RefAttributes<HTMLInputElement>>;
declare const TextArea: React__default.ForwardRefExoticComponent<NInputField.TextAreaProps & React__default.RefAttributes<HTMLTextAreaElement>>;
declare const SearchField: React__default.ForwardRefExoticComponent<NInputField.SearchFieldProps & React__default.RefAttributes<HTMLInputElement>>;

declare var ModalContext: React.Context<{
    closeModal: () => void;
    height: number;
}>;
declare const ModalContainer: ({ children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, width, height, overlay, overlayBlur, overlayDark, }: NModal.ModalProps) => JSX.Element;
declare const ConfirmationModalContainer: ({ onOk, onCancel, children, visible, onOutsideClick, closeOnOutsideClick, style, isAnimated, animationType, disableScroll, modalContainerStyle, closeModal, modalSize, headerTitle, width, height, icon, }: NModal.ModalProps) => JSX.Element;
declare const Modal: (props: NModal.ExtendedModalProps) => JSX.Element;
declare const ConfirmationModal: (props: NModal.ConfirmationModalPropsType) => JSX.Element;
declare const ModalHeader: ({ children, style, className, closeIcon }: NModal.HeaderPropsType) => JSX.Element;
declare const ModalBody: ({ children, style, className, align }: NModal.BodyPropsType) => JSX.Element;
declare const ModalFooter: ({ children, style, className, align }: NModal.FooterPropsType) => JSX.Element;

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

declare const Tabs: {
    ({ children, trigger, activeId, onTabChange }: NTabs.TabPropsType): JSX.Element;
    Pane: ({ children }: NTabs.TabPanePropsType) => JSX.Element;
};
declare const useTab: () => {
    handler: {
        trigger: (fn: (id: string) => void) => (id: string) => void;
    };
    activateTab: (id: string) => any;
};

declare const Loader: ({ variant, children, color, size, type, loading, style, description, background, }: NLoader.LoaderProps) => JSX.Element;

export { Accordion, AccordionItem, Button, Collapse, CollapseItem, ConfirmationModal, ConfirmationModalContainer, CustomCollapseItem, Dropdown, InputField, Loader, Menu, MenuBreak, MenuItem, Modal, ModalBody, ModalContainer, ModalContext, ModalFooter, ModalHeader, RippleButton, SearchField, SelectField, Tabs, TextArea, Toast, toast, useTab, useToastStore };
