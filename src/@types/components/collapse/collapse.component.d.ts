export declare namespace NCollapse {
    interface CollapseProps {
        type?: 'accordion' | 'collapse' | 'details';
        children?: React.ReactNode;
        collapseList?: Array<CollapseItems>;
        style?: React.CSSProperties;
        multiple?: boolean;
        header?: React.ReactNode;
        iconVisible?: boolean;
        content?: React.ReactNode | string | number | Element;
        globalHeight?: number;
        trigger?: boolean;
        triggerToggle?: boolean;
    }

    interface CollapseItemProps {
        children?: React.ReactNode;
        header: React.ReactNode;
        content?: React.ReactNode | string | number | Element;
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
        header: React.ReactNode;
        content: React.ReactNode | string | number | Element;
    };
}
