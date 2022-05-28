import { ContractAddress, ContractID, ContractManifest } from '../contract-manifest.types';
import { BaseManifestResolver } from './base-manifest.resolver';

// TODO make it configurable via process vars
const devServerUrl = 'http://localhost:8080';

export class DevManifestResolver extends BaseManifestResolver {

    _load (): Promise<ContractManifest> {
        return fetch(`${ devServerUrl }/deployments.json`)
            .then(res => res.json());
    }

    getContract (contractID: ContractID): ContractAddress {
        const contractKey = `hardhat.${ contractID }`;
        return this._manifestContents[contractKey];
    }
}
