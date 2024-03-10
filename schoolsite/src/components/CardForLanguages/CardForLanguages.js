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
    return (
        <div className="main-language-block">
            <div className="cards">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="card1">
                        <SimpleCard imageSize={200} title="Испанский язык" image={sp} button={button_1} simpleCardStyle={cardStyle} />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                    <div className="card2">
                        <SimpleCard imageSize={200} title="Китайский язык" image={ch} button={button_2} simpleCardStyle={cardStyle} />
                    </div>
                </div>

            </div>
            <div className="content">
                <div className="description-lang">
                    <div className="text-shade">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <Title className="text-block-shade-block" color="red">
                                Приглашаем Вас окунуться в удивительный мир изучения иностранных языков вместе с нами!!!
                            </Title>
                        </div>
                        <div className="shade"></div>
                    </div>
                    <Text className="lang-main-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
                </div>
            </div>
        </div>

    )
}

export default CardForLanguages;