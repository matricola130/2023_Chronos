import {React, useState} from 'react';
import { Modal, ButtonToolbar, Button, RadioGroup, Radio, Placeholder } from 'rsuite';

const styles = {
    radioGroupLabel: {
        padding: '8px 12px',
        display: 'inline-block',
        verticalAlign: 'middle'
    }
};

function ModalWrapper({isOpen, onClose, selectedDate}) {

    const [open, setOpen] = useState(true);
    const [backdrop, setBackdrop] = useState('static');
    const handleOpen = () => setOpen(true);
    const handleClose = () => onClose();

    return (
        <Modal backdrop={backdrop} keyboard={false} open={isOpen} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Attività</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3>{selectedDate?.toDateString()}</h3>
                <br/>
                <Placeholder.Graph/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Salva
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Chiudi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWrapper;