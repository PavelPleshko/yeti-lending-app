export enum ThemeVariables {
    // palette
    colorBrand = '--color-brand',
    colorAccent = '--color-accent',

    // text colors
    textColorNormal = '--text-color-normal',
    textColorBody1 = '--text-color-body1',
    textColorBody2 = '--text-color-body2',

    // surface colors
    surfaceColorNormal = '--surface-color-normal',
    surfaceColorElevated1 = '--surface-color-elevated1',
    surfaceColorElevated2 = '--surface-color-elevated2',
}

export type ThemeVariablesResolved = Record<ThemeVariables, string>;
