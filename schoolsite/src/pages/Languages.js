import React, { useState } from "react";
import SimpleCard from "../components/SimpleCard/SimpleCard";
import ch from '../images/Chinese.jpg'
import sp from '../images/Spanish.jpg'
import CardForLanguages from "../components/CardForLanguages/CardForLanguages";
import PopUpLanguages from "../components/PopUpLanguages/PopUpLanguages";

const Languages = () => {
    const [popUpActive_1, setpopUpActive_1] = useState(true)
    const [popUpActive_2, setpopUpActive_2] = useState(true)
    return (
        <div>
            <PopUpLanguages header={"Испанский"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActive_1} setActive={setpopUpActive_1}></PopUpLanguages>
            <PopUpLanguages header={"Китайский"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, lectus vitae ullamcorper tincidunt, metus justo iaculis nisl, ut facilisis tortor ipsum eget justo. Suspendisse imperdiet, nulla et euismod posuere, dui mauris eleifend ligula, sed ullamcorper urna justo a urna."}
                active={popUpActive_2} setActive={setpopUpActive_2}></PopUpLanguages>

            <CardForLanguages />
        </div>
    )
}

export default Languages;