import React from "react";
import img from "../images/EnglishForAdultsCover.jpg"
import { Title } from "@mantine/core"
import Cover from "../components/Cover/Cover.js"
import CourseMenu from "../components/CourseMenu/CourseMenu"

const Adults = () => {
    const title = <Title color="white">Английский<br />для взрослых</Title>
    return (
        <div>
            <Cover title={title} img={img} />
            <div>
                <CourseMenu></CourseMenu>
            </div>
        </div>

    )
}

export default Adults;