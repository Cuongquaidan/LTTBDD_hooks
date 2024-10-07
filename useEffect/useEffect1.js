import React, { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    const countEvery3 = Math.floor(count / 3);

    useEffect(() => {
        console.log(`Count updated: ${count}`);
    });

    return (
        <View style={{ padding: 20 }}>
            <Text>Count Every 3: {countEvery3}</Text>
            <Button
                title={`Increment ${count}`}
                onPress={() => {
                    setCount(count + 1);
                }}
            />
        </View>
    );
}
