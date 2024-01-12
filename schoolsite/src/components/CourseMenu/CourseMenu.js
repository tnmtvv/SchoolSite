import React from 'react';
import "./CourseMenu.css"
import img from '../../images/english-speaking-club.jpg'
import SimpleCard from '../SimpleCard/SimpleCard';
import $ from '../../../node_modules/jquery';

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
// }
// else {
//   var cardStyle = {
//     maxWidth: "100%",
//     justifyContent: "center",
//     height: "fit-content"
//   }
// }
// var cardStyle;
// if (window.matchMedia("(min-width: 1000px)").matches) {
//   console.log("rabbit")
// } else {
//   console.log("fox")
/* the viewport is less than 400 pixels wide */
// }

calcSceneStart2();
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('resize', calcSceneStart2);
});

function calcSceneStart2() {
  if (window.matchMedia("(max-width: 1105px)").matches) {
    // var cardStyle_1 = {
    //   maxWidth: "30%",
    //   justifyContent: "center",
    //   height: "fit-content"
    // }
    console.log("rabbit")
  } else {
    // var cardStyle_1 = {
    //   maxWidth: "100%",
    //   justifyContent: "center",
    //   height: "fit-content"
    // }
    console.log("fox")
  }
  // cardStyle = cardStyle_1;
  // console.log(cardStyle)
}

const CourseMenu = (props) => {
  const button_1 = props.button_1
  const button_2 = props.button_2
  const button_3 = props.button_3
  return (
    <div>
      <div className='menu-layout-desktop'>
        <SimpleCard title={'Узнать свой уровень'} mainText={'Программа учитывает возрастные и психологические особенности детей.' +
          'Уроки проводятся в игровой форме, но строятся так, чтобы ребята параллельно осваивали английский язык, ' +
          'учитывая все необходимые навыки.'} button={button_1}
          image={img} simpleCardStyle={cardStyleDesktop} />
        <SimpleCard title={'Группы уровней A1-C2'} mainText={'Занятия английским языком для детей основываются на коммуникативном подходе.' +
          'Дети с удовольствием включаются в игру, стараются использовать в речи новые слова,' +
          'учатся писать и читать на английском языке.'} button={button_2}
          image={img} simpleCardStyle={cardStyleDesktop} />
        <SimpleCard title={'Для специальных целей'} mainText={'Курс позволит школьникам минимизировать стресс при сдаче экзаменов, поступить в выбранный ВУЗ' +
          ' и успешно реализоваться в жизни. Занятия проводятся преимущественно на английском языке,' +
          'даже для тех, кто начинает обучение с нуля. Курс охватывает все языковые навыки,' +
          'а также "soft skills", необходимые для школьников.'} button={button_3}
          image={img} simpleCardStyle={cardStyleDesktop} />
      </div>

      <div className='menu-layout-mobile'>
        <SimpleCard title={'Узнать свой уровень'} mainText={'Программа учитывает возрастные и психологические особенности детей.' +
          'Уроки проводятся в игровой форме, но строятся так, чтобы ребята параллельно осваивали английский язык, ' +
          'учитывая все необходимые навыки.'} button={button_1}
          image={img} simpleCardStyle={cardStyleMobile} />
        <SimpleCard title={'Группы уровней A1-C2'} mainText={'Занятия английским языком для детей основываются на коммуникативном подходе.' +
          'Дети с удовольствием включаются в игру, стараются использовать в речи новые слова,' +
          'учатся писать и читать на английском языке.'} button={button_2}
          image={img} simpleCardStyle={cardStyleMobile} />
        <SimpleCard title={'Для специальных целей'} mainText={'Курс позволит школьникам минимизировать стресс при сдаче экзаменов, поступить в выбранный ВУЗ' +
          ' и успешно реализоваться в жизни. Занятия проводятся преимущественно на английском языке,' +
          'даже для тех, кто начинает обучение с нуля. Курс охватывает все языковые навыки,' +
          'а также "soft skills", необходимые для школьников.'} button={button_3}
          image={img} simpleCardStyle={cardStyleMobile} />
      </div>
    </div>
  );
}



export default CourseMenu