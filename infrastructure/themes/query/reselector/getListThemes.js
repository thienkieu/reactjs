import { createSelector } from 'reselect';
import getTheme from './getTheme';

const makeSelectorGetListThemes = () => {
    return createSelector(getTheme, theme => {
        return theme.supportThemes;
    });
}

const getListThemes = (state) => {
    const getListThemesSelector =  makeSelectorGetListThemes();
    return getListThemesSelector(state);
}

export default getListThemes;