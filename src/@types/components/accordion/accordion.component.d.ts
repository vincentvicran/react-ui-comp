export declare namespace NAccordion {
    interface AccordionProps {
        children?: React.ReactNode;
        accordionList: Array<AccordionItems>;
        style?: React.CSSProperties;
        iconVisible?: boolean;
        globalHeight?: number;
    }

    interface AccordionItemProps {
        children?: React.ReactNode;
        header: string;
        content: React.ReactNode;
        iconVisible?: boolean;
        itemHeight?: number;
        globalHeight?: number;
        clicked?: boolean;
        handleClick: Function;
    }

    type AccordionItems = {
        itemHeight?: number;
        header: string;
        content: React.ReactNode;
        clicked?: boolean;
    };
}
