import React, { ComponentProps, createContext, FC, useMemo, useState } from 'react';
import { providers } from 'ethers';

declare interface Window {
    ethereum: providers.ExternalProvider;
}

const WalletContext = createContext({});

// TODO will be needed on dapp, with async connection of the wallet.
export default function WalletProvider ({ children }: ComponentProps<FC>): JSX.Element {
    // const [currentAccount, setCurrentAccount] = useState<string | undefined>()
    //
    //

    return <WalletContext.Provider value={ {} }>
        { children }
    </WalletContext.Provider>;
}
