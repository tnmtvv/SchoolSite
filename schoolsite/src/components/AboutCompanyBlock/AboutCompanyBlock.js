import React from "react";
import './AboutCompany.css';
import { Title, Text } from "@mantine/core";
const AboutCompanyBlock = (props) => {
    const title = props.title
    const about_text_p1 = props.text_p1
    const about_text_p2 = props.text_p2

    console.log(props.title)

    return (
        <div className="about">
            <div data-aos="fade-up" data-aos-duration="1000">
                <Title className="about-title">{title}</Title>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <Text size={20} className="about-text">{about_text_p1}</Text>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <Text size={20} className="about-text">{about_text_p2}</Text>
            </div>
        </div>
    );
}

export default AboutCompanyBlock 