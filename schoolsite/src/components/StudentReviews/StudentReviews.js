import React from "react";
import { Carousel } from '@mantine/carousel';
import { Paper, Image, Text, Title, Button, useMantineTheme } from '@mantine/core';
import reviews from "../../data/reviews"
import "./StudentReviews.css"

const StudentReviews = () => {
    const slides = reviews.map((item) => (
        <Carousel.Slide>
            <div className="one-review">
                <Image src={item} />
            </div>
        </Carousel.Slide>
    ));

    return (
        <div className="carousel-block">
            <div className="reviews" style={{ margin: "100px" }}>
            <Text size={45}className="reviews-title">Отзывы студентов</Text>
                <Carousel
                    dragFree
                    slideGap="md"
                    align="start"
                    height="100%"
                    slidesToScroll={1}
                    loop
                    controlSize={40}
                >
                    {slides}
                </Carousel>
            </div>
        </div>
    );
}

export default StudentReviews