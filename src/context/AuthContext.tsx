/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useState } from 'react'
import { User } from '../interface/User'


export const Authcontext = createContext<any>(undefined)
export function AuthProvider({ children }: { children: ReactNode }) {
    const [userName, setUserName] = useState<User>()
    const singUp = (user: User) => {
        setUserName(user)
    }
    const contextValue = { userName, setUserName, singUp }
    return (
        <Authcontext.Provider value={contextValue}>{children}</Authcontext.Provider>
    )
}
