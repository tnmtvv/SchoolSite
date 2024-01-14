import React from 'react';
import { Divider, Flex, Stack, Table, Title } from '@mantine/core';
import './PopUpLanguages.css'

const PopUpLanguages = (props) => {
    const header = props.header
    const text = props.text
    const active = props.active
    const setActiveVar = props.setActive


    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActiveVar(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <div className="header-pop-up">
                    {header}
                </div>
                <div className="main-text-pop-up">
                    {text}
                </div>
            </div>
        </div>

    );
};
export default PopUpLanguages;