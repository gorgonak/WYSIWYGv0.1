import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

function Home(props) {
    return (
      <View style={styles.container}>
        
  
        <View style={{ flex: 1 }} />
  
        <TouchableOpacity
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => props.navigation.navigate("Heretic Astartes")}>
              <Image source={require('../assets/chaosbanner.png')}
                style={{ height: '100%', width: Dimensions.get('window').width, resizeMode: 'contain' }}/>
        </TouchableOpacity>
  
        <View style={{ marginVertical: -10, height: 1, width: '100%' }} />
  
          <TouchableOpacity
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
            disabled={true}
            onPress={() => props.navigation.navigate("Heretic Astartes")}>
              <Image source={require('../assets/dgbannertemp.png')}
                style={{ height: '100%', width: Dimensions.get('window').width, resizeMode: 'contain' }}/>
          </TouchableOpacity>
        
          <View style={{ flex: 1 }} />
  
      </View>
    );
  }
  
  export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
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