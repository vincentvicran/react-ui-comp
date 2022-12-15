declare namespace NButton {
    interface ButtonProps extends React.ButtonHTMLAttributes<any> {
        title?: string;
        style?: React.CSSProperties;
        textStyle?: Omit<React.CSSProperties, 'zIndex' | 'position'>;
        leftIcon?: React.ReactNode;
        rightIcon?: React.ReactNode;
        rippleColor?: string;
        color?: ColorType;
        variant?: VariantType;
        loading?: boolean;
        disabled?: boolean;
        onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        children?: React.ReactNode;
    }

    interface SpecButtonProps extends React.ButtonHTMLAttributes<any> {
        title?: string;
        icon?: React.ReactNode;
        right?: boolean;
        iconButton?: boolean;
        iconStyle?: Omit<React.CSSProperties, 'zIndex' | 'position'>;
        style?: React.CSSProperties;
        textStyle?: Omit<React.CSSProperties, 'zIndex' | 'position'>;
        leftIcon?: React.ReactNode;
        rightIcon?: React.ReactNode;
        rippleColor?: string;
        color?: ColorType;
        variant?: VariantType;
        loading?: boolean;
        disabled?: boolean;
        onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    }

    interface StyledButtonProps extends React.ButtonHTMLAttributes<any> {
        variant?: VariantType;
        color?: ColorType;
    }

    interface RippleProps {
        x: number;
        y: number;
        color?: ColorType;
        variant?: VariantType;
        rippleColor?: string;
    }

    interface LoaderProps {
        variant?: VariantType;
        color?: ColorType;
        disabled?: boolean;
    }

    type VariantType = 'text' | 'contained' | 'outlined';
    type ColorType = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}
