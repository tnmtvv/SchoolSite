import React from "react";
import './MainBlock.css';
import img from "../../images/girl.jpg"
import { Title, Button, Image } from "@mantine/core";
const MainBlock = () => {
    return (
        <div>
            <div className="inner">
                <div className="main-content">
                    <div className="image">
                        <Image src={img} alt='...' position='top' />
                    </div>

                    <div className="title-with-buttons">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <Title className="main-title" size={50}>
                                Английский, китайский и<br /> испанский для взрослых<br /> и детей!
                            </Title>
                        </div>

                        <div className="buttons">
                            <div className="buttons_container">
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <Button radius="md" size="xl" className='menu-button' variant="filled">
                                        ЗАПИСАТЬСЯ
                                    </Button>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                    <Button radius="md" size="xl" className='menu-button' variant="filled">
                                        ПОДРОБНЕЕ
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;