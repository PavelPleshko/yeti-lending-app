import React, { ComponentProps, useContext } from 'react';
import { createContext } from 'react';

import { useYetiContractManifest } from './use-yeti-contract-manifest';

export interface ContractManifestContext {
    getContractAddress: (id: string) => string;
}

const contractManifestContext = createContext<ContractManifestContext>({} as ContractManifestContext);

export default function ContractManifestProvider ({ children }: ComponentProps<any>): JSX.Element | null {
    const { manifestReady, getContractAddress } = useYetiContractManifest();

    return manifestReady ? <contractManifestContext.Provider value={ { getContractAddress } }>
        { children }
    </contractManifestContext.Provider> : null;
}

export const useContractManifest = () => useContext(contractManifestContext);
