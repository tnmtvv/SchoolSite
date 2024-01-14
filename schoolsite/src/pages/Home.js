import React from "react";
import { useRef } from "react";
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
import LeadGrid from "../components/MainPhotoGrid/MainPhotoGrid"


const Home = () => {
    const toForm = useRef(null)
    const toAbout = useRef(null)
    return (
        <div>
            <MainBlock toForm={toForm} toAbout={toAbout} />
            <WelcomeBlock />
            <div ref={toAbout}>
                <AboutCompanyBlock />
            </div>
            {/* <MainCarousel /> */}
            <LeadGrid />
            <CourseGrid />
            <Resources />
            <StudentReviews />
            <div ref={toForm}>
                <FormForMainPage ref={toForm} />
            </div>
        </div>
    )
}

export default Home;