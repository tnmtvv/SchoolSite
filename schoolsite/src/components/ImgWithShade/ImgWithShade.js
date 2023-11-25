import React from "react";

import { Image } from "@mantine/core";
import './ImgWithShade.css'

const ImgWithShade = (props) => {
    var img = props.image
    return (
        <div className='img-with-shade'>
            <div className='CEFR-image'>
                <Image src={img} alt='...' position='top' fill priority />
            </div>
            <div className='img-shade'></div>
        </div>
    )
}
export default ImgWithShade;