import React from "react";
import img from "../images/ConversationClubsCover.jpg"
import { Title, Grid, Divider, Text, rem, Image } from "@mantine/core"
import { Container, SimpleGrid, Skeleton } from '@mantine/core';
import Cover from "../components/Cover/Cover.js"
import "../css/ConversationClub.css"
import kv from "../images/Kvadrat.jpg"
import texts from "../texts/SpeakingClub.json";

const ConversationClub = () => {
    // const title = <Title color="white">Разговорные<br />клубы</Title>
    const texts_speaking = texts.texts[0]
    const title = texts_speaking["title"]

    const PRIMARY_COL_HEIGHT = rem(200);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <div>
            <Cover title={title} img={img} />

            <div className="about-conversation-club">
                <div className="description-sp">
                    <div data-aos="fade-up" data-aos-duration="800">
                        <Title className="title" size={50}>Что такое разговорный клуб?</Title>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"><Divider /></div>
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                        <Text size={25} className="text-seaking-club">{texts_speaking["text-seaking-club"]}</Text>
                    </div>
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
                                    src={kv} />
                            </Grid.Col>
                        </Grid>
                    </Grid>
                </Container>


            </div>

            <div className="info">
                <div className="text-info">
                    <div data-aos="fade-down" data-aos-duration="800">
                        <Title size={50}>Расписание и стоимость</Title>
                    </div>

                    <Text size={25} className="cost">
                        1 занятие - 1200 руб<br />
                        Абонемент на 4 занятия - 4000 руб<br />
                        Длительность абонемента - 2 месяца
                    </Text>

                </div>

            </div>
        </div>
    )
}

export default ConversationClub;