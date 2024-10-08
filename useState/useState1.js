import React, { useState } from "react";
import { View, Text, Button } from "react-native";
const CounterApp = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{ padding: 20 }}>
            <Text>Count: {count}</Text>
            <Button
                title="Increase"
                onPress={() => {
                    setCount(count + 1);
                    console.log(count);
                    // code sẽ log ra count trước rồi mới set giá trị mới cho count
                }}
            />{" "}
            <Button title="Reset" onPress={() => setCount(0)} />
        </View>
    );
};
export default CounterApp;
