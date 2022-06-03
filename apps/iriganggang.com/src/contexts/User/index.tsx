import React from 'react'
import { reducer, initialState } from './reducer'

export const UserContext = React.createContext<any>({
  state: initialState,
  dispatch: () => null,
})

export const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}
