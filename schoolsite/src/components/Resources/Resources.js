import React from "react";
import SimpleAdvavntage from "../SimpleAdvantage/SimpleAdvantage";
import star from "../../images/star.png"
import message from "../../images/message-check.png"
import users from "../../images/users.png"
import clock from "../../images/clock.png"
import map from "../../images/map-pin.png"
import school from "../../images/school.png"
import "./Resources.css"
const Resources = () => {
    return (
        <div className="resources">
            <div className="column">
                <div className="point">
                    <SimpleAdvavntage title="Преподаватели"
                        mainText="Коллектив русских и иностранных преподавателей сделают для вас процесс изучения любого иностранного языка лёгким, удобным и доступным на любом уровне знаний"
                        image={star}
                    />
                </div>
                <div className="point">
                <SimpleAdvavntage title="Поддержка"
                    mainText="Если у вас возникают вопросы, обратитесь к вашим менеджерам удобным для вас способом, они ответят на все вопросы"
                    image={message}
                />
                </div>
                <div className="point">
                <SimpleAdvavntage title="Гибкость"
                    mainText="Мы можем предоставить вам любой формат обучения в любое удобное для вас время"
                    image={users}
                />
                </div>
            </div>
            <div className="column">
            <div className="point">
                <SimpleAdvavntage title="Опыт"
                    mainText="В течение более чем 25 лет академияуспешно обучает иностранным языкам студентов и корпорации"
                    image={clock}
                    />
                    </div>
                    <div className="point">
                <SimpleAdvavntage title="Местоположение"
                    mainText="Мы находимся рядом с вашим домом"
                    image={map}
                /></div>
                <div className="point">

                <SimpleAdvavntage title="Методика"
                    mainText="Если у вас возникают вопросы, обратитесь к вашим менеджерам удобным для вас способом, они ответят на все вопросы"
                    image={school}
                    />
                    </div>
            </div>
        </div>

    )
}

export default Resources