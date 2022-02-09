import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './AppRouter';
import MainNavigation from './shared/main-navigation/main-navigation';

function App () {
    return (
        <>
            <CssBaseline/>
            <header>
                <MainNavigation/>
            </header>
            <main>
                <AppRouter/>
            </main>

            <footer>
                Footer
            </footer>
        </>
    );
}

export default App;
