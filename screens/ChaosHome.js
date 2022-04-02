import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Chaos(props) {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
  
          <TouchableOpacity
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => props.navigation.navigate("Heretic Astartes Rules")}>
              <Image source={require('../assets/chaosbannerrules.png')}
                style={{ height: '100%', width: Dimensions.get('window').width, resizeMode: 'contain'}}/>
          </TouchableOpacity>
  
          <View style={{ marginVertical: -10, height: 1, width: '100%' }} />
  
          <TouchableOpacity
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => props.navigation.navigate("Heretic Astartes Datasheets")}>
              <Image source={require('../assets/chaosbannerdata.png')}
                style={{ height: '100%', width: Dimensions.get('window').width, resizeMode: 'contain'}}/>
          </TouchableOpacity>
  
        <View style={{ flex: 1 }} />
      </View>
    );
  }

  export default Chaos;

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