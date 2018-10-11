import { createSelector } from 'reselect';
import getTheme from './getTheme';

const makeSelectTheme = () => {
    return createSelector(getTheme, theme => {
        return theme;
    });
}

const getSelectedTheme = (state) => {
    const getSelectedThemeSelectore =  makeSelectTheme();
    return getSelectedThemeSelectore(state);
}
export default getSelectedTheme;