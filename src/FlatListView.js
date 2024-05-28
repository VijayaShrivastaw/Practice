import React from "react";
import { View, Text, FlatList } from 'react-native'
import FlatListRender from "./FlatListRender";
import Data from "./FlatlistData";
const userData = [
    {
        id: 1,
        name: 'Vijay'
    },
    {
        id: 2,
        name: 'Jaa'
    },
    {
        id: 3,
        name: 'Prati'
    },
    {
        id: 4,
        name: 'Ujjwal'
    },

    {
        id: 1,
        name: 'Vijay'
    },
    {
        id: 2,
        name: 'Jaa'
    },
    {
        id: 3,
        name: 'Prati'
    }, {
        id: 1,
        name: 'Vijay'
    },
    {
        id: 2,
        name: 'Jaa'
    },
    {
        id: 3,
        name: 'Prati'
    }]
const FlatlistView = () => {
    return (
        <View>
            <Text>
                Hello
            </Text>
            <FlatList
                data={Data}
                renderItem={({ item }) => <FlatListRender item={item} />}
                keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique 'id'
            />
            <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
                {userData.map((item) =>
                    <Text style={{ fontSize: 20, backgroundColor: 'blue', height: 100, width: 100 ,margin:10,textAlign:'center',textAlignVertical:'center',color:'#fff'}}>{item.name}</Text>
                )
                }
            </View>
        </View>
    )
}

export default FlatlistView;