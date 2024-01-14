import React from "react";
import { Image, Button, Group } from '@mantine/core';
import "./SimpleCard.css"

const SimpleCard = (props) => {
    const title = props.title
    const mainText = props.mainText
    const img = props.image
    const simpleCardStyle = props.simpleCardStyle
    const localButton = props.button


    return (
        <div style={simpleCardStyle}>
            <div className="kinda-image"> </div>
            <Image alt='...' position='top' src={img} cover />
            <h1 className="card-header">{title}</h1>
            <h1 className="main-text"> {mainText} </h1>
            <Group className='block-menu-button' mt="md">
                <div>
                    {localButton}
                </div>
            </Group>
        </div>
    )
}

export default SimpleCard;