import * as React from 'react';
import AppRouter from './AppRouter';
import AppInitializeProvider from './config/app.config';
import ContractManifestProvider from './config/protocol-communication/contract-manifest.provider';
import { Footer } from './landing/footer';
import { createProvidersContainer } from './shared/providers/provider.container';
import { AppThemeProvider } from './theme';

const AppProviderContainer = createProvidersContainer(
    AppInitializeProvider,
    AppThemeProvider,
    ContractManifestProvider,
);

function App () {
    return (
        <AppProviderContainer>
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
        </AppProviderContainer>
    );
}

export default App;
