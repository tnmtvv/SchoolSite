import React from 'react';
import { Divider, Flex, Stack, Table, Title } from '@mantine/core';
import './PopUpLanguages.css'

const PopUpLanguages = (props) => {
    const header = props.header
    const text = props.text
    const active = props.active
    const setActive = props.setActive


    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            </div>
        </div>

    );
};
export default PopUpLanguages;