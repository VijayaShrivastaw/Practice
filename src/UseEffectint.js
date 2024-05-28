import React, { useEffect, useState } from "react";
import { View, Text, ToastAndroid, Button } from "react-native";
import Cat from "./Cat";

const UseEffectint = () => {
    const [count, setCount] = useState(0)
    const [decr, setDecr] = useState(100)
    const [display, setDisplay] = useState(true)

    // useEffect(() => {
    //     console.log("Hello World")
    // }, [count, decr])
    function counting() {
        setCount(count + 1)
    }
    function decrement() {
        setDecr(decr - 1)
    }
// setInterval(()=>{

// })

// useEffect(() => {
//     //Implementing the setInterval method
//     const interval = setInterval(() => {
//         setCount(count + 1);
//     }, 1000);

//     //Clearing the interval
//     return () => clearInterval(interval);
// }, [count]);

    return (
        <View style={{ margin: 20 }}>
            <Text>{count}</Text>
            <Text>{decr}</Text>

            <Button title="on Press"
                onPress={() => counting()} />
            <View style={{ marginTop: 10 }}>
                <Button title="on Press"
                    onPress={() => decrement()} />

            </View>

            <View style={{ marginTop: 10 }}>
                <Button title="on Press"
                    onPress={() => setDisplay(!display)} />

            </View>
            {
                display ? <View>
                   <Cat/>
                </View> : null
            }

        </View>
    )
}
export default UseEffectint;