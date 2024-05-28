import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Button, Pressable } from "react-native";
import { transformer } from "../metro.config";


const ModalUseh = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Pressable style={{ backgroundColor: "red", margin: 20, padding: 20, justifyContent: 'center', alignItems: "center" }}
                onPress={() => console.warn("helo")}
                onLongPress={() => console.warn("longpress")}
                onPressIn={() => console.warn("press in")}
                onPressOut={() => console.warn("press out")}


                >
                <Text style={{ color: '#000', fontSize: 25 }}>
                    Press
                </Text>
            </Pressable>
            <View style={styles.container}>

                <Modal transparent={true}
                    visible={modal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 20, }}>
                                Hello here is use for modal
                            </Text>
                            <View style={{ marginTop: 10 }}>
                                <Button title="close" onPress={() => setModal(false

                                )} />
                            </View>
                        </View>
                    </View>
                </Modal>
                <Button title="on Press" onPress={() => setModal(true)} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // marginTop:50

    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 10

    }
})

export default ModalUseh;