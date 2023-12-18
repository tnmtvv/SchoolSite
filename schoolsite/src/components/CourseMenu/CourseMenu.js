import React from 'react';
import "./CourseMenu.css"
import img from '../../images/english-speaking-club.jpg'
import SimpleCard from '../SimpleCard/SimpleCard';

const cardStyle = {
  maxWidth: "30%",
  justifyContent: "center",
  height: "fit-content"
}
const CourseMenu = () => {
  return (
    <div className='menu-layout'>
      <SimpleCard title={'Узнать свой уровень'} mainText={'Программа учитывает возрастные и психологические особенности детей.' +
        'Уроки проводятся в игровой форме, но строятся так, чтобы ребята параллельно осваивали английский язык, ' +
        'учитывая все необходимые навыки.'} buttonText={'Узнать уровень'}
        image={img} simpleCardStyle={cardStyle} />
      <SimpleCard title={'Группы уровней A1-C2'} mainText={'Занятия английским языком для детей основываются на коммуникативном подходе.' +
        'Дети с удовольствием включаются в игру, стараются использовать в речи новые слова,' +
        'учатся писать и читать на английском языке.'} buttonText={'Узнать расписание'}
        image={img} simpleCardStyle={cardStyle} />
      <SimpleCard title={'Для специальных целей'} mainText={'Курс позволит школьникам минимизировать стресс при сдаче экзаменов, поступить в выбранный ВУЗ' +
        ' и успешно реализоваться в жизни. Занятия проводятся преимущественно на английском языке,' +
        'даже для тех, кто начинает обучение с нуля. Курс охватывает все языковые навыки,' +
        'а также "soft skills", необходимые для школьников.'} buttonText={'Узнать расписание'}
        image={img} simpleCardStyle={cardStyle} />
    </div>
  );
}

export default CourseMenu