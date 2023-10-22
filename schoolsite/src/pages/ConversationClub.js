import React from "react";
import img from "../images/ConversationClubsCover.jpg"
import { Title, Grid, Divider, Text, rem, Image } from "@mantine/core"
import { Container, SimpleGrid, Skeleton } from '@mantine/core';
import Cover from "../components/Cover/Cover.js"
import "../css/ConversationClub.css"
import kv from "../images/Kvadrat.jpg"

const ConversationClub = () => {
    const title = <Title color="white">Разговорные<br />клубы</Title>
    const PRIMARY_COL_HEIGHT = rem(300);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <div>
            <Cover title={title} img={img} />

            <div className="about-conversation-club">
                <div className="description">
                            <Title className="title" size={50}>Что такое разговорный клуб?</Title>
                            <Divider />
                            <Text size={25}className="text">Разговорный клуб - это беседа на интересные и актуальные темы, благодаря которым вы избавитесь от языкового барьера, сможете свободно говорить и понимать иностранцев на слух. Количество участников - от 4 до 12 человек</Text>
                       
                </div>
                <Container my="md">
                    <Grid cols={{ base: 1, sm: 2 }} spacing="lg">

                        <Grid gutter={35}>
                            <Grid.Col span={6}>
                                <Image
                                    h={SECONDARY_COL_HEIGHT}
                                    w={SECONDARY_COL_HEIGHT}
                                    src={kv}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image
                                    h={SECONDARY_COL_HEIGHT}
                                    w={SECONDARY_COL_HEIGHT}
                                    src={kv}
                                    />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image
                                    h={SECONDARY_COL_HEIGHT}
                                    w={SECONDARY_COL_HEIGHT}
                                    src={kv}
                                    />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image
                                    h={SECONDARY_COL_HEIGHT}
                                    w={SECONDARY_COL_HEIGHT}
                                    src={kv}/>
                            </Grid.Col>
                        </Grid>
                    </Grid>
                </Container>


            </div>

            <div className="info">
                <div className="text-info">

                <Title size={50}>Расписание и стоимость</Title>
                <Text size={25} className="cost"> 
                1 занятие - 1200 руб<br/>
                Абонемент на 4 занятия - 4000 руб<br/>
                Длительность абонемента - 2 месяца
                </Text>
                </div>

            </div>
        </div>
    )
}

export default ConversationClub;