import React from "react";
import { View,Text } from "react-native";


const FlatListRender = (props)=>{
    return(
        <View style={{}}>
            <Text>{props.item.name}</Text>
        </View>
    )
}

export default FlatListRender;