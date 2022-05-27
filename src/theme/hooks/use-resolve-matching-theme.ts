import { useEffect, useState } from 'react';
import { useThemeStorage } from './use-theme-storage';
import { AvailableThemes, DEFAULT_THEME } from '../theme.constants';


const useMediaQuery = (query: string): boolean => {
    const [matched, setMatched] = useState<boolean>(false);
    const { removeThemeFromStorage } = useThemeStorage();

    useEffect(() => {
        const initialMatch = window.matchMedia(query);
        setMatched(initialMatch.matches);

        const reportChanges = (e: MediaQueryListEvent): void => {
            setMatched(e.matches);
            // remove theme from storage since user opted in for different scheme in preferences
            removeThemeFromStorage();
        };

        initialMatch.addEventListener('change', reportChanges);

        return () => {
            initialMatch.removeEventListener('change', reportChanges);
        }
    }, [query])

    return matched;
}

export const useResolveMatchingTheme = (): AvailableThemes => {
    const { getThemeFromStorage } = useThemeStorage();
    const [ resolvedTheme, setResolvedTheme ] = useState<AvailableThemes>(DEFAULT_THEME);
    const doesPreferLightMode = useMediaQuery('(prefers-color-scheme: light)');

    useEffect(() => {
        const appOverriddenTheme = getThemeFromStorage();
        if (appOverriddenTheme) {
            setResolvedTheme(appOverriddenTheme);
        } else if (doesPreferLightMode) {
            setResolvedTheme(AvailableThemes.light);
        } else {
            setResolvedTheme(DEFAULT_THEME);
        }
    });

    return resolvedTheme;
};
