import { Tabs, useTab } from './components';

const App = () => {
    const { handler, activateTab } = useTab();
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10% 0' }}>
                <Tabs {...handler} onTabChange={({ activeTabId }) => console.log('activeTabId: ', activeTabId)}>
                    <Tabs.Pane title="Tab 1" id="id1">
                        Pane 1
                    </Tabs.Pane>
                    <Tabs.Pane title={<button>Tab 2</button>} id="id2">
                        Pane 2
                    </Tabs.Pane>
                    <Tabs.Pane title="Tab 3" id="id3">
                        Pane 3
                    </Tabs.Pane>
                    <Tabs.Pane title="Tab 4" id="id4">
                        Pane 4
                    </Tabs.Pane>
                    <Tabs.Pane title="Tab 5" id="id5">
                        Pane 5
                    </Tabs.Pane>
                </Tabs>
            </div>
            <br />
            <br />
            <div>
                <button onClick={() => activateTab('id4')}>Activate Tab 4</button>
            </div>
        </>
    );
};

export default App;
