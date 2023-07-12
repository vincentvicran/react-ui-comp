/// <reference types="react" />
export declare const Toast: ({ timeout, style, dark, closeIcon, dismissOnClick }: NToast.ToastProps) => JSX.Element;
export declare const useToastStore: import("zustand").UseBoundStore<import("zustand").StoreApi<NToast.ToastStoreTypes>>;
export declare const toast: {
    success: (message?: string, subMsg?: string) => void;
    error: (message?: string, subMsg?: string) => void;
    warning: (message?: string, subMsg?: string) => void;
    info: (message?: string, subMsg?: string) => void;
};
//# sourceMappingURL=toast.component.d.ts.map