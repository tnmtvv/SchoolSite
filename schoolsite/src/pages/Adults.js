import React from "react";
import img from "../images/EnglishForAdultsCover.jpg"
import { Title } from "@mantine/core"
import Cover from "../components/Cover/Cover.js"
import CourseMenu from "../components/CourseMenu/CourseMenu"
import PriceTable from "../components/PriceTable/PriceTable.js";

const Adults = () => {
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];
    const title = <Title color="white">Английский<br />для взрослых</Title>
    return (
        <div>
            <Cover title={title} img={img} />
            <div>
                <CourseMenu></CourseMenu>
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