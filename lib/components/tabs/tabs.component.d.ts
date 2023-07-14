/// <reference types="react" />
export declare const Tabs: {
    ({ children, trigger, activeId, onTabChange }: NTabs.TabPropsType): JSX.Element;
    Pane: ({ children }: NTabs.TabPanePropsType) => JSX.Element;
};
export declare const useTab: () => {
    handler: {
        trigger: (fn: (id: string) => void) => (id: string) => void;
    };
    activateTab: (id: string) => any;
};
//# sourceMappingURL=tabs.component.d.ts.map