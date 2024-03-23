import React, { useState } from "react";
import img from "../images/EnglishForAdultsCover.jpg"
import { Text, Button } from "@mantine/core"
import Cover from "../components/Cover/Cover.js"
import CourseMenu from "../components/CourseMenu/CourseMenu"
import PriceTable from "../components/PriceTable/PriceTable.js";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";
import "../components/SimpleCard/SimpleCard.css";
import { useRef } from "react";
import texts from "../texts/Adults.json";

const Adults = () => {
    const texts_adults = texts.texts[0]
    const course_menu = texts_adults["course_menu"][0]

    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];
    const title = texts_adults["title"]

    const toCoverForm = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    // const [popUpActive_1, setpopUpActive_1] = useState(false)
    const [popUpActiveAdults_2, setpopUpActiveAdults_2] = useState(false)
    const [popUpActiveAdults_3, setpopUpActiveAdults_3] = useState(false)

    const button_1 = <Button className='menu-button' variant="filled" onClick={() => scrollToSection(toCoverForm)}>{texts_adults["button_1"]}</Button>
    const button_2 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActiveAdults_2(true)}>{texts_adults["button_2"]}</Button>
    const button_3 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActiveAdults_3(true)}>{texts_adults["button_3"]}</Button>

    return (
        <div>

            <PopUpLanguages header={texts_adults["popUpHeaderOne"]} text={texts_adults["textLanguagesOne"]}
                active={texts_adults["popUpActiveAdults_2"]} setActive={setpopUpActiveAdults_2}></PopUpLanguages>
            <PopUpLanguages header={texts_adults["popUpHeaderTwo"]} text={texts_adults["textLanguagesTwo"]}
                active={texts_adults["popUpActiveAdults_3"]} setActive={setpopUpActiveAdults_3}></PopUpLanguages>
            <div ref={toCoverForm}>
                <Cover title={title} img={img} />
            </div>
            <div>
                <CourseMenu button_1={button_1} button_2={button_2} button_3={button_3} title_1={course_menu["courseMenuTitle1"]} title_2={course_menu["courseMenuTitle2"]} title_3={course_menu["courseMenuTitle3"]} text_1={course_menu["courseMenuText1"]} text_2={course_menu["courseMenuText2"]} text_3={course_menu["courseMenuText3"]}></CourseMenu>
            </div>

            <div className="header_adv">
                Стоимость курсов
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PriceTable data={prices}></PriceTable>
            </div>

        </div>

    )
}

export default Adults;