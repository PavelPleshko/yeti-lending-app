import { createContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useResolveMatchingTheme } from './hooks/use-resolve-matching-theme';
import { useThemeStorage } from './hooks/use-theme-storage';
import { createYetiMaterialTheme } from './theme';
import { ThemeProvider } from '@mui/material';
import { useThemeLoader } from './hooks/use-theme-loader';
import { useThemeVars } from './hooks/use-theme-vars';
import { AvailableThemes } from './theme.constants';

export const AppThemeContext = createContext<{
    currentTheme: AvailableThemes,
    changeTheme: (theme: string) => void,
}>({} as any);

function AppThemeProvider ({ children }: any) {
    const [ loadTheme ] = useThemeLoader();
    const themeFromPreferences = useResolveMatchingTheme();
    const { storeTheme } = useThemeStorage();
    const [ currentTheme, setCurrentTheme ] = useState<AvailableThemes>(themeFromPreferences);

    useLayoutEffect(() => {
        setCurrentTheme(themeFromPreferences);
    }, [ themeFromPreferences ]);

    // whenever currentTheme changes we load new stylesheet into the DOM and re-create the
    // color palette for material.
    useEffect(() => {
        loadTheme(currentTheme);
    }, [ currentTheme ]);

    const themeVars = useThemeVars(currentTheme);

    const materialTheme = useMemo(() => {
            if (themeVars) {
                return createYetiMaterialTheme(themeVars);
            }
            return null;
        },
        [ themeVars ],
    );

    //// PROVIDER API
    const changeTheme = (themeId: AvailableThemes): void => {
        setCurrentTheme(themeId);
        storeTheme(themeId);
    };

    return (
        <AppThemeContext.Provider value={ { currentTheme, changeTheme } }>
            { materialTheme ? <ThemeProvider theme={ materialTheme }>
                {/*<CssBaseline/>*/ }
                { children }
            </ThemeProvider> : null }
        </AppThemeContext.Provider>
    );
}

export default AppThemeProvider;
