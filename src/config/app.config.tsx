import React, { useEffect, createContext } from 'react';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

export type InitializerFn = () => Promise<any>;

export interface AppConfig {
    appConfig: {
        name: string;
    };
}

export type InitializeAppMachineEvents = {
    type: 'DONE';
} | {
    type: 'ERROR';
} | {
    type: 'RETRY';
};

export type InitializeMachineContext = {};

export type InitializeAppMachineStates = {
    value: 'initializing';
    context: InitializeMachineContext;
} | {
    value: 'done';
    context: InitializeMachineContext;
} | {
    value: 'error';
    context: InitializeMachineContext;
}

export const AppContext = createContext<AppConfig>({} as AppConfig);
const staticAppContext = {
    name: 'Smart Yeti',
};

function AppInitializeProvider (props: any) {

    const [ state, send ] = useMachine(
        () => createMachine<InitializeMachineContext, InitializeAppMachineEvents, InitializeAppMachineStates>({
            initial: 'initializing',
            states: {
                initializing: {
                    on: {
                        DONE: 'done',
                        ERROR: 'error',
                    },
                },
                error: {
                    on: {
                        RETRY: 'initializing',
                    },
                },
                done: {
                    type: 'final',
                },
            },
        }));


    const initializers: InitializerFn[] = props.initializers || [];

    useEffect(() => {
        Promise.all(initializers.map(initFn => initFn()))
            .then(() => send('DONE'))
            .catch(_ => send('ERROR'));
    }, []);

    const isInitializing = state.matches('initializing');
    const isError = state.matches('error');
    const isDone = state.matches('done');

    if (isInitializing) {
        return <div>Initializing app...Hold on.</div>;
    }

    if (isError) {
        return <>
            <div>Error</div>
            <button onClick={ () => {} }>Retry</button>
        </>;
    }


    if (isDone) {
        return <AppContext.Provider value={ {
            appConfig: staticAppContext,
        } }>
            { props.children }
        </AppContext.Provider>;
    }
    return null;
}


export default AppInitializeProvider;
