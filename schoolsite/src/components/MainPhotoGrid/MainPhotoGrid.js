import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import React from 'react';
const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
    // const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
    const SECONDARY_COL_HEIGHT = rem(200);
    return (
        <div style={{ marginLeft: "12%", marginRight: "12%", marginTop: "10%" }}>
            <Container my="md">
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                    <Grid gutter="md">
                        <Grid.Col>
                            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                        </Grid.Col>
                    </Grid>
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default LeadGrid;
