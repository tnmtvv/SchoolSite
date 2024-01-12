import React from "react";
import SimpleAdvantage from "../SimpleAdvantage/SimpleAdvantage";
import "./ExamsAdvantages.css"



const ExamAdvantage = (props) => {
    const img = props.image
    const examTextStyle = {
        maxWidth: "90%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        lineHeight: "1"
    }
    return (
        < div className="main-exam-block">
            <div className="header_adv">
                Эффективная подготовка с My Smart
            </div>
            <div className="advantages">
                <SimpleAdvantage title={'Бесплатное тестирование'} mainText={'Помогаем определить текущий уровень владения языком'} image={img} textStyle={examTextStyle} />
                <SimpleAdvantage title={'Преподаватели профессионалы'} mainText={'Проводим занятия с международными экзаменаторами и носителями языка'} image={img} textStyle={examTextStyle} />
                <SimpleAdvantage title={'Лучшие программы'} mainText={'Наши программы разработаны опытными педагогами'} image={img} textStyle={examTextStyle} />
            </div >
        </div>
    )
}

export default ExamAdvantage;
