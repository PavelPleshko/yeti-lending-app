import { BaseContract, CallOverrides } from 'ethers';

export interface YetiContract extends BaseContract {
    getAllAssets (overrides?: CallOverrides): Promise<any>;
}
