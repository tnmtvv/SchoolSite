import React from "react";
import { Image, Button, Group } from '@mantine/core';
import "./SimpleCard.css"

const SimpleCard = (props) => {
    const title = props.title
    const mainText = props.mainText
    const img = props.image
    const buttonText = props.buttonText
    const fullWidth = props.fullWidth

    return (
        <div className='simple-card'>
            <Image alt='...' position='top' src={img}
      />
            <h1 className="card-header">{title}</h1>
            <h1 className="main-text"> {mainText} </h1>
            <Group className='block-menu-button' mt="md">
                <Button className='menu-button' variant="filled" fullWidth={fullWidth}>{buttonText}</Button>
            </Group>
        </div>
    )
}

export default SimpleCard;