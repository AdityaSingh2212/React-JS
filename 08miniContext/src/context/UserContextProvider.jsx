//  Part 2
//UserContextProvider - It provides data
import React from "react";
import UserContext from "./UserContext";

//children is nothing but is used as div or etc
const UserContextProvider = ({children}) => { 
    const [user, setUser] = React.useState(null) //If we want to fetch data we can use (user) or if we have to add value or data in (user) state we will use (setUser)
//react.useState is written because we don't want to write import use state. Here user is variable and setUser is a method
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider