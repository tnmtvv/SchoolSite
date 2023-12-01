import React from "react";
import { useState } from "react";
import { Image } from '@mantine/core';
import PriceTable from "../components/PriceTable/PriceTable"
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import MainBlock from "../components/MainBlock/MainBlock";
import AboutCompanyBlock from "../components/AboutCompanyBlock/AboutCompanyBlock";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import StudentReviews from "../components/StudentReviews/StudentReviews";
import FormForMainPage from "../components/FormForMainPage/FormForMainPage";
import Resources from "../components/Resources/Resources";
import CourseGrid from "../components/CoursesGrid/CoursesGrid";
import SimpleImgLink from "../components/SimpleImgLink/SimpleImgLink";

const Home = () => {
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];

    return (
        <div>
            <MainBlock />
            <WelcomeBlock />
            <AboutCompanyBlock />
            <MainCarousel />
            <Resources />
            <CourseGrid />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PriceTable data={prices}></PriceTable>
            </div>
            <StudentReviews />
            <FormForMainPage />


        </div>
    )
}

export default Home;