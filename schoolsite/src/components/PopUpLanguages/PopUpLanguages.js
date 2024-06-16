import React from 'react';
import { Modal } from '@mantine/core';
import './PopUpLanguages.css'

const PopUpLanguages = ({ header, text, opened, close }) => {
    return (
        <Modal
            opened={opened}
            onClose={close}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            size="lg"
        >
            <div className="header-pop-up">{header}</div>
            <div className="main-text-pop-up">{text}</div>
        </Modal>

        /*<div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal_content active" : "modal_content"}
                onClick={e => e.stopPropagation()}
            >
                <div className="header-pop-up">{header}</div>
                <div className="main-text-pop-up">{text}</div>
            </div>
        </div>
        */
    );
};

export default PopUpLanguages;