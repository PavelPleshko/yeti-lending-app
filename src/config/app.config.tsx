import React, { useEffect, useState, createContext } from 'react';

export type InitializerFn = () => Promise<any>;

export interface AppConfig {
    appConfig: {
        name: string;
    };
}

export const AppContext = createContext<AppConfig>({} as AppConfig);
const staticAppContext = {
    name: 'Yeti finance',
};

function AppInitializeProvider (props: any) {

    const [ initialized, setInitialized ] = useState(false);
    const [ initializing, setInitializing ] = useState(false);
    const initializers: InitializerFn[] = props.initializers || [];

    useEffect(() => {
        if (!initialized && !initializing) {
            setInitializing(true);
            Promise.all(initializers.map(initFn => initFn())).then(() => {
                setInitialized(true);
                setInitializing(false);
            }).catch(err => setInitializing(false));
        }
    }, []);

    if (initializing) {
        return <div>Initializing app...</div>;
    }
    if (initialized) {
        return <AppContext.Provider value={ {
            appConfig: staticAppContext,
        } }>
            { props.children }
        </AppContext.Provider>;
    }
    return null;
}


export default AppInitializeProvider;
