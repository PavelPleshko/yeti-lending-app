import { Button, Grid } from '@mui/material';
import React from 'react';

import './landing-page.scss';
import MainNavigation from '../shared/main-navigation/main-navigation';
import Jumbotron from '../shared/ui/jumbotron/jumbotron';
import HeroBg from './hero-bg';
import HowItWorks from './how-it-works/how-it-works';
import ValuesCards from './values-cards/values-cards';
import dashboardImage from '../static/images/dashboard.svg';
import { ReactComponent as BackgroundIllustration } from '../static/images/illustration-bg1.svg';

function LandingPage (): JSX.Element {

    return (
        <div className="LandingPage">
            <MainNavigation/>
            <div className="LandingPage__hero-wrapper">
                <div className="LandingPage__hero">
                    <HeroBg/>
                    <div>
                        <div className="LandingPage__hero-image-bg">
                            <BackgroundIllustration/>
                        </div>
                        <div className="LandingPage__hero-bg"/>
                    </div>
                    <Jumbotron>
                        <div className="LandingPage__hero-container">
                            <Grid container spacing={ 4 }>
                                <Grid item md={ 1 } xs={ 0 }/>
                                <Grid item xs={ 12 } md={ 6 } className="LandingPage__hero-content">
                                    <h1>Best platform for lending and borrowing</h1>
                                    <p>
                                        Find the most favorable terms of managing assets
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

            <section className="LandingPage__content-section">
                <h2 className="LandingPage__content-section-header">Our values</h2>
                <ValuesCards/>
            </section>

            <section className="LandingPage__content-section">
                <h2 className="LandingPage__content-section-header">How it works?</h2>
                <HowItWorks/>
            </section>


            <section className="LandingPage__content-section">
                <h2 className="LandingPage__content-section-header">Track your income</h2>
                <Grid container>
                    <Grid item xs={ 6 }>
                        <p>
                            You can monitor the real-time earnings on the user dashboard. This will
                            help you to invest and borrow intelligently.
                        </p>
                        <Button variant="contained" color="secondary">
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

                <h2>More than <b className="accent-text">12</b> asset pools with more than <b className="accent-text">3.000.000$</b> worth
                    of assets</h2>

                <Button color="secondary" variant="contained">
                    See all
                </Button>

            </section>
        </div>
    );
}

export default LandingPage;
