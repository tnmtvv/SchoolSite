import React from "react";
import { BackgroundImage, Box, Text } from '@mantine/core';
import Form from "../Form/Form";
import img from "../../images/welcome.jpg"
import "./FormForMainPage.css"

const FormForMainPage = () => {
    return (
        <BackgroundImage src={img}>
            <div className="main-form">
                <div data-aos="fade-right" data-aos-duration="1000" >
                    <Text style={{ marginBottom: "10px" }} size={25} color="white">
                        Консультация или тестирование

                    </Text>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                    <Form />
                </div>
            </div>
        </BackgroundImage>
    )
}

export default FormForMainPage