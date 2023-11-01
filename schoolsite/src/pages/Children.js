import React from "react";
import Cover from "../components/Cover/Cover";
import { Table, Title } from "@mantine/core";
import img from "../images/EnglishForChildrenCover.jpg"
import Intensive from "../components/Intensive/Intensive";
import PriceTable from "../components/PriceTable/PriceTable"
import CourseMenu from "../components/CourseMenu/CourseMenu";

const Children = () => {
    const title = <Title color="white">Английский<br />для детей</Title>
    return (
        <div>
            <div>
                <Cover title={title} img={img} />
            </div>
            <div>
                <Intensive></Intensive>
            </div>
            {/* <div>
                <CourseMenu></CourseMenu>
            </div> */}

            {/* <PriceTable></PriceTable> */}
        </div>

    )
}

export default Children;