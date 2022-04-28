import './Modal.scss';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PropType {
    children?: React.ReactNode,
    closeModal: () => void
}

export default function Modal(props: PropType) {
    const modalRoot = document.getElementById('root');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const close = document.createElement('div');
    const boundary = document.createElement('div');

    modal.setAttribute('class', 'modal');
    modalContent.setAttribute('class', 'modal-content');
    close.setAttribute('class', 'close-button');
    boundary.setAttribute('class', 'boundary');

    close.textContent = 'x';
    close.onclick = props.closeModal;
    
    modalContent.appendChild(close);
    modalContent.appendChild(boundary);
    modal.appendChild(modalContent);

    useEffect(() => {
        modalRoot?.appendChild(modal);

        return (): void => {
            modalRoot?.removeChild(modal);
        }
    }, []);

    return createPortal(props.children, modalContent);
}