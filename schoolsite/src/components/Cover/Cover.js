import React from "react";
import { BackgroundImage, Box, Title, Divider } from '@mantine/core';
import Form from "../Form/Form";
import "./Cover.css"
const Cover = ({ img, title }) => {
    return (
        <Box className="cover" mih={804} >

            <BackgroundImage src={img}>
                <div className="cover">
                    <div className="title">
                        <div className="text">
                        <Divider size={10} orientation="vertical" color="yellow"/>
                        {title}
                        </div>
                    </div>

                    <div className="cover-form">
                        <Form />
                    </div>
                </div>
            </BackgroundImage>
        </Box>

    )
}

export default Cover