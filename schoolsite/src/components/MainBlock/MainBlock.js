import React from "react";
import './MainBlock.css';
import img from "../../images/girl.jpg"
import { Title, Button, Image } from "@mantine/core";
const MainBlock = () => {
    return (

        <div className="inner">
            <div className="main-content">
                <div className="image">
                    <Image className="image-container" src={img} alt='...' position='top' />
                </div>

                <div className="title-with-buttons">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Title className="main-title-desktop">
                            Английский, китайский и<br /> испанский для взрослых<br /> и детей!
                        </Title>
                        <Title className="main-title-mobile">
                            Иностранные языки<br /> для взрослых<br /> и детей!
                        </Title>
                    </div>

                    <div className="buttons">
                        <div className="buttons-container-desktop">
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
                        <div className="buttons-container-mobile">
                            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="100">
                                <Button radius="md" size="lg" className='menu-button' variant="filled">
                                    ЗАПИСАТЬСЯ
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainBlock;