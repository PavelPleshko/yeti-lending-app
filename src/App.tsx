import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './AppRouter';
import AppInitializeProvider from './config/app.config';
import Footer from './landing/footer/footer';
import { yetiMainTheme } from './theme/theme';


import './App.scss';

function App () {
    return (
        <AppInitializeProvider>
            <ThemeProvider theme={ yetiMainTheme }>

                {/*<CssBaseline/>*/ }

                <div className="layout-wrapper layout-container layout-container--cutoff">

                    <div className="layout-container layout-container--auto layout-container--scroll">
                        <main className="layout-container">
                            <AppRouter/>
                        </main>

                        <footer className="layout-bar">
                            <Footer/>
                        </footer>
                    </div>
                </div>

            </ThemeProvider>
        </AppInitializeProvider>
    );
}

export default App;
