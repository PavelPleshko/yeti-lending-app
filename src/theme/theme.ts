import { createTheme } from '@mui/material/styles';
import variables from '../static/sass/_variables.module.scss';

export const yetiMainTheme = createTheme({
    palette: {
        primary: {
            main: variables.surfaceBrand,
        },
        secondary: {
            main: variables.surfaceAccent,
        },
        background: {
            default: '#d7f6fe',
            paper: variables.surfacePaper
        }
    },
});
