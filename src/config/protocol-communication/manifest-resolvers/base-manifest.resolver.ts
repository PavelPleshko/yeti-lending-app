import { ContractAddress, ContractID, ContractManifest } from '../contract-manifest.types';


export abstract class BaseManifestResolver {
    protected _manifestContents: ContractManifest;

    async load (): Promise<ContractManifest>  {
        return this._load()
            .then(contents => this._manifestContents = contents);
    }

    abstract getContract (contractID: ContractID): ContractAddress;

    abstract _load (): Promise<ContractManifest>;
}
