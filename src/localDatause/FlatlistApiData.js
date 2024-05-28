import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import RenderFlatlist from '../RenderFlatlist'

const FlatlistApiData = () => {
    const [data, setData] = useState([])

    const getApiData = async () => {
        let url = "http://192.168.1.6:3000/User"
        let result = await fetch(url)
        result = await result.json()
        setData(result)
    }

    useEffect(() => {
        getApiData()
    }, [])


    return (
        <View style={{ marginVertical: 30 }} >
            <View style={styles.container}>
                <Text style={{ flex: 1 }}>Name</Text>
                <Text style={{ flex: 1 }}>Age</Text>
                <View style={{ flex: 2,alignItems:'center' }}><Text>Oparations</Text></View>
            </View>


            <FlatList
                data={data}
                renderItem={(item) =>
                    <RenderFlatlist item={item} getApiData={getApiData} />}
            />
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        // marginVertical:10,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 2,
        padding: 20
    },
  


})
export default FlatlistApiData;