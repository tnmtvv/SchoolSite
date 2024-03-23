import React from "react";
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import CardForLanguages from "../components/CardForLanguages/CardForLanguages";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";
import "../components/SimpleCard/SimpleCard.css";
import coverimg from "../images/languages.jpeg"
import Cover from "../components/Cover/Cover";
import texts from "../texts/Languages.json";

const Languages = () => {
    const texts_lang = texts.texts[0]
    const title = texts_lang["title"]

    /*После того как починим нерабочую первую кнопку, проверить открывается ли нужное модальное окно*/
    const [opened, { open, close }] = useDisclosure(false);

    const button_1 = <Button
        className='menu-button'
        variant="filled"
        fullWidth
        onClick={open}
    >
        {texts_lang["button_1"]}
    </Button>

    const button_2 = <Button
        className='menu-button'
        onClick={open}
        variant="filled"
        fullWidth
    >
        {texts_lang["button_2"]}
    </Button>

    return (
        <div>
            <div>
                <Cover title={title} img={coverimg} />
            </div>
            <CardForLanguages
                button_1={button_1}
                button_2={button_2}
                textBlockShade={texts_lang["textBlockShade"]}
                langMainText={texts_lang["langMainText"]} />
            <PopUpLanguages
                header={texts_lang["LanguageOne"]}
                text={texts_lang["textLanguagesOne"]}
                opened={opened}
                close={close}
            />
            <PopUpLanguages
                header={texts_lang["LanguageTwo"]}
                text={texts_lang["textLanguagesTwo"]}
                opened={opened}
                close={close}
            />
        </div>
    )
}

export default Languages;