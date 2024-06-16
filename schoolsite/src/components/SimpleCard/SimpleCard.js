import React from 'react';
import { Image, Group } from '@mantine/core';
import './SimpleCard.css'

const SimpleCard = ({ title, mainText, image, simpleCardStyle, button }) => {
    return (
        <div style={simpleCardStyle}>
            <div className="kinda-image">
                <Image alt="..." position="top" src={image} cover />
            </div>
            <h1 className="card-header">{title}</h1>
            <h1 className="main-text">{mainText}</h1>
            <Group className="block-menu-button" mt="md">
                <div>{button}</div>
            </Group>
        </div>
    )
}

export default SimpleCard;