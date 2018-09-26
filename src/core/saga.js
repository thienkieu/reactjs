import watchGetUserInfoEvent from '../user/sagas/loadUserInfo';

export function injectAsyncReducer(name, asyncReducer) {
    store.injectedReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.injectedReducers));
}

export { watchGetUserInfoEvent };