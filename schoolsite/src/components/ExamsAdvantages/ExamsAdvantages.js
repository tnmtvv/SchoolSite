import React from "react";
import SimpleAdvantage from "../SimpleAdvantage/SimpleAdvantage";
import "./ExamsAdvantages.css"



const ExamAdvantage = (props) => {
    const img = props.image
    return (
        < div className="main-exam-block">
            <div className="header_adv">
                Эффективная подготовка с My Smart
            </div>
            <SimpleAdvantage title={'Бесплатное тестирование'} mainText={'Помогаем определить текущий уровень владения языком т составляем индивидуальный план занятий'} image={img} />
            <SimpleAdvantage title={'Преподаватели профессионалы'} mainText={'Проводим занятия с международными экзаменаторами и носителями языка'} image={img} />
            <SimpleAdvantage title={'Лучшие программы'} mainText={'Наши программы разработаны опытными педагогами в соответствии с международными стандартами'} image={img} />
        </div >
    )
}

export default ExamAdvantage;
