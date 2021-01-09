import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../../components/Modal/Modal.component';

export default function Settings({ children }) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    return (
        <div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child))
                    return React.cloneElement(child, { onClick: openModal });
                return child;
            })}
            <Modal
                open={modalOpen}
                closeOnOut
                closeHandler={closeModal}
                closeButton={<FontAwesomeIcon icon='times'></FontAwesomeIcon>}>
                <h2>Settings</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus laudantium dolor expedita hic blanditiis,
                    aspernatur rerum harum debitis, corporis dicta, ut
                    recusandae quasi omnis! Quasi sapiente quo modi voluptas
                    eaque.
                </p>
            </Modal>
        </div>
    );
}
