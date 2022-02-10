import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './AppRouter';
import MainNavigation from './shared/main-navigation/main-navigation';
import { yetiMainTheme } from './theme/theme';


import './App.scss';

function App () {
    return (
        <ThemeProvider theme={ yetiMainTheme }>
            <CssBaseline/>
            <div className="layout-container layout-container--cutoff layout-wrapper">
                <header className="layout-bar">
                    <MainNavigation/>
                </header>
                <div className="layout-container layout-container--scroll">
                    <main className="layout-container">
                        <AppRouter/>
                    </main>

                    <footer className="layout-bar">
                        Footer
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
