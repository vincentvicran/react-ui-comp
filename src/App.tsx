import { Modal, ConfirmationModal, ModalHeader, ModalBody, ModalFooter, Button } from './components';

const App = () => {
    const handleOk = () => {
        console.log('Ok clicked');
    };

    return (
        <div>
            <Modal
                triggerElement={<button>Trigger</button>}
                triggerToggle
                size="xl"
                overlay={false}
                overlayBlur={3}
                overlayDark={false}
                // width={1000}
                // height={500}
            >
                <ModalHeader>Modal Header</ModalHeader>
                <ModalBody align="right">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris est, consequat semper
                        nulla sapien donec accumsan. Quam in curabitur sed nunc lectus morbi ipsum id dui. Cursus
                        faucibus posuere nullam et turpis urna feugiat pretium. Placerat platea consectetur donec sed
                        quis a id quisque.
                    </div>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris est, consequat semper
                        nulla sapien donec accumsan. Quam in curabitur sed nunc lectus morbi ipsum id dui. Cursus
                        faucibus posuere nullam et turpis urna feugiat pretium. Placerat platea consectetur donec sed
                        quis a id quisque.
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="default" title="Secondary" />
                    <Button color="primary" title="Primary" />
                </ModalFooter>
            </Modal>
            <ConfirmationModal
                // icon={<FaCheck />}
                headerTitle="headerTitle"
                triggerElement={<button>Confirm</button>}
                triggerToggle
                onOk={{
                    title: 'Submit',
                    action: handleOk,
                    // color: 'green',
                }}
                size="xl"
            >
                modalbody
                <div>This is div</div>
                <ModalBody>This is modal body</ModalBody>
                <ModalBody>This is modal body</ModalBody>
                <ModalBody>This is modal body</ModalBody>
            </ConfirmationModal>
        </div>
    );
};

export default App;
