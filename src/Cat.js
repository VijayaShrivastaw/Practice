import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const Cat = (props) => {
    let interval = setInterval(() => {
        // console.warn('55555')
        // setDisplay(true)
        // console.log('unmount55')

    }, 1000);

    useEffect(() => {
        return () => clearInterval(interval)

    },[])
    const [isHungry, setIsHungry] = useState(true);
    const [text, setText] = useState('')

    return (
        <View>
            <Text>I am {props.name} and i am {isHungry ? "Hungry" : "full"}</Text>
            <Button
                onPress={() => setIsHungry(false)}
                disabled={!isHungry}
                title={isHungry ? 'give me some food please' : 'thank you'} />
            <TextInput
                placeholder='Please enter your name'
                value={text}
                onChangeText={(val) => setText(val)}
                style={{ borderWidth: 1, margin: 20 }}

            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text
                    .split(' ')
                    .map(word => word && '🍕')
                    .join(' ')}
            </Text>
        </View>
    );
};
export default Cat



