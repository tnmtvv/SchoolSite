import React from "react";
import './AboutCompany.css';
import { Title, Text } from "@mantine/core";
const AboutCompanyBlock = () => {
    return (
        <div className="about">
            <div data-aos="fade-up" data-aos-duration="1000">
                <Title className="about-title">О нашей компании</Title>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <Text size={20} className="about-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat sagittis lorem, et pellentesque ipsum euismod fermentum. Vestibulum iaculis non turpis ac facilisis. Nunc mollis sem varius lobortis ultrices. Nam est purus, iaculis vel luctus vel, tristique quis mi. Proin feugiat varius neque, vel euismod magna venenatis dignissim. Etiam ultrices vel diam quis efficitur. Sed hendrerit enim ac dictum semper. Aliquam consequat mi nulla, pellentesque tempor velit rutrum a. Sed ac orci sed urna sagittis dignissim. Pellentesque tempus, eros nec lobortis sodales, diam ligula rutrum libero, euismod interdum mauris ipsum ut felis. Duis non felis id dui accumsan sagittis. Donec sit amet velit maximus, porta ligula quis, rhoncus magna. Ut tempus cursus consequat. Integer nec erat vitae diam finibus dapibus.

                </Text>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <Text size={20} className="about-text">Maecenas ac sapien ullamcorper, porta massa ac, bibendum eros. Nullam sit amet erat arcu. Aliquam erat volutpat. Donec luctus, orci non sodales cursus, erat purus aliquet justo, eget malesuada orci nibh in neque. Cras a justo finibus, viverra ante vestibulum, feugiat neque. Sed non ipsum tincidunt, vehicula lectus vel, luctus massa. Aliquam leo enim, facilisis et nulla vitae, auctor tincidunt lectus. Phasellus eu consequat justo, at volutpat arcu. Integer finibus fringilla urna, eget maximus quam elementum ut.</Text>
            </div>
        </div>
    );
}

export default AboutCompanyBlock 