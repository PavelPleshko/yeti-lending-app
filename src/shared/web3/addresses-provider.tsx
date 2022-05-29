import React, { useMemo } from 'react';
import { ComponentProps, createContext, useContext } from 'react';
import { ethers } from 'ethers';

import { useContractManifestContext } from '../../config/protocol-communication/contract-manifest.provider';
import { ADDRESSES_PROVIDER_ABI } from './abis/addresses-provider';
import { AddressesProviderContract } from './types/addresses-provider-contract.types';

const AddressesRegistryContext = createContext({} as { getMarketProtocol: () => Promise<any> });

export default function AddressesRegistryProvider ({ children }: ComponentProps<any>): JSX.Element {

    const { getContractAddress } = useContractManifestContext();

    const addressesRegistryContract = useMemo(() => {
        return new ethers.Contract(
            getContractAddress('AddressesProvider'),
            ADDRESSES_PROVIDER_ABI,
        ) as AddressesProviderContract;
    }, []);

    const context = {
        getMarketProtocol: () => addressesRegistryContract.getMarketProtocol(),
    };

    return <AddressesRegistryContext.Provider value={ context }>
        { children }
    </AddressesRegistryContext.Provider>;
}


export const useAddressesRegistryContext = () => useContext(AddressesRegistryContext);
