import * as React from 'react';
import AppRouter from './AppRouter';
import AppInitializeProvider from './config/app.config';
import { Footer } from './landing/footer';
import { AppThemeProvider } from './theme';


function App () {
    return (
        <AppInitializeProvider>
            <AppThemeProvider >

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

            </AppThemeProvider>
        </AppInitializeProvider>
    );
}

export default App;
