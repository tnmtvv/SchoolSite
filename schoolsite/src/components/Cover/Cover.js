import React from "react";
import { BackgroundImage, Box, Title, Divider } from '@mantine/core';
import Form from "../Form/Form";
import "./Cover.css"
import handleFormSubmit from "../../requests/handleFormSubmit";
const Cover = ({ img, title }) => {
    return (
        <Box className="cover" mih={804} >
            <BackgroundImage src={img}>
                <div className="cover">
                    <div className="cover-title">
                        <div data-aos="fade-right" data-aos-duration="1000">

                            {/* <div className="text-divider"> */}

                            <div className="text-cover">
                                <Divider style={{ height: '100%' }} size={10} orientation="vertical" color="yellow" />
                                <div className="text">
                                    {title}
                                </div>

                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        <div className="flex-form">
                            <div className="cover-form">
                                <Form onFormSubmit={handleFormSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        </Box>
    )
}

export default Cover