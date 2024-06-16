import React from "react";
import { Button, Group } from '@mantine/core';
import "./ButtonOnTheLeft.css"

const ButtonOnTheLeft = (props) => {
    const buttonText = props.buttonText
    const size = props.size

    return (
        <div className='button-left'>
            <Group className='block-menu-button' mt="lg">
                <Button className='menu-button' variant="filled" size={size} >{buttonText} </Button>
            </Group>
        </div>
    )
}
export default ButtonOnTheLeft;

