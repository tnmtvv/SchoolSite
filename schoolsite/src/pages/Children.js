import React from "react";
import Cover from "../components/Cover/Cover";
import { Table, Title, Text } from "@mantine/core";
import img from "../images/EnglishForChildrenCover.jpg"
import Intensive from "../components/Intensive/Intensive";
import PriceTable from "../components/PriceTable/PriceTable"
import CourseMenu from "../components/CourseMenu/CourseMenu";

const Children = () => {
    const title = <Title color="white">Английский<br />для детей</Title>
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
                <Cover title={title} img={img} />
            </div>
            <div>
                <CourseMenu></CourseMenu>
            </div>
            <div>
                <Intensive></Intensive>
            </div>
            <Text>Стоимость курсов</Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PriceTable data={prices}></PriceTable>
            </div>
        </div>

    )
}

export default Children;