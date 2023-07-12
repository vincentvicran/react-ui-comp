import { Key, ReactElement, ReactNode } from 'react';
export declare const reactNodeIsOfType: <P extends object, T extends (props: P) => ReactElement | null | undefined>(node: ReactNode, type: T) => node is {
    key: Key | null;
    type: T;
    props: Parameters<T>[0];
};
export declare const hasInnerComponent: (children: any, Component: any) => undefined;
export declare const getNewChildren: (children: any, components: any[] | any) => any;
export declare const getNewChild: (children: ReactNode, value: string) => (string | number | ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment | import("react").ReactPortal)[];
export declare const getListOfAttribute: (children: ReactNode, attribute: string, defaultAttribute?: string) => any;
//# sourceMappingURL=getChildrenComponent.util.d.ts.map