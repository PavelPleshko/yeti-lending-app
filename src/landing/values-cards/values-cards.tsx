import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './value-cards.module.scss';

interface ValueCard {
    title: string;
    description: string;
}

const cardsData: ValueCard[] = [
    {
        title: 'Security',
        description: `Our system is built with security in mind and have been audited by the professionals.`
    },
    {
        title: 'Simplicity',
        description: `We guide users through every operation available in the most simple way possible.`,
    },
    {
        title: 'Transparency',
        description: `We provide most up-to-date information on the market with nice visualisations to help
        with finding the most relevant numbers.`,
    }
];

function ValuesCards () {

    return <Grid container spacing={ 3 } component="ol">
        { cardsData.map((card, index) => {
            return (
                <Grid item md={ 4 } xs={ 12 } key={ index } component="li">
                    <Card className={styles.ValueCard}>

                        <CardHeader className={styles.ValueCard__header} title={ card.title } component="h3"/>

                        <CardContent>

                            <span className={styles.ValueCard__number}>
                                0{index + 1}
                            </span>

                            <p>
                                { card.description }
                            </p>

                        </CardContent>

                    </Card>
                </Grid>
            );
        }) }
    </Grid>;
}

export default ValuesCards;
