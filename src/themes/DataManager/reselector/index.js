import { createSelector } from 'reselect';

const selectTheme = (state) => {
    console.log(state);
    return state.themeModule;
}

const makeSelectTheme = () => {
    return createSelector(selectTheme, theme => {
        return theme;
    });
}

const getSelectedTheme = (state) => {
    const getSelectedThemeSelectore =  makeSelectTheme();
    return getSelectedThemeSelectore(state);
}
export { getSelectedTheme };