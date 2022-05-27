import { useEffect, useState } from 'react';

import { ThemeVariables, ThemeVariablesResolved } from '../theme.types';
import { AvailableThemes } from '../theme.constants';

const allVarsIterable = Object.values(ThemeVariables);

/**
 * Resolves the css variables and sets off the change detection.
 * Should be used on top level component as it can be computationally
 * expensive to evaluate current style of the root element.
 */
export const useThemeVars = (theme: AvailableThemes): ThemeVariablesResolved | null => {
    const [ vars, setVars ] = useState<ThemeVariablesResolved | null>(null);

    useEffect(() => {
        // we need to run this effect on next tick when there is some style
        // has been computed after theme change, so we have access to up-to-date css variables.
        Promise.resolve().then(() => {
            const style = getComputedStyle(document.documentElement);
            const result = allVarsIterable.reduce((acc, varName) => {
                acc[varName] = style.getPropertyValue(varName)?.trim();
                return acc;
            }, {} as ThemeVariablesResolved);
            setVars(result);
        });
    }, [ theme ]);

    return vars;
};
