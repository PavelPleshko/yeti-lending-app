import { AvailableThemes } from '../theme.constants';

const themeStorageKey = '__@@Yeti-theme-id@@__';

export const useThemeStorage = () => {
    const storage = window.localStorage;

    const storeTheme = (theme: AvailableThemes) => {
        storage.setItem(themeStorageKey, theme);
    };

    const getThemeFromStorage = (): AvailableThemes => {
        return storage.getItem(themeStorageKey) as AvailableThemes;
    };

    const removeThemeFromStorage = (): void => {
        storage.removeItem(themeStorageKey);
    };

    return {
        storeTheme,
        getThemeFromStorage,
        removeThemeFromStorage,
    };
};
