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


const Home = () => {

    return (
        <div>
            <MainBlock />
            <WelcomeBlock />
            <AboutCompanyBlock />
            <MainCarousel />
            <CourseGrid />
            <Resources />
            <StudentReviews />
            <FormForMainPage />
        </div>
    )
}

export default Home;