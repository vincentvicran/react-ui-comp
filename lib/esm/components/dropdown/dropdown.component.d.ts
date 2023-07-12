/// <reference types="react" />
import { DropdownMenuItem, DropdownProps } from './dropdown.type';
export declare const Dropdown: {
    ({ children, trigger, triggerElement, active, isAnimated, animationType, style, placement, outDismiss, inDismiss, triggerToggle, containerClass, }: DropdownProps): JSX.Element;
    Menu: ({ children, style, className }: any) => JSX.Element;
    Item: ({ title, children, style, className, icon, hoverColor, onClick, danger, }: DropdownMenuItem) => JSX.Element;
    Break: ({ style, className }: any) => JSX.Element;
};
export declare const Menu: ({ children, style, className }: any) => JSX.Element;
export declare const MenuItem: ({ title, children, style, className, icon, hoverColor, onClick, danger, }: DropdownMenuItem) => JSX.Element;
export declare const MenuBreak: ({ style, className }: any) => JSX.Element;
//# sourceMappingURL=dropdown.component.d.ts.map