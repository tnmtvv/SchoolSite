import React from "react";
import { Link } from 'react-router-dom';
import { Image, Button, Group, BackgroundImage, Text } from '@mantine/core';
import "./SimpleImgLink.css"


const SimpleImgLink = (props) => {
    var option_text = props.text;
    var img = props.img
    const link_to = props.link

    return (

        <div className="simple-img-link">
            <Link to={link_to}>
                <div className='background-image'>
                    {/* <img className="menu-image" scr={img} fit="fill" /> */}
                    <img className="menu-image" src={img}></img>
                    <div className='text-over-image'>
                        {option_text}
                    </div>
                </div>

            </Link>
        </div>
    );
}

export default SimpleImgLink;
