import React from "react";
import './WelcomeBlock.css';
import img from "../../images/welcome.jpg"
import { Text, Box, BackgroundImage } from "@mantine/core";
const WelcomeBlock = () => {
    return (
        <div className="welcome-block">
            <BackgroundImage src={img}>
                <Box mih={804} >
                    <Text className='welcome-text' color="white" size={90} fw={700}>Welcome To Smart School</Text>
                </Box>
            </BackgroundImage>
        </div>
    );
}

export default WelcomeBlock 