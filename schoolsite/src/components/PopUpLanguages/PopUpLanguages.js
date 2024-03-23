import React from 'react';
import './PopUpLanguages.css'

const PopUpLanguages = ({ header, text, active, setActive }) => {
    return (
        <div
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
    );
};

export default PopUpLanguages;