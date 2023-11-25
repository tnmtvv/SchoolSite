import React from "react";
import { Image, Button, Group } from '@mantine/core';
import "./ButtonOnTheLeft.css"

const ButtonOnTheLeft = (props) => {
    const buttonText = props.buttonText

    return (
        <div className='button-left'>
            <Group className='block-menu-button' mt="lg">
                <Button className='menu-button' variant="filled" size='lg' >{buttonText} </Button>
            </Group>
        </div>
    )
}
export default ButtonOnTheLeft;

