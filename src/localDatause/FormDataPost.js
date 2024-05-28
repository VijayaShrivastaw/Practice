import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import style from "../style";

const FormDataPost = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    const [nameError, setNameError] = useState(false)
    const [ageError, setAgeError] = useState(false)
    const [emailError, setEmailError] = useState(false)



    const apiDataAdd = async () => {
        if (!name) {
            setNameError(true)
        }else{
            setNameError(false)
        }
        if (!age) {
            setAgeError(true)
        }else{
            setAgeError(false)
        }
        if (!email) {
            setEmailError(true)
        }else{
            setEmailError(false)
        }
        if (!name || !age || !email) {
            return false
        }
        console.log('55')
        const url = "http://192.168.0.107:3000/details"
        let result = await fetch(url, {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, age, email
            })
        },
            setAge(''),
            setEmail(''),
            setName('')
        )
        result = await result.JSON()
        Alert.alert('555')

    }


    return (

        <View style={{ margin: 20 }}>
            <View style={styles.textinputCon}>
                <TextInput
                    placeholder="Wrie Here"
                    onChangeText={(text) => setName(text)}
                    style={styles.textInput}
                    value={name}
                />
                {nameError ? <Text style={styles.textError}>Please Enter your name</Text> : null}
            </View>

            <View style={styles.textinputCon}>
                <TextInput
                    placeholder="Wrie Here"
                    value={age}
                    keyboardType="numeric"
                    onChangeText={(text) => setAge(text)}
                    style={styles.textInput}
                />
                {ageError ? <Text style={styles.textError}>Please Enter your name</Text> : null}

            </View>
            <View style={styles.textinputCon}>
                <TextInput
                    placeholder="Wrie Here"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}
                />
                {emailError ? <Text style={styles.textError}>Please Enter your name</Text> : null}

            </View>
            <Button title="Add Data" onPress={() => apiDataAdd(name, age, email)} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        marginVertical: 5

    },
    textError: {
        color: 'red'
    },
    textinputCon: {
        marginVertical: 10
    }
})
export default FormDataPost;