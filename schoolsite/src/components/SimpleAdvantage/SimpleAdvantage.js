import React from "react";
import { Image } from '@mantine/core';
import "./SimpleAdvantage.css"


const SimpleAdvavntage = (props) => {
    const title = props.title
    const mainText = props.mainText
    const img = props.image
    const textStyle = props.textStyle



    return (
        <div className='simple-adv'>
            <div className='simple-img'>
                <Image src={img} alt='...' cover priority />
            </div>
            <div style={textStyle}>
                <h1 className="simple-adv-header">{title}</h1>
                <h1 className="simple-main-text"> {mainText} </h1>
            </div>
        </div>
    )
}

export default SimpleAdvavntage;