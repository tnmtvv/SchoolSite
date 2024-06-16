import React from "react";
import { useRef } from "react";
// import { Image } from '@mantine/core';
// import PriceTable from "../components/PriceTable/PriceTable"
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import MainBlock from "../components/MainBlock/MainBlock";
import AboutCompanyBlock from "../components/AboutCompanyBlock/AboutCompanyBlock";
// import MainCarousel from "../components/MainCarousel/MainCarousel";
import StudentReviews from "../components/StudentReviews/StudentReviews";
import FormForMainPage from "../components/FormForMainPage/FormForMainPage";
import Resources from "../components/Resources/Resources";
import CourseGrid from "../components/CoursesGrid/CoursesGrid";
import LeadGrid from "../components/MainPhotoGrid/MainPhotoGrid"
import texts from "../texts/Home.json";
import "../css/Home.css"

const Home = () => {
    const toForm = useRef(null)
    const toAbout = useRef(null)

    const all_texts = texts.texts[0]
    const texts_about = all_texts["about_Company"][0]

    return (
        <div>
            <MainBlock toForm={toForm} toAbout={toAbout} />
            <WelcomeBlock />
            <div ref={toAbout}>
                <AboutCompanyBlock title={texts_about["title"]} text_p1={texts_about["text_p1"]} text_p2={texts_about["text_p2"]} />
            </div>
            {/* <MainCarousel /> */}
            <div className="leadgrid">
                <LeadGrid />
            </div>
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