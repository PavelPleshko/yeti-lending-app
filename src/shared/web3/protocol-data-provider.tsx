import React, { useEffect, useMemo, useState } from 'react';
import { ComponentProps, createContext, useContext } from 'react';
import { ethers } from 'ethers';

import { useContractManifestContext } from '../../config/protocol-communication/contract-manifest.provider';
import { YETI_ABI } from './abis/yeti';
import { useAddressesRegistryContext } from './addresses-provider';
import { YetiContract } from './types/yeti-contract.types';

const ProtocolDataContext = createContext({} as { yetiContract: YetiContract });

export default function ProtocolDataProvider ({ children }: ComponentProps<any>): JSX.Element | null {
    const [ yetiAddress, setAddress ] = useState('');
    const { getContractAddress } = useContractManifestContext();
    const { getMarketProtocol } = useAddressesRegistryContext();

    useEffect(() => {
        getMarketProtocol()
            .then(address => setAddress(address));
    }, []);

    const yetiContract = useMemo(() => {
        if (!yetiAddress) {
            return;
        }

        return new ethers.Contract(
            getContractAddress('Yeti'),
            YETI_ABI,
        ) as YetiContract;
    }, []);

    return yetiContract ? <ProtocolDataContext.Provider value={ { yetiContract } }>
        { children }
    </ProtocolDataContext.Provider> : null;
}


export const useProtocolDataContext = () => useContext(ProtocolDataContext);
