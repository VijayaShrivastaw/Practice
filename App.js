import React, { useEffect } from 'react';
import { Linking, Platform, Alert, Text, TouchableOpacity, View, FlatList } from 'react-native'; // Import Alert from 'react-native'

import VersionCheck from 'react-native-version-check';
import ModalUseh from './src/ModalUseh';
import StatusBarUSe from './src/StatusBarUse';
import StackContainer from './navigation/StackContainer';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import TopTabNavigator from './navigation/TopTabNavigator';
import ActivityIndicatorUse from './src/ActivityIndicatorUse';
import RadioButton from './src/RadioButton';
import UseEffectint from './src/UseEffectint';
import ApiDataUse from './src/ApiDataUse';
import LocalData from './src/localDatause/LocalData';
import PostApiData from './src/localDatause/PostApiData';
import FormDataPost from './src/localDatause/FormDataPost';
import FlatlistApiData from './src/localDatause/FlatlistApiData';
import AsyncPromise from './src/AsyncPromise';
// import Cat from './src/Cat';
// import FlatListBasics from './src/Cat';
// import TextVue from './src/TextVue';
// import FlatlistView from './src/FlatListView';
// import SectionListBasics from './src/SectionListBasics';
// import UseEffectint from './src/UseEffectint';
// import RadioButton from './src/RadioButton';
// import ActivityIndicatorUse from './src/ActivityIndicatorUse';

const App = () => {
  return (
    <>
      {/* <Cat name="Munkustrap" />
  <Cat name="Spot" />
  <Cat name = "pussy"/> */}
      {/* <FlatListBasics/> */}
      {/* <TextVue/> */}
      {/* <FlatlistView /> */}
      {/* <SectionListBasics/> */}

      {/* <UseEffectint /> */}
      {/* <RadioButton/> */}
      <ActivityIndicatorUse/>
      {/* <ModalUseh/> */}
      {/* <StatusBarUSe /> */}
      {/* <StackContainer/> */}
      {/* <BottomTabNavigator/> */}
      {/* <TopTabNavigator/> */}
      {/* <ApiDataUse/> */}
      {/* <LocalData/> */}
      {/* <PostApiData/> */}
      {/* <FormDataPost/> */}
      {/* <FlatlistApiData/> */}
      {/* <AsyncPromise/> */}

    </>

  )
};

export default App;

