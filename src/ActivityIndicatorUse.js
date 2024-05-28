import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Button } from "react-native";

const ActivityIndicatorUse = () => {
    const [loading, setLoading] = useState(false)


    return (
        <View style={styles.container}>
            <ActivityIndicator size={100} color={'red'} animating={loading} />
            <Button title="onpress" onPress={()=>setLoading(!loading)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ActivityIndicatorUse