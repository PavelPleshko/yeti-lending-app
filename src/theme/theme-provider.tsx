import { createContext, useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createYetiMaterialTheme } from './theme';
import { ThemeProvider } from '@mui/material';
import { AvailableThemes, useThemeLoader } from './hooks/use-theme-loader';
import { useThemeVars } from './hooks/use-theme-vars';

export const AppThemeContext = createContext<{
    currentTheme: AvailableThemes,
    changeTheme: (theme: string) => void,
}>({} as any);

function AppThemeProvider ({ children }: any) {
    const [ loadTheme ] = useThemeLoader();
    const [ currentTheme, setCurrentTheme ] = useState<AvailableThemes>(AvailableThemes.dark);

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
