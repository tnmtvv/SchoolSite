import React, { useState, useRef } from "react";
import Cover from "../components/Cover/Cover";
import { useDisclosure } from '@mantine/hooks';
import { Button } from "@mantine/core";
import img from "../images/EnglishForChildrenCover.jpg"
import Intensive from "../components/Intensive/Intensive";
import PriceTable from "../components/PriceTable/PriceTable"
import CourseMenu from "../components/CourseMenu/CourseMenu";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";
import texts from "../texts/Children.json";


import img_1 from "../images/new_ones/children_1.JPG"
import img_2 from "../images/new_ones/children_2.JPEG"
import img_3 from "../images/new_ones/children_3.jpg"


const Children = () => {
    const texts_children = texts.texts[0]
    const title = texts_children["title"]

    const course_menu = texts_children["course_menu"][0]


    const prices = [
        { id: 1, age: 3, duration: '45-60 м', num: 'C', price: 'Carbon' },
        { id: 2, age: 7, duration: '45-60 м', num: 'N', price: 'Nitrogen' },
        { id: 3, age: 39, duration: '45-60 м', num: 'Y', price: 'Yttrium' },
        { id: 4, age: 56, duration: '45-60 м', num: 'Ba', price: 'Barium' },
        { id: 5, age: 58, duration: '45-60 м', num: 'Ce', price: 'Cerium' },
    ];

    const toCoverForm = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    // const [popUpActive_1, setpopUpActive_1] = useState(false)
    // const [popUpActiveKids_2, setpopUpActiveKids_2] = useState(false)
    // const [popUpActiveKids_3, setpopUpActiveKids_3] = useState(false)

    // const [popUpActiveIntensive, setpopUpActiveIntensive] = useState(false)
    const [opened_1, handlers_1] = useDisclosure(false);
    const [opened_2, handlers_2] = useDisclosure(false);
    const [opened_3, handlers_3] = useDisclosure(false);


    const button_1 = <Button className='menu-button' variant="filled" onClick={() => scrollToSection(toCoverForm)}>{texts_children["button_1"]}</Button>
    const button_2 = <Button className='menu-button' variant="filled" fullWidth onClick={handlers_1.open}>{texts_children["button_2"]}</Button>
    const button_3 = <Button className='menu-button' variant="filled" fullWidth onClick={handlers_2.open}>{texts_children["button_3"]}</Button>

    const button_4 = <Button style={{ justifyContent: "flex-end" }} className='simple-button' variant="filled" onClick={handlers_3.open}>{texts_children["button_4"]}</Button>


    return (
        <div>
            <PopUpLanguages header={texts_children["popUpHeaderOne"]} text={texts_children["textChildrenOne"]} opened={opened_1} close={handlers_1.close}></PopUpLanguages>
            <PopUpLanguages header={texts_children["popUpHeaderTwo"]} text={texts_children["textChildrenTwo"]} opened={opened_2} close={handlers_2.close}></PopUpLanguages>
            <PopUpLanguages header={texts_children["popUpHeaderIntensive"]} text={texts_children["intensive"]} opened={opened_3} close={handlers_3.close}></PopUpLanguages>



            <div ref={toCoverForm}>
                <Cover title={title} img={img} />
            </div>
            <div>
                <CourseMenu img_1={img_1} img_2={img_2} img_3={img_3} button_1={button_1} button_2={button_2} button_3={button_3} title_1={course_menu["courseMenuTitle1"]} title_2={course_menu["courseMenuTitle2"]} title_3={course_menu["courseMenuTitle3"]} text_1={course_menu["courseMenuText1"]} text_2={course_menu["courseMenuText2"]} text_3={course_menu["courseMenuText3"]}></CourseMenu>
            </div>
            {/* <PopUpLanguages header={texts_children["popUpHeaderIntensive"]} text={texts_children["intensive"]}
                opened={opened} close={close}></PopUpLanguages> */}
            <div>
                <Intensive localButton={button_4}></Intensive>
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

export default Children;