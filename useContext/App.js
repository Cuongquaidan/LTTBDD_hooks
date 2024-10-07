import React, { createContext, useContext } from "react";
import { View, Text, Button } from "react-native";
// Create the context
import UserProfile from "./UserProfile";
export const UserContext = createContext();
export default App = () => {
    const user = { name: "John Doe", age: 30 };
    return (
        <UserContext.Provider value={user}>
            <UserProfile />
        </UserContext.Provider>
    );
};
