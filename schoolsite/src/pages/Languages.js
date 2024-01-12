import React, { useState } from "react";
import { Button, Title } from '@mantine/core';
import SimpleCard from "../components/SimpleCard/SimpleCard";
import ch from '../images/Chinese.jpg'
import sp from '../images/Spanish.jpg'
import CardForLanguages from "../components/CardForLanguages/CardForLanguages";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";
import "../components/SimpleCard/SimpleCard.css";
import coverimg from "../images/languages.jpeg"
import Cover from "../components/Cover/Cover";

const Languages = () => {
    const title = "Другие языки"
    const [popUpActive_1, setpopUpActive_1] = useState(false)
    const [popUpActive_2, setpopUpActive_2] = useState(false)

    const button_2 = <Button className='menu-button' variant="filled" fullWidth onClick={() => setpopUpActive_2(true)}>{"Узнать подробнее"}</Button>
    const button_1 = <Button className='menu-button' variant="filled" fullWidth onClick={() => setpopUpActive_1(true)}>{"Узнать подробнее"}</Button>
    return (
        <div>
            <div>
                <Cover title={title} img={coverimg} />
            </div>
            <CardForLanguages button_1={button_1} button_2={button_2} />
            <PopUpLanguages header={"Китайский"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActive_1} setActive={setpopUpActive_1}></PopUpLanguages>
            <PopUpLanguages header={"Испанский"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActive_2} setActive={setpopUpActive_2}></PopUpLanguages>

        </div>
    )
}

export default Languages;