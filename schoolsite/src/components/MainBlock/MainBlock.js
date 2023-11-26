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
                <Image src={img} alt='...' position='top'/>
                    </div>

                    <div className="title-with-buttons">
                    <Title className="main-title" size={50}>
                        Английский, китайский и<br/> испанский для взрослых<br/> и детей!
                    </Title>

                    <div className="buttons">
                        <Button radius="md" size="xl" className='menu-button' variant="filled">
                            ЗАПИСАТЬСЯ
                        </Button>
                        <Button radius="md" size="xl" className='menu-button' variant="filled">
                            ПОДРОБНЕЕ
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlock 