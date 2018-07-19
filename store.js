import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  navMenu: false,
  searchMenu: false,
  headerFullHeight: true,
  isPost: false,
  pageComments: false,
  pageDate: false,
  pageTitle: false
};

export const actionTypes = {
  CLEAR_HEADER_FULL_HEIGHT: 'CLEAR_HEADER_FULL_HEIGHT',
  CLEAR_PAGE_AS_POST: 'CLEAR_PAGE_AS_POST',
  CLEAR_PAGE_COMMENTS: 'CLEAR_PAGE_COMMENTS',
  CLEAR_PAGE_DATE: 'CLEAR_PAGE_DATE',
  CLEAR_PAGE_TITLE: 'CLEAR_PAGE_TITLE',
  SET_HEADER_FULL_HEIGHT: 'SET_HEADER_FULL_HEIGHT',
  SET_PAGE_AS_POST: 'SET_PAGE_AS_POST',
  SET_PAGE_COMMENTS: 'SET_PAGE_COMMENTS',
  SET_PAGE_DATE: 'SET_PAGE_DATE',
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
  TOGGLE_HEADER_FULL_HEIGHT: 'TOGGLE_HEADER_FULL_HEIGHT',
  TOGGLE_NAV_MENU: 'TOGGLE_NAV_MENU',
  TOGGLE_SEARCH_MENU: 'TOGGLE_SEARCH_MENU',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {

    case actionTypes.CLEAR_HEADER_FULL_HEIGHT:
      return Object.assign({}, state, {
        headerFullHeight: false
      });

    case actionTypes.CLEAR_PAGE_AS_POST:
      return Object.assign({}, state, {
        isPost: false
      });

    case actionTypes.CLEAR_PAGE_COMMENTS:
      return Object.assign({}, state, {
        pageComments: false
      });

    case actionTypes.CLEAR_PAGE_DATE:
      return Object.assign({}, state, {
        pageDate: false
      });

    case actionTypes.CLEAR_PAGE_TITLE:
      return Object.assign({}, state, {
        pageTitle: false
      });

    case actionTypes.SET_HEADER_FULL_HEIGHT:
      return Object.assign({}, state, {
        headerFullHeight : true
      });

    case actionTypes.SET_PAGE_AS_POST:
      return Object.assign({}, state, {
        isPost: true
      });

    case actionTypes.SET_PAGE_COMMENTS:
      return Object.assign({}, state, {
        pageComments: action.pageComments
      });

    case actionTypes.SET_PAGE_DATE:
      return Object.assign({}, state, {
        pageDate: action.pageDate
      });

    case actionTypes.SET_PAGE_TITLE:
      return Object.assign({}, state, {
        pageTitle: action.title
      });

    case actionTypes.TOGGLE_HEADER_FULL_HEIGHT:
      return Object.assign({}, state, {
        headerFullHeight: !state.headerFullHeight
      });

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
export const clearHeaderFullHeight = () => dispatch => {
  return dispatch({ type: actionTypes.CLEAR_HEADER_FULL_HEIGHT })
};

export const clearPageAsPost = () => dispatch => {
  return dispatch({ type: actionTypes.CLEAR_PAGE_AS_POST })
};

export const clearPageComments = () => dispatch => {
  return dispatch({ type: actionTypes.CLEAR_PAGE_COMMENTS })
};

export const clearPageDate = () => dispatch => {
  return dispatch({ type: actionTypes.CLEAR_PAGE_DATE })
};

export const clearPageTitle = () => dispatch => {
  return dispatch({ type: actionTypes.CLEAR_PAGE_TITLE })
};

export const setHeaderFullHeight = () => dispatch => {
  return dispatch({ type: actionTypes.SET_HEADER_FULL_HEIGHT })
};

export const setPageAsPost = () => dispatch => {
  return dispatch({ type: actionTypes.SET_PAGE_AS_POST })
};

export const setPageComments = (pageComments) => dispatch => {
  return dispatch({
    pageComments: pageComments,
    type: actionTypes.SET_PAGE_COMMENTS
  })
};

export const setPageDate = (pageDate) => dispatch => {
  return dispatch({
    pageDate: pageDate,
    type: actionTypes.SET_PAGE_DATE
  })
};

export const setPageTitle = (title) => dispatch => {
  return dispatch({
    title: title,
    type: actionTypes.SET_PAGE_TITLE
  })
};

export const toggleHeaderFullHeight = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_HEADER_FULL_HEIGHT })
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
