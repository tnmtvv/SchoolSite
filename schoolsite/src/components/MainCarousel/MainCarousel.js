import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Button } from '@mantine/core';
import { data } from '../../data/mainCarouselData'
import './MainCarousel.css';

const Card = ({ image, title, category }) => {
  return (
    <Paper
      className="card"
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <Text className="category" size="xs">
          {category}
        </Text>
        <Title className="title" order={3} >
          {title}
        </Title>
      </div>

      <Button className="menu-button">
        Подробнее
      </Button>
    </Paper>
  );
}

const MainCarousel = () => {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className="main-carousel">
      <Carousel
        slideSize="20%"
        height={500}
        align="start"
        slideGap="xl"
        controlsOffset="xl"
        controlSize={30}
        loop
        dragFree
      >
        {slides}
      </Carousel>
    </div>
  );
}

export default MainCarousel;