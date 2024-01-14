import React, { useState, useRef } from "react";
import Cover from "../components/Cover/Cover";
import { Table, Title, Button } from "@mantine/core";
import img from "../images/EnglishForChildrenCover.jpg"
import Intensive from "../components/Intensive/Intensive";
import PriceTable from "../components/PriceTable/PriceTable"
import CourseMenu from "../components/CourseMenu/CourseMenu";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";

const Children = () => {
    const title = "Английский для детей"
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];

    const toCoverForm = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    // const [popUpActive_1, setpopUpActive_1] = useState(false)
    const [popUpActiveKids_2, setpopUpActiveKids_2] = useState(false)
    const [popUpActiveKids_3, setpopUpActiveKids_3] = useState(false)

    const button_1 = <Button className='menu-button' variant="filled" onClick={() => scrollToSection(toCoverForm)}>{"Записаться на тестирование"}</Button>
    const button_2 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActiveKids_2(true)}>{"Узнать расписание"}</Button>
    const button_3 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActiveKids_3(true)}>{"Узнать расписание"}</Button>


    return (
        <div>
            <div ref={toCoverForm}>
                <Cover title={title} img={img} />
            </div>
            <div>
                <CourseMenu button_1={button_1} button_2={button_2} button_3={button_3}></CourseMenu>
            </div>
            <div>
                <Intensive></Intensive>
            </div>
            <div className="header_adv">
                Стоимость курсов
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PriceTable data={prices}></PriceTable>
            </div>

            <PopUpLanguages header={"Расписание"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActiveKids_2} setActive={setpopUpActiveKids_2}></PopUpLanguages>
            <PopUpLanguages header={"Расписание"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActiveKids_3} setActive={setpopUpActiveKids_3}></PopUpLanguages>
        </div>

    )
}

export default Children;