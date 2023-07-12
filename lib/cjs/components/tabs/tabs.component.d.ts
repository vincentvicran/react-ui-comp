/// <reference types="react" />
import { TabPanePropsType, TabPropsType } from './tabs.type';
export declare const Tabs: {
    ({ children, trigger, activeId, onTabChange }: TabPropsType): JSX.Element;
    Pane: ({ children }: TabPanePropsType) => JSX.Element;
};
export declare const useTab: () => {
    handler: {
        trigger: (fn: (id: string) => void) => (id: string) => void;
    };
    activateTab: (id: string) => any;
};
//# sourceMappingURL=tabs.component.d.ts.map