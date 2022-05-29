import { BaseContract, CallOverrides } from 'ethers';

export interface AddressesProviderContract extends BaseContract {
    getMarketProtocol(overrides?: CallOverrides): Promise<string>;

    getPriceFeed(overrides?: CallOverrides): Promise<string>;
}
