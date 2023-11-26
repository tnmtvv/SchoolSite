import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import "./MainCarousel.css";
  
  const Card = ({ image, title, category }) => {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className="card"
      >
        <div>
          <Text className="category" size="xs">
            {category}
          </Text>
          <Title order={3} className="title" >
            {title}
          </Title>
        </div>
        <Button className='menu-button'>
          Подробнее
        </Button>
      </Paper>
    );
  }
  
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best forests to visit in North America',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Aurora in Norway: when to visit for best experience',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best places to visit this winter',
      category: 'tourism',
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Active volcanos reviews: travel at your own risk',
      category: 'nature',
    },
  ];
  
  const MainCarousel = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
      <Carousel.Slide key={item.title}>
        <Card {...item} />
      </Carousel.Slide>
    ));
  
    return (
      <div style={{margin: "100px"}}>
      <Carousel slideSize="20%" 
      height={500} 
      align="start" 
      slideGap="xl" 
      controlsOffset="xl" 
      controlSize={30} loop dragFree
      >
        {slides}
    </Carousel>
      </div>
    );
  }

  export default MainCarousel;