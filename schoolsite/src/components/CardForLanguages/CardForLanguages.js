import React from "react";
import SimpleCard from "../SimpleCard/SimpleCard";
import "./CardForLanguages.css"
import ch from "../../images/Chinese.jpg"
import sp from "../../images/Spanish.jpg"
import { Text, Title } from "@mantine/core";

const CardForLanguages = () => {
    return(
        <div className="homeHeader">

        <div className="cards">
            <div className="card1">
            <SimpleCard imageSize={200} fullWidth={true} title="Испанский язык" image={ch} buttonText="Узнать подробнее"/>
            </div>
            <div className="card2">
            <SimpleCard imageSize={200} fullWidth={true} title="Китайский язык" image={sp} buttonText="Узнать подробнее"/>
            </div>
        </div>
        <div className="content">
        <div className="description">
            <div className="text-shade">
            <Title className="text-block-shade-block" color="red">
                Приглашаем Вас окунуться в удивительный мир изучения иностранных языков вместе с нами!!!
            </Title>
            <div className="shade"></div>
            </div>
            <Text className="homeText">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
        </div>
        </div>
        </div>
        
    )
}

export default CardForLanguages;