import React from 'react';
import { Link } from 'react-router-dom';
import './SimpleImgLink.css';

const SimpleImgLink = ({ text, img, link }) => {
    return (
        <div className="simple-img-link">
            <Link to={link}>
                <div className="background-image">
                    <img className="menu-image" src={img} />
                    <div className="text-over-image">{text}</div>
                </div>
            </Link>
        </div>
    );
}

export default SimpleImgLink;
