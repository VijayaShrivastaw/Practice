import React from 'react';
import { Platform, SectionList, StyleSheet, Text, View } from 'react-native';
import Exstyles from './style'
const user = [
    { title: 'Vijaya', data: ['Devin', 'Dan', 'Dominic'] },
    {
        title: 'Jaya', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie',],
    },
]


const SectionListBasics = () => {
    return (
        <View style={styles.container}>
            {/* <SectionList
                sections={user}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            /> */}
            <SectionList
                sections={user}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => item}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        // backgroundColor:'red'
    },
    sectionHeader: {

        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: Platform.os === 'ios' ? 14 : 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
export default SectionListBasics;