import { useContext } from 'react';
import { AppThemeContext } from '../theme-provider';

export const useAppTheme = () => useContext(AppThemeContext);
