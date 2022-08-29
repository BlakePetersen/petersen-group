import React from 'react'
import { reducer, initialState } from './reducer'
import { UserProviderTypes } from './user-context.types'

export const UserContext = React.createContext<any>({
  state: initialState,
  dispatch: () => null,
})

export const UserProvider: UserProviderTypes = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}
