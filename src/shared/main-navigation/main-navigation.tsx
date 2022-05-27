import { AppBar, Button, Toolbar, ToggleButton, ToggleButtonGroup } from '@mui/material';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import * as React from 'react';

import { AvailableThemes, useAppTheme } from '../../theme';
import Logo from '../logo/logo';
import './main-navigation.scss';

function MainNavigation () {
    const { changeTheme, currentTheme } = useAppTheme();

    return <AppBar position="static" elevation={ 0 } className="MainNavigation">

        <Toolbar variant="dense" className="MainNavigation__container">
            <div className="MainNavigation__logo-container">
                <Logo withBackground withLink/>
            </div>

            <div className="MainNavigation__links">

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

                <div className="MainNavigation__actions">
                    <Button variant="contained" color="secondary" href="/app">
                        Go to app
                    </Button>

                    <ToggleButtonGroup
                        size="small"
                        color="info"
                        value={ currentTheme }
                        onChange={ (event, value) => {
                            if (value) {
                                changeTheme(value);
                            }
                        } }
                        exclusive
                    >
                        <ToggleButton value={ AvailableThemes.dark }>
                            <DarkModeOutlinedIcon/>
                        </ToggleButton>
                        <ToggleButton value={ AvailableThemes.light }>
                            <WbSunnyOutlinedIcon/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </Toolbar>

    </AppBar>;
}

export default MainNavigation;
