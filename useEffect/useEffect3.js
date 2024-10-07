import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const MyComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count has changed:", count);

        return () => {
            console.log("Cleaning up...");
        };
    }, [count]);

    return (
        <View style={{ padding: 20 }}>
            <Text onPress={() => setCount(count + 1)} style={{ fontSize: 24 }}>
                Increment Count: {count}
            </Text>
        </View>
    );
};

export default MyComponent;
