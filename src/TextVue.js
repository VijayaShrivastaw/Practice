import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import style from "./style";
import { stickyWorkers } from "../metro.config";

const TextVue = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [email, setEmail] = useState('')
    const [display, setDisplay] = useState(false)
    const clearData = () => {
        setEmail('')
        setName('')
        setPassword('')
    }

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                style={styles.text}
                onChangeText={(val) => setName(val)}
                value={name}
                placeholder="Write here" />
            <TextInput
                style={styles.text}
                onChangeText={(val) => setPassword(val)}
                value={password}
                secureTextEntry={true}
                placeholder="Write here" />
            <TextInput
                style={styles.text}
                onChangeText={(val) => setEmail(val)}
                value={email}
                placeholder="Write here" />
            <Button title="Add value" onPress={() => setDisplay(true)} />
            <View style={{ marginTop: 10 }}>
                <Button title="Clear value" onPress={() => clearData()} />

            </View>
            <View>
                {display ? <>
                    <Text>{name}</Text>
                    <Text>{password}</Text>
                    <Text>{email}</Text>
                </> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18, borderColor: 'red',
        borderWidth: 1,
        marginBottom: 10
    }
})
export default TextVue