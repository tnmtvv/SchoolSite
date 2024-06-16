import React from 'react';
import { Image, Button, Group, Text } from '@mantine/core';
import './Intensive.css'
import img from '../../images/new_ones/camp.JPG'


const Intensive = (props) => {
    const localButton = props.localButton
    return (
        <div className="main-block">
            <div className='all-content'>
                <div className="text-image">
                    <div className="text-block">

                        <div className="title">
                            Интенсивы английского языка для детей и подростков во время каникул
                        </div>

                        <div className="main-text">
                            <Text>
                                <b>Интенсив</b> – это отличная возможность для тех,
                                кто хочет прокачать английский на каникулах,
                                при этом получить удовольствие от занятий и не устать от бесконечной грамматики.
                            </Text>
                            <Text>
                                <b>Основная задача курса</b> – заинтересовать ребят,
                                вне зависимости от возраста и уровня английского,
                                создать англоговорящую среду – важное условие для погружения в язык.
                            </Text>
                        </div>
                    </div>

                    <div className='img'>
                        <Image src={img} alt='...' priority />
                    </div>

                </div>
                <Group className='block-simple-button' mt="md">
                    {localButton}

                </Group>
            </div>
        </div>
    )
}

export default Intensive
