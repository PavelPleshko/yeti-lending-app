import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import React, { FC, useMemo } from 'react';
import AnalyticsIcon from '@mui/icons-material/AnalyticsOutlined';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';
import RouteIcon from '@mui/icons-material/RouteOutlined';

import './value-cards.scss';

interface ValueCard {
    title: string;
    description: string;
    icon: FC;
}

const cardsData: ValueCard[] = [
    {
        title: 'Security',
        description: `Our system is built with security in mind and have been audited by the professionals.`,
        icon: SecurityIcon,
    },
    {
        title: 'Simplicity',
        description: `We guide users through every operation available in the most simple way possible.`,
        icon: RouteIcon,
    },
    {
        title: 'Transparency',
        description: `We provide most up-to-date information on the market with nice visualisations to help
        with finding the most relevant numbers.`,
        icon: AnalyticsIcon,
    }
];

function ValuesCards () {

    const data = useMemo(() => cardsData, []);

    return <Grid container spacing={ 3 } component="ol">
        { data.map((card, index) => {
            console.log(card.icon);
            return (
                <Grid item md={ 4 } xs={ 12 } key={ index } component="li">
                    <Card className="ValueCard">

                        <CardHeader className="ValueCard__header" title={ card.title } component="h3"/>

                        <CardContent>

                            <span className="ValueCard__number">
                                <card.icon/>
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
