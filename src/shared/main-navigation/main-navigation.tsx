import { AppBar, Button, Toolbar } from '@mui/material';
import * as React from 'react';

import Logo from '../logo/logo';
import './main-navigation.scss';

function MainNavigation () {
    return <AppBar position="static" color="transparent" elevation={ 0 } className="MainNavigation">

        <Toolbar variant="dense" className="MainNavigation__container">
            <div className="MainNavigation__links">
                <div className="MainNavigation__logo-container">
                    <Logo/>
                    <a href="/" className="MainNavigation__brand" aria-label="Home">Yeti finance</a>
                </div>

                <nav aria-label="Main navigation">
                    <ul>
                        <li>
                            <a href="/docs">Docs</a>
                        </li>
                        <li>
                            <a href="/pools">Pools</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="MainNavigation__actions">
                <Button variant="outlined" color="secondary" href="/app">
                    Go to app
                </Button>
            </div>
        </Toolbar>

    </AppBar>;
}

export default MainNavigation;
