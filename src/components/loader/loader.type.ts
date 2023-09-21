export declare namespace NLoader {
    interface LoaderProps {
        children?: React.ReactNode;
        variant?: VariantType;
        color?: string;
        size?: number;
        type?: 'rotate' | 'flow';
        loading?: boolean;
        description?: string;
        style?: React.CSSProperties;
        background?: BackgroundType;
    }

    type VariantType = 'three' | 'four';

    type LoaderContentStyle = Pick<React.CSSProperties, 'borderRadius'>;

    type LoaderDescriptionProps = {
        color: string;
        size: number;
    };

    type BackgroundType = {
        backgroundColor?: string;
        blur?: number;
        opacity?: number;
        shade?: number;
    };

    interface DotsProps {
        color: string;
        size?: number;
        type: DotsType;
    }

    type DotsType = 'rotate' | 'flow';
}
