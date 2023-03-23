declare namespace NToast {
    type ToastType = 'success' | 'error' | 'info' | 'warning';
    type ToastArg = { message?: string; type: ToastType; subMsg?: string };

    type ItemObject = {
        key: number;
        message?: string;
        type: ToastType;
        subMsg?: string;
    };

    interface ToastStoreTypes {
        items: Array<ItemObject>;
        addItems: (item: ItemObject) => void;
    }

    interface ToastProps {
        child?: (arg: (toastObj: ToastArg) => void) => void;
        dark?: boolean;
        message?: string;
        type?: ToastType;
        timeout?: number;
        style?: React.CSSProperties;
        closeIcon?: boolean;
        dismissOnClick?: boolean;
    }

    type ToastItemProps = {
        message?: string;
        dark?: boolean;
        type?: ToastType;
        style?: React.CSSProperties;
        keyValue?: number;
        timeout?: number;
        closeIcon?: boolean;
        closeToast?: boolean;
        subMsg?: string;
    };

    type DarkStyle = {
        style?: React.CSSProperties;
    };
}
