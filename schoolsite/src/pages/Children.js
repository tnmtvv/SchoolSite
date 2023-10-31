import React from "react";
import Cover from "../components/Cover/Cover";
import { Title } from "@mantine/core";
import img from "../images/EnglishForChildrenCover.jpg"
import Intensive from "../components/Intensive/Intensive";

const Children = () => {
    const title = <Title color="white">Английский<br />для детей</Title>
    return (
        <div>
            <Cover title={title} img={img} />
            <Intensive></Intensive>
        </div>
    )
}

export default Children;