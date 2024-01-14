import React, { useState } from "react";
import img from "../images/EnglishForAdultsCover.jpg"
import { Text, Button } from "@mantine/core"
import Cover from "../components/Cover/Cover.js"
import CourseMenu from "../components/CourseMenu/CourseMenu"
import PriceTable from "../components/PriceTable/PriceTable.js";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";
import "../components/SimpleCard/SimpleCard.css";
import { useRef } from "react";

const Adults = () => {
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];
    const title = "Английский для взрослых"

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

    const button_1 = <Button className='menu-button' variant="filled" onClick={() => scrollToSection(toCoverForm)}>{"Записаться на тестирование"}</Button>
    const button_2 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActiveAdults_2(true)}>{"Узнать расписание"}</Button>
    const button_3 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActiveAdults_3(true)}>{"Узнать расписание"}</Button>

    return (
        <div>

            <PopUpLanguages header={"Расписание"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActiveAdults_2} setActive={setpopUpActiveAdults_2}></PopUpLanguages>
            <PopUpLanguages header={"Расписание"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActiveAdults_3} setActive={setpopUpActiveAdults_3}></PopUpLanguages>
            <div ref={toCoverForm}>
                <Cover title={title} img={img} />
            </div>
            <div>
                <CourseMenu button_1={button_1} button_2={button_2} button_3={button_3}></CourseMenu>
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