import { Button, Grid } from '@mui/material';
import * as React from 'react';
import Jumbotron from '../shared/ui/jumbotron/jumbotron';
import './landing-page.scss';

function LandingPage () {

    return (
        <div className="LandingPage">
            <div className="LandingPage__hero">
                <Jumbotron>
                    <div className="LandingPage__hero-container">
                        <div className="LandingPage__hero-bg"/>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} className="LandingPage__hero-content">
                                <h1>Lending and borrowing at a favorable rate</h1>
                                <p>
                                    Discover the new way of investing
                                </p>
                                <Button color="secondary" variant="contained">
                                    Browse assets
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Jumbotron>
            </div>
        </div>
    );
}

export default LandingPage;
