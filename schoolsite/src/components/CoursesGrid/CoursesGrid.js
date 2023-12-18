import React from "react";
import { Image, Button, Group } from '@mantine/core';
import "./CoursesGrid.css"
import SimpleImgLink from '../SimpleImgLink/SimpleImgLink.js'
import img_to_prop from '../../images/ConversationClubsCover.jpg'

const CourseGrid = () => {
    const cardStyle = {
        maxWidth: "30%",
        justifyContent: "center",
        height: "fit-content"
    }
    return (
        <div className='main-grid'>
            <div className="header_adv">
                Выберите свой курс
            </div>
            <div className='one-row'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Английский язык для \nвзрослых'} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Английский язык для детей'} />
                </div>
            </div>
            <div className='one-row'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Другие языки'} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Разговорные клубы'} />
                </div>
            </div>
            <div className='one-row'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Наши преподаватели'} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Экзамены'} />
                </div>
            </div>
            {/* <div className="grid-el"></div>
            <div className="grid-el"></div>
            <div className="grid-el"></div>
            <div className="grid-el"></div>
            <div className="grid-el"></div>
            <div className="grid-el"></div> */}
        </div>
    )
}

export default CourseGrid;

