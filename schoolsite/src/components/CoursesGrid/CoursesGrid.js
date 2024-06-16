import React from "react";
import { Image, Button, Group } from '@mantine/core';
import "./CoursesGrid.css"
import SimpleImgLink from '../SimpleImgLink/SimpleImgLink.js'
import img_conv from '../../images/ConversationClubsCover.jpg'
import img_children from '../../images/new_ones/teens.JPEG'
import img_adults from '../../images/new_ones/adults.JPG'
import img_teachers from '../../images/new_ones/shivam_with_kids.JPEG'
import img_exams from '../../images/new_ones/senior_year_girl_diploma.jpg'
import img_languages from '../../images/new_ones/asian_boy.jpg'

const CourseGrid = () => {
    const cardStyle = {
        maxWidth: "30%",
        justifyContent: "center",
        height: "fit-content"
    }
    return (
        <div>
            <div className='main-grid'>
                <div className="header-grid">
                    Выберите свой курс
                </div>
                <div className='grid-desktop'>
                    <div className='one-row'>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <SimpleImgLink className='smpl-img-instance' img={img_adults} link={'/Adults'} text={'Английский язык для \nвзрослых'} />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            <SimpleImgLink className='smpl-img-instance' img={img_children} link={'/Children'} text={'Английский язык для детей'} />
                        </div>
                    </div>
                    <div className='one-row'>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <SimpleImgLink className='smpl-img-instance' img={img_languages} link={'/Languages'} text={'Другие языки'} />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            <SimpleImgLink className='smpl-img-instance' img={img_conv} link={'/ConversationClub'} text={'Разговорные клубы'} />
                        </div>
                    </div>
                    <div className='one-row'>
                        {/* <div data-aos="fade-up" data-aos-duration="1000">
                            <SimpleImgLink className='smpl-img-instance' img={img_teachers} link={'/Teachers'} text={'Наши преподаватели'} />
                        </div> */}
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            <SimpleImgLink className='smpl-img-instance' img={img_exams} link={'/Exams'} text={'Экзамены'} />
                        </div>
                    </div>
                </div>
                <div className='grid-mobile'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <SimpleImgLink className='smpl-img-instance' img={img_adults} link={'/Adults'} text={'Английский язык для \nвзрослых'} />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        <SimpleImgLink className='smpl-img-instance' img={img_children} link={'/Children'} text={'Английский язык для детей'} />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <SimpleImgLink className='smpl-img-instance' img={img_languages} link={'/Languages'} text={'Другие языки'} />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        <SimpleImgLink className='smpl-img-instance' img={img_conv} link={'/ConversationClub'} text={'Разговорные клубы'} />
                    </div>
                    {/* <div data-aos="fade-up" data-aos-duration="1000">
                        <SimpleImgLink className='smpl-img-instance' img={img_teachers} link={'/Teachers'} text={'Наши преподаватели'} />
                    </div> */}
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        <SimpleImgLink className='smpl-img-instance' img={img_exams} link={'/Exams'} text={'Экзамены'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseGrid;

