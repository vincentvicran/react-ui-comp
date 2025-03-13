export declare namespace NDropdown {
    interface DropdownProps {
        children?: React.ReactNode;
        triggerElement?: React.ReactNode;
        trigger?: (elementArg: TriggerElementArgType) => React.ReactNode;
        active?: boolean;
        isAnimated?: boolean;
        animationType?: 'elastic' | 'fade' | 'ease';
        style?: Omit<React.CSSProperties, 'transform' | 'position' | 'opacity'>;
        placement?: PlacementType;
        outDismiss?: boolean;
        inDismiss?: boolean;
        triggerToggle?: boolean;
        containerClass?: React.CSSProperties;
    }

    type DropdownMenuList = Array<DropdownMenuList>;

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

    type TriggerElementArgType = {
        active: boolean;
    };

    type PlacementType = 'bottomleft' | 'bottomright' | 'bottommiddle' | 'topleft' | 'topright' | 'topmiddle';
}
