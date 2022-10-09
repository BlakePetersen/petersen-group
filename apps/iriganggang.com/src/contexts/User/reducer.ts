export type userAction = {
  type: 'login' | 'logout' | 'setIriGangGang' | 'unsetIriGangGang'
  data: any
}

export type userState = {
  id: string
  isIriGangGang: boolean
  loggedIn: boolean
}

export const reducer = (state: userState, action: userAction) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        id: action.data ? (action.data as string) : null,
        loggedIn: true,
      }

    case 'logout':
      return {
        ...state,
        id: null,
        isIriGangGang: false,
        loggedIn: false,
      }

    case 'setIriGangGang':
      return {
        ...state,
        isIriGangGang: true,
      }

    case 'unsetIriGangGang':
      return {
        ...state,
        isIriGangGang: false,
      }

    default:
      return state
  }
}

export const initialState: userState = {
  id: '',
  isIriGangGang: false,
  loggedIn: false,
}
