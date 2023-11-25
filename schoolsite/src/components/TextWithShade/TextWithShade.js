import React from "react";

import { Table, Title, Text } from "@mantine/core";
import './TextWithShade.css'

const TextWithShade = () => {


    return (
        <div id='text-shade'>
            <div className='text-block-shade-block'>
                <Text fw={700} size={30} ta="center">
                    С нами можно подготовиться к<br />международным экзаменам!
                </Text>

            </div>
            <div className='shade'></div>
        </div>
    )

}
export default TextWithShade;