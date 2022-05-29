import React, { ComponentProps, FC, useContext } from 'react';
import { createContext } from 'react';

import { useYetiContractManifest } from './use-yeti-contract-manifest';

export interface ContractManifestContext {
    getContractAddress: (id: string) => string;
}

const contractManifestContext = createContext({} as ContractManifestContext);

export default function ContractManifestProvider ({ children }: ComponentProps<FC>): JSX.Element | null {
    const { manifestReady, getContractAddress } = useYetiContractManifest();
    console.log(manifestReady);
    return manifestReady ? <contractManifestContext.Provider value={ { getContractAddress } }>
        { children }
    </contractManifestContext.Provider> : null;
}

export const useContractManifestContext = () => useContext(contractManifestContext);
