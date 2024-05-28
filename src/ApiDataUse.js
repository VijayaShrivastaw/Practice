import React, { useEffect, useState } from "react";
import { View, Text, FlatList,ScrollView } from 'react-native'


const ApiDataUse = () => {
    const [data, setData] = useState([])
    const getApiData = async () => {
        const url = "https://jsonplaceholder.typicode.com/comments?postId=1"
        let result = await fetch(url);
        result = await result.json()
        setData(result)


    }
    useEffect(() => {
        getApiData()
    }, [])


    return (
        <View>
            <ScrollView>
            {
                data.map((item, id) =>

                    <View key={id} style={{backgroundColor:'#fff',elevation:2,margin:20,padding:10,borderRadius:10}}>
                        <Text>{item.body}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.id}</Text>
                        </View>
                )}
            </ScrollView>
            {/* <FlatList
                data={data}
                renderItem={((item) =>
                    <View style={{ backgroundColor: "#fff", margin: 20, elevation: 2, borderRadius: 10, padding: 10 }}>
                        <Text >{item.item.body}</Text>
                        <Text >{item.item.email}</Text>
                        <Text >{item.item.name}</Text>
                        <Text >{item.item.postId}</Text>

                    </View>
                )}
                keyExtractor={item => item.index}
            /> */}
        </View>
    )
}

export default ApiDataUse