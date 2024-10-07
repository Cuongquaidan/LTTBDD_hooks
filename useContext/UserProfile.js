import React, { createContext, useContext } from "react";
import { View, Text, Button } from "react-native";
import { UserContext } from "./App";

export default UserProfile = () => {
    const user = useContext(UserContext);
    return (
        <View>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
        </View>
    );
};
