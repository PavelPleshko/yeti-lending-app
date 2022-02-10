import { createTheme } from '@mui/material/styles';
import variables from '../static/sass/_variables.module.scss';

export const yetiMainTheme = createTheme({
    palette: {
        primary: {
            main: variables.surfaceBrand,
        },
        secondary: {
            main: variables.surfaceSecondary,
        }
    },
});
