import React from "react";
import ExamAdvantage from "../components/ExamsAdvantages/ExamsAdvantages";
import PriceTable from "../components/PriceTable/PriceTable";
import img from '../images/check-mark-svgrepo-com.svg'
import img2 from '../images/preparation.png'
import img_table from '../images/CEFR.jpg'
import { Table, Title, Text } from "@mantine/core";
import Cover from "../components/Cover/Cover";
import TextWithShade from "../components/TextWithShade/TextWithShade";
import ImgWithShade from "../components/ImgWithShade/ImgWithShade";
import ButtonOnTheLeft from "../components/ButtonTheLeft/ButtonOnTheLeft";

const Exams = () => {
    const title = <Title color="white">Подготовка<br />к экзаменам</Title>
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];


    return (
        <div>
            <div>
                <Cover title={title} img={img2} />
            </div>
            <ExamAdvantage image={img} />
            <TextWithShade />
            <ImgWithShade image={img_table} />
            <ButtonOnTheLeft buttonText={'Оставить заявку'} />
            <div className="header_adv">
                Стоимость курсов
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PriceTable data={prices} />
            </div>
        </div>
    )
}

export default Exams;