import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Unit from './src/screens/UnitData.js';
import Home from './src/screens/HomeScreen.js';
import CSMData from './src/screens/ChaosData.js';
import CSMRules from './src/screens/ChaosRules.js';
import Chaos from './src/screens/ChaosHome.js';

const Stack = createNativeStackNavigator();

const CSMLord = Unit.Unit1;
const CSMAbaddon = Unit.Unit2;
const CSMTerm = Unit.Unit3;
const CSMarine = Unit.Unit4;
const CSMtalon = Unit.Unit5;
const CSMforgefiend = Unit.Unit6;


export default function App() {
  return (
    
    <View style={{ flex: 1, backgroundColor: "#3A3B3C" }}> 

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#3A3B3C'}, headerTintColor: 'white', headerTitleAlign: 'center', orientation: 'portrait' }}>
          <Stack.Screen name="Home Screen" component={Home} options={{title: 'Warhammer 40,000'}} /> 
          <Stack.Screen name="Heretic Astartes Datasheets" component={CSMData} options={{title: 'Heretic Astartes'}}/>
          <Stack.Screen name="Heretic Astartes Rules" component={CSMRules} options={{title: 'Army Rules'}}/>
          <Stack.Screen name="Heretic Astartes" component={Chaos} />
          <Stack.Screen name="Chaos Lord" component={CSMLord} />
          <Stack.Screen name="Abaddon" component={CSMAbaddon} options={{title: 'Abaddon the Despoiler'}}/>
          <Stack.Screen name="Terminator" component={CSMTerm} options={{title: 'Chaos Terminator'}}/>
          <Stack.Screen name="CSM" component={CSMarine} options={{title: 'Chaos Space Marine'}}/>
          <Stack.Screen name="Warp Talon" component={CSMtalon}/>
          <Stack.Screen name="Forgefiend" component={CSMforgefiend}/>
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  collapseHeader: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  collapseBody: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: '5%',
    marginBottom: 10
  }
});

