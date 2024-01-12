import React, { useState } from "react";
import img from "../images/EnglishForAdultsCover.jpg"
import { Text, Button } from "@mantine/core"
import Cover from "../components/Cover/Cover.js"
import CourseMenu from "../components/CourseMenu/CourseMenu"
import PriceTable from "../components/PriceTable/PriceTable.js";
import "../components/SimpleCard/SimpleCard.css";

const Adults = () => {
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];
    const title = "Английский для взрослых"

    const [popUpActive_1, setpopUpActive_1] = useState(false)
    const [popUpActive_2, setpopUpActive_2] = useState(false)
    const [popUpActive_3, setpopUpActive_3] = useState(false)

    const button_1 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActive_1(true)}>{"Записаться на тестирование"}</Button>
    const button_2 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActive_2(true)}>{"Узнать расписание"}</Button>
    const button_3 = <Button className='menu-button' variant="filled" onClick={() => setpopUpActive_3(true)}>{"Узнать расписание"}</Button>

    return (
        <div>
            <Cover title={title} img={img} />
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