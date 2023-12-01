import React from "react";
import { Image, Button, Group } from '@mantine/core';
import "./CoursesGrid.css"
import SimpleImgLink from '../SimpleImgLink/SimpleImgLink.js'
import img_to_prop from '../../images/ConversationClubsCover.jpg'

const CourseGrid = () => {

    return (
        <div className='main-grid'>
            <div className="header_adv">
                Выберите свой курс
            </div>
            <div className='one-row'>
                <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Английский язык для \nвзрослых'} />
                <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Английский язык для детей'} />
            </div>
            <div className='one-row'>
                <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Другие языки'} />
                <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Разговорные клубы'} />
            </div>
            <div className='one-row'>
                <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Наши преподаватели'} />
                <SimpleImgLink className='smpl-img-instance' img={img_to_prop} text={'Экзамены'} />
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

