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
        lineHeight: "1",

    }
    const header = props.header
    const advs = props.advs
    const texts = props.texts

    const title_1 = advs['test']
    const title_2 = advs['teachers']
    const title_3 = advs['programs']

    const text_1 = texts['text_1']
    const text_2 = texts['text_2']
    const text_3 = texts['text_3']



    return (
        < div className="main-exam-block">
            <div className="header_adv">
                {header}
            </div>
            <div className="advantages">
                <SimpleAdvantage title={title_1} mainText={text_1} image={img} textStyle={examTextStyle} />
                <SimpleAdvantage title={title_2} mainText={text_2} image={img} textStyle={examTextStyle} />
                <SimpleAdvantage title={title_3} mainText={text_3} image={img} textStyle={examTextStyle} />
            </div >
        </div>
    )
}

export default ExamAdvantage;
