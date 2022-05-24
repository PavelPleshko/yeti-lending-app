import { createTheme, Theme } from '@mui/material/styles';

import { ThemeVariablesResolved, ThemeVariables } from './theme.types';

export const createYetiMaterialTheme = (vars: ThemeVariablesResolved): Theme => {

    return createTheme({
        palette: {
            primary: {
                main: vars[ThemeVariables.colorBrand],
            },
            secondary: {
                main: vars[ThemeVariables.colorAccent],
            },
            background: {
                default: vars[ThemeVariables.surfaceColorNormal],
                paper: vars[ThemeVariables.surfaceColorElevated1]
            },
        },
        typography: {
            body1: {
                color: vars[ThemeVariables.textColorBody1],
            },
            body2: {
                color: vars[ThemeVariables.textColorBody2],
            }
        },
    });
};
