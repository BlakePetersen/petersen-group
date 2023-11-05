import { createContext, useMemo, useReducer } from 'react'
import { reducer, initialState } from './reducer'
import { UserProviderTypes } from './user-context.types'

export const UserContext = createContext<any>({
  state: initialState,
  dispatch: () => null
})

export const UserProvider: UserProviderTypes = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const userProviderValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  )

  return (
    <UserContext.Provider value={userProviderValue}>
      {children}
    </UserContext.Provider>
  )
}
