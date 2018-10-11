import { createSelector } from 'reselect';
import getTheme from './getTheme';

const makeSelectorGetActiveTheme = () => {
    return createSelector(getTheme, theme => {
        return theme.activeTheme;
    });
}

const getActiveTheme = (state) => {
    const getActiveThemeSelector =  makeSelectorGetActiveTheme();
    return getActiveThemeSelector(state);
}
export default getActiveTheme;