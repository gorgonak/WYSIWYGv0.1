import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function CSMData(props) {
    return (
  
        <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ width: Dimensions.get('window').width, alignItems: 'center', paddingBottom: 275 }}>
  
                    <Image source={require('../assets/hq.png')}
                      style={{  width: '100%', height: '6%', resizeMode: 'cover', 
                      justifyContent: 'center', alignSelf: 'center', backgroundColor: 'lightgrey'}}/>
  
            <View style={{ width: Dimensions.get('window').width, height: 200 }}>
  
              <ScrollView horizontal={true} contentOffset={{x:325, y:0}}>
  
              <TouchableOpacity
                  onPress={() => props.navigation.navigate("Chaos Lord")}>
                    <Image source={require('../assets/csmdiscordant.png')}
                      style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                </TouchableOpacity>
                
                <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
              
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Chaos Lord")}>
                    <Image source={require('../assets/csmlord.png')}
                      style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                </TouchableOpacity>
                
                <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Abaddon")}>
                    <Image source={require('../assets/csmabaddon.png')}
                      style={{  width: 200, height: '97%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                </TouchableOpacity>
  
                <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Chaos Lord")}>
                    <Image source={require('../assets/csmsorceror.png')}
                      style={{  width: 200, height: '96%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                </TouchableOpacity>
  
                <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Chaos Lord")}>
                    <Image source={require('../assets/csmapostle.png')}
                      style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                </TouchableOpacity>
  
                </ScrollView>
  
              </View>
  
              {/*  ELITES SECTION  */}
  
              <Image source={require('../assets/elites.png')}
                      style={{  width: '100%', height: '6%', resizeMode: 'cover', 
                      justifyContent: 'center', alignSelf: 'center', backgroundColor: 'lightgrey'}}/>
  
              <View style={{ width: Dimensions.get('window').width, height: 200 }}>
  
                <ScrollView horizontal={true} contentOffset={{x:325, y:0}}>
  
                  <TouchableOpacity
                      onPress={() => props.navigation.navigate("Chaos Lord")}>
                        <Image source={require('../assets/csmgreatpossess.png')}
                          style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                    </TouchableOpacity>
  
                    <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                    
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Chaos Lord")}>
                        <Image source={require('../assets/csmpossess.png')}
                          style={{  width: 200, height: '108%', resizeMode: 'cover', justifyContent: 'center', alignSelf: 'center',}}/>
                    </TouchableOpacity>
  
                    <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                    
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Terminator")}>
                        <Image source={require('../assets/csmterminator.png')}
                          style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                    </TouchableOpacity>
  
                    <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                    
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Chaos Lord")}>
                        <Image source={require('../assets/csmhelbrute.png')}
                          style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                    </TouchableOpacity>
  
                  </ScrollView>
  
              </View>
  
                {/*  TROOPS SECTION  */}
  
                <Image source={require('../assets/troops.png')}
                      style={{  width: '100%', height: '6%', resizeMode: 'cover', 
                      justifyContent: 'center', alignSelf: 'center', backgroundColor: 'lightgrey'}}/>
  
              <View style={{ width: Dimensions.get('window').width, height: 200 }}>
  
                <ScrollView horizontal={true} contentOffset={{x:25, y:0}}>
  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmcultist.png')}
                        style={{  width: 200, height: '92%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("CSM")}>
                      <Image source={require('../assets/csmmarine.png')}
                        style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                </ScrollView>
  
              </View>
  
              {/*  FAST ATTACK SECTION  */}
  
              <Image source={require('../assets/fastattack.png')}
                      style={{  width: '100%', height: '6%', resizeMode: 'cover', 
                      justifyContent: 'center', alignSelf: 'center', backgroundColor: 'lightgrey'}}/>
  
              <View style={{ width: Dimensions.get('window').width, height: 200 }}>
  
                <ScrollView horizontal={true} contentOffset={{x:125, y:0}}>
  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmbike.png')}
                        style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmraptor.png')}
                        style={{  width: 200, height: '95%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Warp Talon")}>
                      <Image source={require('../assets/csmwarptalon.png')}
                        style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                </ScrollView>
  
              </View>
  
              {/*  HEAVY SUPPORT SECTION  */}
  
              <Image source={require('../assets/heavysupport.png')}
                      style={{  width: '100%', height: '6%', resizeMode: 'cover', 
                      justifyContent: 'center', alignSelf: 'center', backgroundColor: 'lightgrey'}}/>
  
              <View style={{ width: Dimensions.get('window').width, height: 200 }}>
  
                <ScrollView horizontal={true} contentOffset={{x:125, y:0}}>
  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmmaulerfiend.png')}
                        style={{  width: 200, height: '100%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Forgefiend")}>
                      <Image source={require('../assets/csmforgefiend.png')}
                        style={{  width: 200, height: '98%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmpredator.png')}
                        style={{  width: 200, height: '95%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmvindicator.png')}
                        style={{  width: 200, height: '102%', resizeMode: 'cover', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                  <View style={{ height: '100%', width: 1, backgroundColor: '#3A3B3C'}} />
                  
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Chaos Lord")}>
                      <Image source={require('../assets/csmhavoc.png')}
                        style={{  width: 200, height: '98%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center',}}/>
                  </TouchableOpacity>
  
                </ScrollView>
  
              </View>
           
  
              <View style={{ marginBottom: 75, height: 1, width: '100%' }} />
  
        </ScrollView>
  
    );
  }

  export default CSMData;

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