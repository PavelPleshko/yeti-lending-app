// eslint-disable-next-line import/no-webpack-loader-syntax
import defaultStyleVars from '!raw-loader!sass-loader!../../static/sass/themes/_dark.scss';
// eslint-disable-next-line import/no-webpack-loader-syntax
import lightStyleVars from '!raw-loader!sass-loader!../../static/sass/themes/_light.scss';
import { useRef } from 'react';

import { AvailableThemes, DEFAULT_THEME } from '../theme.constants';


const varsByTheme = {
    [AvailableThemes.dark]: defaultStyleVars,
    [AvailableThemes.light]: lightStyleVars,
};

export const useThemeLoader = () => {
    const stylesheetRef = useRef<HTMLStyleElement>();

    const load = (theme: AvailableThemes = DEFAULT_THEME): void => {
        if (!stylesheetRef.current) {
            stylesheetRef.current = document.createElement('style');
            document.head.appendChild(stylesheetRef.current);
        }
        stylesheetRef.current!.innerHTML = varsByTheme[theme] as unknown as string;
    };

    return [ load ];
};

