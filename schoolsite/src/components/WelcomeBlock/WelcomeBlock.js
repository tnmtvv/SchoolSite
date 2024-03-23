import React from 'react';
import { Text, Box, BackgroundImage } from "@mantine/core";
import img from '../../images/welcome.jpg';
import './WelcomeBlock.css';

const WelcomeBlock = () => {
    return (
        <div className="welcome-block">
            <BackgroundImage src={img} min-height="41.25rem">
                <Box mih={804} >
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="500">
                        <Text
                            className='welcome-text-desktop'
                            color="white"
                            size={90}
                            fw={700}
                        >
                            Welcome To Smart School
                        </Text>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="500">
                        <Text
                            className='welcome-text-mobile'
                            color="white"
                            size={70}
                            fw={700}
                        >
                            Welcome <br />To <br />MySmart
                        </Text>
                    </div>
                </Box>
            </BackgroundImage>
        </div>
    );
}

export default WelcomeBlock; 