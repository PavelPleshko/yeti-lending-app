import { AppBar, Button, Toolbar, ToggleButton, ToggleButtonGroup } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import * as React from 'react';

import { useAppTheme } from '../../theme';
import { AvailableThemes } from '../../theme/hooks/use-theme-loader';
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
                        onChange={ (event, value) => changeTheme(value) }
                        exclusive
                    >
                        <ToggleButton value={ AvailableThemes.dark }>
                            <DarkModeIcon/>
                        </ToggleButton>
                        <ToggleButton value={ AvailableThemes.light }>
                            <WbSunnyIcon/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </Toolbar>

    </AppBar>;
}

export default MainNavigation;
