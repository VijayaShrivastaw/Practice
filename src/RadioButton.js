import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { stickyWorkers } from "../metro.config";

const RadioButton = () => {
    let skills = [
        {
            id: 1,
            name: 'Java'
        },
        {
            id: 2,
            name: 'Javascript'
        },
        {
            id: 3,
            name: 'Node'
        },
        {
            id: 4,
            name: 'Python'
        },
        {
            id: 5,
            name: 'React'
        }

    ]
    const [radio, setRadio] = useState(1)
    return (
        // <View style={styles.Container}>
        //     <TouchableOpacity onPress={()=> setRadio(1)}>
        //         <View style={styles.radioContainer}>
        //             <View style={styles.circle}>
        //                {
        //                 radio === 1 ?  <View style={styles.bubble}></View>:null
        //                }
        //             </View>
        //             <Text style={styles.radioText}>
        //                 Radio 1
        //             </Text>
        //         </View>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={()=> setRadio(2)}>
        //         <View style={styles.radioContainer}>
        //             <View style={styles.circle}>
        //             {
        //                 radio === 2 ?  <View style={styles.bubble}></View>:null
        //                }
        //             </View>
        //             <Text style={styles.radioText}>
        //                 Radio 1
        //             </Text>
        //         </View>
        //     </TouchableOpacity>
        // </View>

        <View style={styles.Container}>
            {
                skills.map((item, idx) =>
                    <TouchableOpacity onPress={() => setRadio(item.id)}
                    key={idx}>
                        <View style={styles.radioContainer}>
                            <View style={styles.circle}>
                                {
                                    radio === item.id ? <View style={styles.bubble}></View> : null
                                }
                            </View>
                            <Text style={styles.radioText}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }

        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioText: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold'
    },
    circle: {
        height: 40,
        width: 40,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 20,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bubble: {
        height: 30,
        width: 30,
        backgroundColor: 'blue',
        borderRadius: 15

    }
})
export default RadioButton;