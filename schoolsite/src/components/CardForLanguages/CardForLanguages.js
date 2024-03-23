import React from "react";

import SimpleCard from "../SimpleCard/SimpleCard";
import "./CardForLanguages.css"
import ch from "../../images/Chinese.jpg"
import sp from "../../images/Spanish.jpg"
import { Text, Title } from "@mantine/core";

const cardStyle = {
    maxWidth: "100%",
    justifyContent: "center",
    height: "fit-content"
}

const CardForLanguages = (props) => {
    const button_1 = props.button_1
    const button_2 = props.button_2


    const text_block_shade = props.textBlockShade
    const lang_main_text = props.langMainText
    return (
        <div className="main-language-block">
            <div className="cards">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="card1">
                        <SimpleCard
                            imageSize={200}
                            title="Испанский язык"
                            image={sp}
                            button={button_1}
                            simpleCardStyle={cardStyle}
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                    <div className="card2">
                        <SimpleCard 
                        imageSize={200}
                        title="Китайский язык" 
                        image={ch} 
                        button={button_2} 
                        simpleCardStyle={cardStyle} />
                    </div>
                </div>

            </div>
            <div className="content">
                <div className="description-lang">
                    <div className="text-shade">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <Title className="text-block-shade-block" color="red">
                                {text_block_shade}
                            </Title>
                        </div>
                        <div className="shade"></div>
                    </div>
                    <Text className="lang-main-text">{lang_main_text}</Text>
                </div>
            </div>
        </div>

    )
}

export default CardForLanguages;