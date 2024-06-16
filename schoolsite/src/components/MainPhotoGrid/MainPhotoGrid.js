// import React from 'react';
// import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
// import './MainPhotoGrid.css'

// const PRIMARY_COL_HEIGHT = rem(300);
// // const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
// const SECONDARY_COL_HEIGHT = rem(200);

// const LeadGrid = () => {
//     return (
//         <div className="main-photo-grid">
//             <Container my="md">
//                 <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
//                     <Skeleton
//                         height={PRIMARY_COL_HEIGHT}
//                         radius="md"
//                         animate={false}
//                     />
//                     <Grid gutter="md">
//                         <Grid.Col>
//                             <Skeleton
//                                 height={SECONDARY_COL_HEIGHT}
//                                 radius="md"
//                                 animate={false}
//                             />
//                         </Grid.Col>
//                         <Grid.Col span={6}>
//                             <Skeleton
//                                 height={SECONDARY_COL_HEIGHT}
//                                 radius="md"
//                                 animate={false}
//                             />
//                         </Grid.Col>
//                         <Grid.Col span={6}>
//                             <Skeleton
//                                 height={SECONDARY_COL_HEIGHT}
//                                 radius="md"
//                                 animate={false}
//                             />
//                         </Grid.Col>
//                     </Grid>
//                 </SimpleGrid>
//             </Container>
//         </div>
//     );
// }

// export default LeadGrid;
import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = ['https://i.imgur.com/4lgkifQ.jpeg', 'https://i.imgur.com/ySgsk3L.jpeg', 'https://i.imgur.com/YVNUNtj.jpeg', 'https://i.imgur.com/mC2jeTy.jpeg', 'https://i.imgur.com/vL8zJkt.jpeg', 'https://i.imgur.com/DuUKRCX.jpeg'];

const LeadGrid = () => {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <Carousel maw={900} mx="auto" withIndicators>
            {slides}
        </Carousel>
    );
}

export default LeadGrid;