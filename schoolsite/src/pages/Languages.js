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
import texts from "../texts/Languages.json";

const Languages = () => {
    const texts_lang = texts.texts[0]
    const title = texts_lang["title"]

    const [popUpActive_1, setpopUpActive_1] = useState(false)
    const [popUpActive_2, setpopUpActive_2] = useState(false)

    const button_1 = <Button className='menu-button' variant="filled" fullWidth onClick={() => setpopUpActive_1(true)}>{texts_lang["button_1"]}</Button>
    const button_2 = <Button className='menu-button' variant="filled" fullWidth onClick={() => setpopUpActive_2(true)}>{texts_lang["button_2"]}</Button>
    return (
        <div>
            <div>
                <Cover title={title} img={coverimg} />
            </div>
            <CardForLanguages button_1={button_1} button_2={button_2} textBlockShade={texts_lang["textBlockShade"]} langMainText={texts_lang["langMainText"]} />
            <PopUpLanguages header={texts_lang["LanguageOne"]} text={texts_lang["textLanguagesOne"]}
                active={popUpActive_1} setActive={setpopUpActive_1}></PopUpLanguages>
            <PopUpLanguages header={texts_lang["LanguageTwo"]} text={texts_lang["textLanguagesTwo"]}
                active={popUpActive_2} setActive={setpopUpActive_2}></PopUpLanguages>

        </div>
    )
}

export default Languages;