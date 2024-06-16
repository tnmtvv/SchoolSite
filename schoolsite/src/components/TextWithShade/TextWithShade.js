import React from 'react';
import { Text } from '@mantine/core';
import './TextWithShade.css'

const TextWithShade = () => {
    return (
        <div className="text-shade-block">
            <div className="text-block-shade-block-dekstop">
                <Text fw={700} size={30} ta="center">
                    С нами можно подготовиться к<br />международным экзаменам!
                </Text>
            </div>
            <div className="text-block-shade-block-mobile">
                <Text fw={700} size={20} ta="center" className="text-exams">
                    С нами можно подготовиться к<br />международным экзаменам!
                </Text>
            </div>
            <div className="shade-exams" />
        </div>
    )
}
export default TextWithShade;