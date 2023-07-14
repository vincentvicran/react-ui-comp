declare namespace NTabs {
    interface TabContextType {
        tabHeader: string;
    }

    type TabPanePropsType = {
        title: React.ReactNode;
        children: React.ReactNode;
        id: string;
    };

    interface TabPropsType {
        children: React.ReactNode;
        trigger?: (fn: (id: string) => void) => void;
        activeId?: string;
        onTabChange?: (arg: TabChangeType) => void;
    }

    type TabChangeType = { activeTabId: string };
}
