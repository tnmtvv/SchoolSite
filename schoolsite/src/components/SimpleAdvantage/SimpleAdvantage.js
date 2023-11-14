import React from "react";
import { Image } from '@mantine/core';
import "./SimpleAdvantage.css"


const SimpleAdvavntage = (props) => {
    const title = props.title
    const mainText = props.mainText
    const img = props.image

    return (
        <div className='simple-adv'>
            <div className='img'>
                <Image src={img} alt='...' fill priority />
            </div>
            <div className='text-block'>
                <h1 className="adv-header">{title}</h1>
                <h1 className="main-text"> {mainText} </h1>
            </div>
        </div>
    )
}

export default SimpleAdvavntage;