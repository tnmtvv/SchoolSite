import React from "react";
import { BackgroundImage, Box, Text } from '@mantine/core';
import Form from "../Form/Form";
import img from "../../images/welcome.jpg"
import "./FormForMainPage.css"

const FormForMainPage = () => {
    return (
        <BackgroundImage src={img}>
            <div className="main-form">
                <Text style={{ marginBottom: "10px" }} size={25} color="white">
                    Консультация или тестирование
                </Text>
                <Form />
            </div>
        </BackgroundImage>
    )
}

export default FormForMainPage