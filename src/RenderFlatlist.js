import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from "react-native";
import style from "./style";
import { ContinousBaseGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";


const RenderFlatlist = (props) => {
   
    const [index, setIndex] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)


    const getDeleteData = async (id) => {
        let url = "http://192.168.1.6:3000/User"
        let result = await fetch(`${url}/${id}`, {
            method: 'delete'
        });
        result = await result.json()
        setIndex(result)
        props.getApiData()

    }
    const updateData = (id) => {
        setShowModal(true)
        setAge(props.item.item.age.toString())
        setName(props.item.item.name)

    }
    const apiDataSave = async (id) => {
        console.log(id)
        const url = "http://192.168.1.6:3000/User"
        let result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },

            body: await JSON.stringify({ name, age })

        })

        result = result.json()
        props.getApiData()
        setAge('')
        setName('')
        // setShowModal(false)

    }
    const data = props.item.item
    const id = props.item.item.id



    return (
        <View style={styles.container}>
            <Text style={{ flex: 1 }}>{props.item.item.name}</Text>
            <Text style={{ flex: 1 }}>{props.item.item.age}</Text>
            <View style={{ flex: 1 }}><Button onPress={() => getDeleteData(id)} title="Delate" /></View>
            <View style={{ flex: 1,marginLeft:2 }}><Button title="Update" onPress={() => updateData(id)} /></View>

            <Modal transparent={true}
                visible={showModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modal}>
                        <TextInput placeholder='Name'
                         style={styles.textInput}
                            value={name}
                            onChangeText={(text) => setName(text)} />
                        <TextInput placeholder='Age' style={[styles.textInput, { marginTop: 15 }]}
                            keyboardType="numeric"
                            value={age}
                            onChangeText={(val) => setAge(val)} 
                            />
                        <TouchableOpacity style={styles.button} onPress={() => apiDataSave(id)}>
                            <Text style={styles.textButton}>
                                Save
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setShowModal(false)}>
                            <Text style={styles.textButton}>
                                close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // justifyContent:'space-between',
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 2,
        padding: 20
    },
    modal:
    {
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 10,
        elevation: 2
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 100,

    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,

    }
})
export default RenderFlatlist;