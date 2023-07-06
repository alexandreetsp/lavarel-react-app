import { useContext } from "react";
import { createContext, useCallback, useState} from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUSer:() => {},
    setToken: () => {},

})

export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({
        name: 'John',
    });
    const [token, _setToken] = useState(123);

    const setToken = (token) => {
        _setToken(token);

        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);

        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    return (
        <StateContext.Provider value ={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)