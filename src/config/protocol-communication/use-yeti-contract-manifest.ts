import { useEffect, useMemo, useState } from 'react';
import { DevManifestResolver } from './manifest-resolvers/dev-manifest.resolver';


export const useYetiContractManifest = () => {
    const resolver = useMemo(() => new DevManifestResolver(), []);
    const [ manifestReady, setReady ] = useState(false);

    useEffect(() => {
        resolver.load().then(() => {
            setReady(true);
        });
    }, []);

    return {
        manifestReady,
        getContractAddress: (address: string) => resolver.getContract(address),
    };
};
