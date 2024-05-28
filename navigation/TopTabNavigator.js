import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SectionListBasic from '../src/ActivityIndicatorUse'
import useEffectint from '../src/UseEffectint'
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={SectionListBasic} />
                <Tab.Screen name="useEffectint" component={useEffectint} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default TopTabNavigator