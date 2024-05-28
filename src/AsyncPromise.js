import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const AsyncPromise = () => {
    const [data, setData] = useState('')
    const datas = [
        { name: 'Ajay', Profression: 'Software Engineering' },
        { name: 'Anuj', Profression: 'Software Engineering' }
    ]
    const getData = () => {
        setTimeout(() => {
            setData(datas)
        }, 1000)
    }
    // const createData = (newData, callback) => {

    //     setTimeout(() => {
    //         datas.push(newData)
    //         callback()
    //     }, 2000)

    // }

    const createData = (newData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                datas.push(newData)
                let error = false
                if (!error) {
                    resolve()
                }
                else {
                    reject("kuch sahi nhi h")
                }
                
            }, 2000)
        })
    }

    const start = async () => {
        await createData({ name: 'Vijaya', Profression: "Software Engineering" })
        getData()
    }

  
    useEffect(() => {
        // createData({ name: 'Vijaya', Profression: "Software Engineering" })
        // .then(getData)
        // .catch(err => console.log(err))
        start()

    }, [])
    return (
        <View>
            {

                data.length == 0 ? null : data.map((item, index) => {
                    return <Text key={index}>{item.name}</Text>
                })
            }
        </View>
    )
}

export default AsyncPromise