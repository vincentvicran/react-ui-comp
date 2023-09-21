export declare namespace NInputField {
    interface InputFieldProps extends React.ComponentPropsWithoutRef<'input'> {
        name: string;
        label?: string;
        loaderStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        color?: ColorType;
        leftAdorn?: React.ReactNode;
        rightAdorn?: React.ReactNode;
        leftStyle?: React.CSSProperties;
        rightStyle?: React.CSSProperties;
        inputCount?: boolean;
        clear?: () => void;
        loading?: boolean;
        borderless?: boolean;
        max?: string | number;
        min?: string | number;
    }

    interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
        name: string;
        label?: string;
        labelStyle?: React.CSSProperties;
        loaderStyle?: React.CSSProperties;
        color?: ColorType;
        inputCount?: boolean;
        clear?: () => void;
        loading?: boolean;
        borderless?: boolean;
        maxLength?: number;
        minLength?: number;
    }

    interface SearchFieldProps extends React.ComponentPropsWithoutRef<'input'> {
        name: string;
        label?: string;
        labelStyle?: React.CSSProperties;
        loaderStyle?: React.CSSProperties;
        color?: ColorType;
        right?: boolean;
        leftStyle?: React.CSSProperties;
        rightStyle?: React.CSSProperties;
        inputCount?: boolean;
        clear?: () => void;
        loading?: boolean;
        borderless?: boolean;
        max?: string | number;
        min?: string | number;
    }

    interface BoxProps {
        color?: ColorType;
    }

    type ColorType =
        | 'default'
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
        | 'defaultFill'
        | 'primaryFill'
        | 'secondaryFill'
        | 'infoFill'
        | 'successFill'
        | 'warningFill'
        | 'errorFill';
}
