import React from 'react';
import "./CourseMenu.css"
import img from '../../images/english-speaking-club.jpg'
import SimpleCard from '../SimpleCard/SimpleCard';
// if (window.matchMedia("(max-width: 897px)").matches) {
const cardStyleDesktop = {
  maxWidth: "30%",
  justifyContent: "center",
  height: "fit-content"
}

const cardStyleMobile = {
  maxWidth: "100%",
  justifyContent: "center",
  height: "fit-content"
}

const CourseMenu = (props) => {
  const button_1 = props.button_1
  const button_2 = props.button_2
  const button_3 = props.button_3


  const title_1 = props.title_1
  const title_2 = props.title_2
  const title_3 = props.title_3

  const text_1 = props.text_1
  const text_2 = props.text_2
  const text_3 = props.text_3


  return (
    <div>
      <div className='menu-layout-desktop'>
        <SimpleCard title={title_1} mainText={text_1} button={button_1}
          image={img} simpleCardStyle={cardStyleDesktop} />
        <SimpleCard title={title_2} mainText={text_2} button={button_2}
          image={img} simpleCardStyle={cardStyleDesktop} />
        <SimpleCard title={title_3} mainText={text_3} button={button_3}
          image={img} simpleCardStyle={cardStyleDesktop} />
      </div>

      <div className='menu-layout-mobile'>
        <SimpleCard title={title_1} mainText={text_1} button={button_1}
          image={img} simpleCardStyle={cardStyleMobile} />
        <SimpleCard title={title_2} mainText={text_2} button={button_2}
          image={img} simpleCardStyle={cardStyleMobile} />
        <SimpleCard title={title_3} mainText={text_3} button={button_3}
          image={img} simpleCardStyle={cardStyleMobile} />
      </div>

    </div>
  );
}



export default CourseMenu