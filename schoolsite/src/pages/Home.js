import React from "react";
import { useState } from "react";
import { Image } from '@mantine/core';
import PriceTable from "../components/PriceTable/PriceTable"
import CourseGrid from "../components/CoursesGrid/CoursesGrid";
import SimpleImgLink from "../components/SimpleImgLink/SimpleImgLink";

const Home = () => {
    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];

    return (
        <div>
            <CourseGrid />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PriceTable data={prices}></PriceTable>
            </div>
        </div>
    )
}

export default Home;