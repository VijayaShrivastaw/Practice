import React, { useEffect, useState } from "react";
import { View, Text ,FlatList} from "react-native";


const LocalData = () => {

    const [data, setData] = useState()
    useEffect(() => {
        getApiData()
    },[])

    const getApiData = async () => {
        url = "http://192.168.0.107:3000/User";
        let result = await fetch(url)
        result = await result.json()
        setData(result)

    }
    return (
        <View>
           <FlatList
           data={data}
           renderItem={((item)=>
        <View style={{backgroundColor:'#fff',elevation:2,margin:20,padding:20,borderRadius:10}}>
            <Text>{item.item.name}</Text>
            <Text>{item.item.age}</Text>
            </View>
        )}
            keyExtractor={item => item.index}
           />
        </View>
    )
}

export default LocalData