import { Button, Grid } from '@mui/material';
import * as React from 'react';
import MainNavigation from '../shared/main-navigation/main-navigation';
import Jumbotron from '../shared/ui/jumbotron/jumbotron';
import './landing-page.scss';
import ValuesCards from './values-cards/values-cards';
import dashboardImage from '../static/images/dashboard.svg';

function LandingPage () {

    return (
        <div className="LandingPage">
            <div className="LandingPage__hero-wrapper">
                <MainNavigation/>
                <div className="LandingPage__hero">
                    <div className="LandingPage__hero-bg"/>
                    <Jumbotron>
                        <div className="LandingPage__hero-container">
                            <Grid container spacing={ 4 }>
                                <Grid item md={ 1 } xs={ 0 }/>
                                <Grid item xs={ 12 } md={ 6 } className="LandingPage__hero-content">
                                    <h1>Lend and borrow at a favorable rate</h1>
                                    <p>
                                        Discover the new way of investing
                                    </p>
                                    <Button variant="contained">
                                        Browse assets
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Jumbotron>
                </div>
            </div>

            <section className="LandingPage__content-section LandingPage__content-section__dark">
                <h2 className="LandingPage__content-section-header">Our values</h2>
                <ValuesCards/>
            </section>


            <section className="LandingPage__content-section LandingPage__content-section__dark">
                <h2 className="LandingPage__content-section-header">Track your income</h2>
                <Grid container>
                    <Grid item xs={ 6 }>
                        <p>
                            You can monitor the real-time earnings on the user dashboard. This will
                            help you to invest and borrow intelligently.
                        </p>
                        <Button variant="contained">
                            Connect now
                        </Button>
                    </Grid>

                    <Grid item xs={ 1 }/>
                    <Grid item xs={ 4 }>
                        <img width="100%" src={ dashboardImage } alt="Dashboard illustration"/>
                    </Grid>
                </Grid>
            </section>

            <section className="LandingPage__content-section" style={ { textAlign: 'center' } }>

                <h1>More than <b>12</b> asset pools with more than <b>3.000.000$</b> worth assets</h1>

                <Button variant="contained">
                    See all
                </Button>


            </section>
        </div>
    );
}

export default LandingPage;
