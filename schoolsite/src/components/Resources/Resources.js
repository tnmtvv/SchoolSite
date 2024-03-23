import React from 'react';
import SimpleAdvantage from '../SimpleAdvantage/SimpleAdvantage';
import star from '../../images/star.png'
import message from '../../images/message-check.png'
import users from '../../images/users.png'
import clock from '../../images/clock.png'
import map from '../../images/map-pin.png'
import school from '../../images/school.png'
import './Resources.css'

const Resources = () => {
    const mainTextStyle = {
        maxWidth: "90%",
        display: "flex",
        flexDirection: "column",
        lineHeight: "1"
    }

    return (
        <div className="aggregate_block">
            <div className="header-grid">Почему My Smart</div>
            <div className="resources-desktop">
                <div className="column">
                    <div className="point">
                        <SimpleAdvantage
                            title="Преподаватели"
                            mainText="Процесс изучения любого иностранного языка лёгкий, удобный и доступный на любом уровне знаний"
                            image={star}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Поддержка"
                            mainText="Если у вас возникают вопросы, обратитесь к вашим менеджерам удобным для вас способом, они ответят на все вопросы"
                            image={message}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Гибкость"
                            mainText="Мы можем предоставить вам любой формат обучения в любое удобное для вас время"
                            image={users}
                            textStyle={mainTextStyle}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="point">
                        <SimpleAdvantage
                            title="Опыт"
                            mainText="В течение более чем 25 лет академияуспешно обучает иностранным языкам студентов и корпорации"
                            image={clock}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Местоположение"
                            mainText="Мы находимся рядом с вашим домом"
                            image={map}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Методика"
                            mainText="Если у вас возникают вопросы, обратитесь к вашим менеджерам удобным для вас способом, они ответят на все вопросы"
                            image={school}
                            textStyle={mainTextStyle}
                        />
                    </div>
                </div>
            </div>
            <div className="resources-mobile">
                <div className="column">
                    <div className="point">
                        <SimpleAdvantage title="Преподаватели"
                            mainText="Лёгкий, удобный и доступный на любом уровне знаний процесс изучения"
                            image={star}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Поддержка"
                            mainText="Лёгкий, удобный и доступный на любом уровне знаний процесс изучения"
                            image={message}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Гибкость"
                            mainText="Лёгкий, удобный и доступный на любом уровне знаний процесс изучения"
                            image={users}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Опыт"
                            mainText="Лёгкий, удобный и доступный на любом уровне знаний процесс изучения"
                            image={clock}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Местоположение"
                            mainText="Лёгкий, удобный и доступный на любом уровне знаний процесс изучения"
                            image={map}
                            textStyle={mainTextStyle}
                        />
                    </div>
                    <div className="point">
                        <SimpleAdvantage
                            title="Методика"
                            mainText="Лёгкий, удобный и доступный на любом уровне знаний процесс изучения"
                            image={school}
                            textStyle={mainTextStyle}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;