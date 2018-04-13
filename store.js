import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  navMenu: false,
  searchMenu: false
};

export const actionTypes = {
  TOGGLE_NAV_MENU: 'TOGGLE_NAV_MENU',
  TOGGLE_SEARCH_MENU: 'TOGGLE_SEARCH_MENU',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NAV_MENU:
      return Object.assign({}, state, {
        navMenu: !state.navMenu
      });
    case actionTypes.TOGGLE_SEARCH_MENU:
      return Object.assign({}, state, {
        searchMenu: !state.searchMenu
      });
    default:
      return state
  }
};

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
};

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 1000)
};

export const toggleNavMenu = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_NAV_MENU })
};

export const toggleSearchMenu = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_SEARCH_MENU })
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};
