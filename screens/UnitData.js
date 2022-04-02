import React from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'; // npm install accordion-collapse-react-native


function ModPop(words) {

    return (
        Alert.alert(
            '',
            words, // <- this part is optional, you can pass an empty string
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: true},
        )
    );
}

const Unit = {

    Unit1: function chaoslord(){

        return ( 
      
          <View style={{flex: 1, alignItems: 'center'}}>
      
              <Image 
                  source={require('../assets/' + 'csmlord' +'.png')}
                  style={{ height: '54%', width: Dimensions.get('window').width, resizeMode: 'contain',  }}
              />
      
              <DataTable>
      
              <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Movement")}>M</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Weapon Skill")}>WS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Ballistic Skill")}>BS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Strength")}>S</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Toughness")}>T</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Wounds")}>W</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Atacks")}>A</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Leadership")}>Ld</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Armor Save")}>Sv</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Invulnerable Save")}>Inv</DataTable.Title>
                </DataTable.Header>
      
                <DataTable.Row>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>6"</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>2+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>2+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>5</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>9</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4+</DataTable.Cell>
                </DataTable.Row>
      
                </DataTable> 
      
                <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width, marginBottom: 10 }} >

                {/* WEAPONS */}

                <View style={{ marginTop: 10}}/>

                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/weapons.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Name</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Range</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Type</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>AP</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>D</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Ability</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Bolt Pistol")}>Bolt Pistol</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>12"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Pistol 1")}>P1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Boltgun')}>Boltgun</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>24"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Rapid Fire 2")}>RF2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Plasma Pistol")}>Plasma Pistol</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>12"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Pistol 1")}>P1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>7</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Plasma Pistol\n\nSupercharge: \n\n\t\t\t\t Range: 12\"   S: 8   AP: -3   D: 2 \n\n\u2022 If any unmodified hit rolls of 1 are made for attacks with this weapon profile, the bearer is destroyed after shooting with this weapon.")}>*</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Chainaxe')}>Chainaxe</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>+1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Chainsword")}>Chainsword</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("User")}>*</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Each time the bearer fights, it makes 1 additional attack with this weapon.")}>*</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Thunder Hammer")}>Thunder Hammer</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>x2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Each time an attack is made with this weapon, subtract 1 from that attack’s hit roll.")}>*</DataTable.Cell>  
                        </DataTable.Row>

                    </DataTable>

                    </CollapseBody>
                </Collapse>

                {/* ABILITY */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/ability.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Lord of Chaos</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Re-roll hit rolls of 1 for attacks made by models in friendly [ LEGION ] units whilst their unit is within 6" of this model.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Sigil of Corruption</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>This model has a 4+ invulnerable save.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Death to the False Emperor</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Each time a model with this ability makes a melee attack, a hit roll of 6+ scores one additional hit.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Hateful Assault</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Malicious Volleys</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                            <Text style={styles.collapseBody}>Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:
                            {'\n\t\u2022'}The firing model’s target is within half the weapon’s maximum range.
                            {'\n\t\u2022'}The firing model is INFANTRY and every model in its unit remained stationary in your previous Movement phase.
                            {'\n\t\u2022'}The firing model is a TERMINATOR, BIKER or HELBRUTE.
                            {'\n'}For the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ 
                            (e.g. boltgun, bolt pistol, combi-bolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when 
                            firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon.
                            </Text>
                            </CollapseBody>
                        </Collapse>
                    </CollapseBody>
                </Collapse>

                {/* KEYWORDS */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/keywords.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Faction Keywords: {"\n"}</Text>
                        [ CHAOS, [MARK OF CHAOS], HERETIC ASTARTES, [LEGION] ]</Text>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Keywords: {"\n"}</Text>
                        [ CHARACTER, INFANTRY, CHAOS LORD ]</Text>
                    </CollapseBody>
                </Collapse>

                    <View style={{ marginBottom: 25}}/>
            
            </ScrollView>
      
          </View>
      
        );
      },

    Unit2: function abaddon(){

        return ( 
      
          <View style={{ flex: 1, alignItems: 'center' }}>
      
            <Image 
                  source={require('../assets/' + 'csmabaddon' +'.png')}
                  style={{ height: '40%', width: Dimensions.get('window').width, resizeMode: 'contain',  }}
            />

            <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width, marginTop: 20, marginBottom: 10 }} >
      
              <DataTable>
      
              <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Movement")}>M</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Weapon Skill")}>WS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Ballistic Skill")}>BS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Strength")}>S</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Toughness")}>T</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Wounds")}>W</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Atacks")}>A</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Leadership")}>Ld</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Armor Save")}>Sv</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Invulnerable Save")}>Inv</DataTable.Title>
                </DataTable.Header>
      
                <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>6"</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>2+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>2+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>5</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>5</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>8</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>6</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>10</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>2+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4+</DataTable.Cell>
                </DataTable.Row>
      
                </DataTable> 

                
                {/* WEAPONS */}

                <View style={{ marginTop: 10}}/>

                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/weapons.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Name</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Range</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Type</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>AP</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>D</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Ability</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Talon of Horus (Shooting)')}>Talon of Horus</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>24"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Rapid Fire 2")}>RF2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>D3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Talon of Horus (Melee)')}>Talon of Horus</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>x2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>D3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Drach'nyen")}>Drach'nyen</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>+1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Roll a D6 each time the bearer fights. On a 1 they suffer 1 mortal wound and cannot use this weapon further during this phase. On a 2+ they can make that many additional attacks with this weapon.')}>*</DataTable.Cell>  
                        </DataTable.Row>
                            
                        
                        </DataTable> 
                    </CollapseBody>
                </Collapse>

                {/* ABILITY */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/ability.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <Collapse>
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} The Warmaster</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>If your army is Battle-forged and Abaddon the Despoiler is your Warlord, you receive 2 additional command points.</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Dark Destiny</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}> Abaddon the Despoiler has a 4+ invulnerable save. In addition, all damage suffered by Abaddon the Despoiler is halved (rounding up).</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Lord of the Black Legion</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}> You can re-roll hit rolls for friendly BLACK LEGION units while they are within 6" of Abaddon the Despoiler.</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Mark of Chaos Ascendant</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}> Friendly HERETIC ASTARTES units automatically pass Morale tests while they are within 12" of Abaddon the Despoiler.</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Teleport Strike</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>During deployment, you can set up Abaddon in a teleportarium chamber instead of placing him on the battlefield. 
                            At the end of any of your Movement phases he can use a teleport strike to arrive on the battlefield – set him up anywhere on the battlefield 
                            that is more than 9" away from any enemy models.</Text>
                        </CollapseBody>
                    </Collapse>
                    </CollapseBody>
                </Collapse>

                {/* WARLORD TRAIT */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/warlordtrait.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>First Amongst Traitors: {"\n"}</Text>
                        The Death to the False Emperor ability triggers an extra attack on rolls of 5+ instead of 6+ for models in friendly BLACK LEGION 
                        units while they are within 6" of your Warlord.</Text>
                    </CollapseBody>
                </Collapse>

                {/* KEYWORDS */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/keywords.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Faction Keywords: {"\n"}</Text>
                        [ CHAOS, KHORNE, NURGLE, SLAANESH, TZEENTCH, HERETIC ASTARTES, BLACK LEGION ]</Text>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Keywords: {"\n"}</Text>
                        [ CHARACTER, INFANTRY, CHAOS LORD, TERMINATOR, ABADDON THE DESPOILER ]</Text>
                    </CollapseBody>
                    </Collapse>

                    <View style={{ marginBottom: 25}}/>

            </ScrollView>
      
          </View>
      
        );
      },
    
    Unit3: function term() {


        return(
            <View style={{ flex: 1, alignItems: 'center' }}>
      
            <Image 
                  source={require('../assets/' + 'csmterminator' +'.png')}
                  style={{ height: '54%', width: Dimensions.get('window').width, resizeMode: 'contain',  }}
            />
      
            <DataTable>
    
            <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Movement")}>M</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Weapon Skill")}>WS</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Ballistic Skill")}>BS</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Strength")}>S</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Toughness")}>T</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Wounds")}>W</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Atacks")}>A</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Leadership")}>Ld</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Armor Save")}>Sv</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Invulnerable Save")}>Inv</DataTable.Title>
            </DataTable.Header>
    
            <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                <DataTable.Cell style={{  justifyContent: 'center' }}>5"</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>2</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Terminator: 2\n\nTerminator Champion: 3")}>*</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Terminator: 8\n\nTerminator Champion: 9")}>*</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>2+</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>5+</DataTable.Cell>
            </DataTable.Row>
    
            </DataTable> 
            
            <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width, marginBottom: 10 }} >

                {/* WEAPONS */}

                <View style={{ marginTop: 10}}/>

                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/weapons.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Name</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Range</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Type</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>AP</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>D</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Ability</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>Combi-Bolter</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>24"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Rapid Fire 2")}>RF2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>D3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Heavy Flamer')}>Heavy Flamer</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>12"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Heavy D6")}>HD6</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>5</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Each time an attack is made with this weapon, that attack automatically hits the target.')}>*</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Reaper Autocannon")}>Reaper Autocannon</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>36"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Heavy 4")}>H4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>7</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Chainaxe')}>Chainaxe</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>+1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Lightning Claw")}>Lightning Claw</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("User")}>*</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Each time the bearer fights, it makes 1 additional attack with this weapon. Each time an attack is made with this weapon, you can re-roll the wound roll.")}>*</DataTable.Cell>  
                        </DataTable.Row>

                    </DataTable>

                    </CollapseBody>
                </Collapse>

                {/* ABILITY */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/ability.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Terminator Armor</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Models in this unit have a 5+ invulnerable save.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Teleport Strike</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases the unit can use a teleport strike to arrive on the battlefield – set it up anywhere on the battlefield that is more than 9" away from any enemy models.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Death to the False Emperor</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Each time a model with this ability makes a melee attack, a hit roll of 6+ scores one additional hit.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Hateful Assault</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Malicious Volleys</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                            <Text style={styles.collapseBody}>Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:
                            {'\n\t\u2022'}The firing model’s target is within half the weapon’s maximum range.
                            {'\n\t\u2022'}The firing model is INFANTRY and every model in its unit remained stationary in your previous Movement phase.
                            {'\n\t\u2022'}The firing model is a TERMINATOR, BIKER or HELBRUTE.
                            {'\n'}For the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ 
                            (e.g. boltgun, bolt pistol, combi-bolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when 
                            firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon.
                            </Text>
                            </CollapseBody>
                        </Collapse>
                    </CollapseBody>
                </Collapse>

                {/* KEYWORDS */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/keywords.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Faction Keywords: {"\n"}</Text>
                        [ CHAOS, [MARK OF CHAOS], HERETIC ASTARTES, [LEGION] ]</Text>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Keywords: {"\n"}</Text>
                        [ INFANTRY, TERMINATOR ]</Text>
                    </CollapseBody>
                </Collapse>

                    <View style={{ marginBottom: 25}}/>
            
            </ScrollView>

          </View>
        );
    },

    Unit4: function marine() {


        return(
            <View style={{ flex: 1, alignItems: 'center' }}>
      
            <Image 
                  source={require('../assets/' + 'csmmarine' +'.png')}
                  style={{ height: '54%', width: Dimensions.get('window').width, resizeMode: 'contain',  }}
            />
      
            <DataTable>
    
            <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                <DataTable.Title style={{  justifyContent: 'center' }}>M</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>WS</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>BS</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>T</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>W</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>A</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>Ld</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>Sv</DataTable.Title>
                <DataTable.Title style={{  justifyContent: 'center' }}>Inv</DataTable.Title>
            </DataTable.Header>
    
            <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                <DataTable.Cell style={{  justifyContent: 'center' }}>6"</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Chaos Space Marine: 1\n\nAspiring Champion: 2")}>*</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Chaos Space Marine: 7\n\nAspiring Champion: 8")}>*</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>
            </DataTable.Row>
    
            </DataTable> 
            
            <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width, marginBottom: 10 }} >

                {/* WEAPONS */}

                <View style={{ marginTop: 10}}/>

                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/weapons.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Name</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Range</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Type</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>AP</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>D</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Ability</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Bolt Pistol")}>Bolt Pistol</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>12"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Pistol 1")}>P1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Boltgun')}>Boltgun</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>24"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Rapid Fire 2")}>RF2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Plasma Pistol")}>Plasma Pistol</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>12"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Pistol 1")}>P1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>7</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Plasma Pistol\n\nSupercharge: \n\n\t\t\t\t Range: 12\"   S: 8   AP: -3   D: 2 \n\n\u2022 If any unmodified hit rolls of 1 are made for attacks with this weapon profile, the bearer is destroyed after shooting with this weapon.")}>*</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop('Chainaxe')}>Chainaxe</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>+1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Chainsword")}>Chainsword</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("User")}>*</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Each time the bearer fights, it makes 1 additional attack with this weapon.")}>*</DataTable.Cell>  
                        </DataTable.Row>

                    </DataTable>

                    </CollapseBody>
                </Collapse>

                {/* ABILITY */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/ability.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Death to the False Emperor</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Each time a model with this ability makes a melee attack, a hit roll of 6+ scores one additional hit.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Hateful Assault</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Malicious Volleys</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                            <Text style={styles.collapseBody}>Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:
                            {'\n\t\u2022'}The firing model’s target is within half the weapon’s maximum range.
                            {'\n\t\u2022'}The firing model is INFANTRY and every model in its unit remained stationary in your previous Movement phase.
                            {'\n\t\u2022'}The firing model is a TERMINATOR, BIKER or HELBRUTE.
                            {'\n'}For the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ 
                            (e.g. boltgun, bolt pistol, combi-bolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when 
                            firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon.
                            </Text>
                            </CollapseBody>
                        </Collapse>
                    </CollapseBody>
                </Collapse>

                {/* KEYWORDS */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/keywords.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Faction Keywords: {"\n"}</Text>
                        [ CHAOS, [MARK OF CHAOS], HERETIC ASTARTES, [LEGION] ]</Text>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Keywords: {"\n"}</Text>
                        [ INFANTRY, CHAOS SPACE MARINES ]</Text>
                    </CollapseBody>
                </Collapse>

                    <View style={{ marginBottom: 25}}/>
            
            </ScrollView>

          </View>
        );
    },

    Unit5: function warptalon() {


        return(
            <View style={{ flex: 1, alignItems: 'center' }}>
      
            <Image 
                  source={require('../assets/' + 'csmwarptalon' +'.png')}
                  style={{ height: '54%', width: Dimensions.get('window').width, resizeMode: 'contain',  }}
            />

            <DataTable>
      
              <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Movement")}>M</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Weapon Skill")}>WS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Ballistic Skill")}>BS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Strength")}>S</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Toughness")}>T</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Wounds")}>W</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Atacks")}>A</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Leadership")}>Ld</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Armor Save")}>Sv</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Invulnerable Save")}>Inv</DataTable.Title>
                </DataTable.Header>
      
                <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>12"</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Warp Talon: 1\n\nWarp Talon Champion: 2")}>*</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Warp Talon: 8\n\nWarp Talon Champion: 8")}>*</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>5+</DataTable.Cell>
                </DataTable.Row>
      
                </DataTable> 

                
            <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width, marginBottom: 10 }} >

                {/* WEAPONS */}

                <View style={{ marginTop: 10}}/>

                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/weapons.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Name</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Range</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Type</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>AP</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>D</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Ability</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Lightning Claw")}>Lightning Claw x2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("User")}>*</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Each time the bearer fights, it makes 1 additional attack for each lightning claw equipped. \nEach time an attack is made with this weapon, you can re-roll the wound roll.")}>*</DataTable.Cell>  
                        </DataTable.Row>
                    </DataTable>

                    </CollapseBody>
                </Collapse>

                {/* ABILITY */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/ability.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        
                    <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Daemonic</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Models in this unit have a 5+ invulnerable save.</Text>
                            </CollapseBody>
                        </Collapse>
                    <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Warpflame Strike</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>When you set up this unit during deployment, it can be set up in the warp, ready to strike, instead of being placed on the battlefield. 
                                {"\n"}If it is, it can use a Warpflame Strike to arrive on the battlefield at the end of any of your Movement phases; when it does so, set the unit up anywhere that is more than 9" from any enemy models. 
                                {"\n"}In addition, enemy units cannot fire Overwatch against units that arrived by warpflame strike in the same turn.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Death to the False Emperor</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Each time a model with this ability makes a melee attack, a hit roll of 6+ scores one additional hit.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Hateful Assault</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Malicious Volleys</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                            <Text style={styles.collapseBody}>Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:
                            {'\n\t\u2022'} The firing model’s target is within half the weapon’s maximum range.
                            {'\n\t\u2022'} The firing model is INFANTRY and every model in its unit remained stationary in your previous Movement phase.
                            {'\n\t\u2022'} The firing model is a TERMINATOR, BIKER or HELBRUTE.
                            {'\n'}For the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ 
                            (e.g. boltgun, bolt pistol, combi-bolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when 
                            firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon.
                            </Text>
                            </CollapseBody>
                        </Collapse>
                    </CollapseBody>
                </Collapse>

                {/* KEYWORDS */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/keywords.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Faction Keywords: {"\n"}</Text>
                        [ CHAOS, [MARK OF CHAOS], HERETIC ASTARTES, [LEGION] ]</Text>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Keywords: {"\n"}</Text>
                        [ INFANTRY, DAEMON, JUMP PACK, FLY, WARP TALONS ]</Text>
                    </CollapseBody>
                </Collapse>

                    <View style={{ marginBottom: 25}}/>
            
            </ScrollView>

          </View>
        );
    },

    Unit6: function forgefiend() {


        return(
            <View style={{ flex: 1, alignItems: 'center' }}>
      
            <Image 
                  source={require('../assets/' + 'csmforgefiend' +'.png')}
                  style={{ height: '54%', width: Dimensions.get('window').width, resizeMode: 'contain',  }}
            />

            
      
              <DataTable>
      
                <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Movement")}>M</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Weapon Skill")}>WS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Ballistic Skill")}>BS</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Strength")}>S</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Toughness")}>T</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Wounds")}>W</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Atacks")}>A</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Leadership")}>Ld</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Armor Save")}>Sv</DataTable.Title>
                  <DataTable.Title style={{  justifyContent: 'center' }} onPress={() => ModPop("Invulnerable Save")}>Inv</DataTable.Title>
                </DataTable.Header>
      
                <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                  <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Forgefiend\n\n\u2022 7+  Wounds: M: 8\"\n\u2022 4-6 Wounds: M: 6\"\n\u2022 1-3 Wounds: M: 4\"")}>*</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>4+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Forgefiend\n\n\u2022 7+  Wounds: BS: 4+\n\u2022 4-6 Wounds: BS: 5+\n\u2022 1-3 Wounds: BS: 6+")}>*</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>6</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>7</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>12</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Forgefiend\n\n\u2022 7+  Wounds - A: 4\n\n\u2022 4-6 Wounds - A: 3\n\n\u2022 1-3 Wounds - A: 2")}>*</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>8</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>3+</DataTable.Cell>
                  <DataTable.Cell style={{  justifyContent: 'center' }}>5+</DataTable.Cell>
                </DataTable.Row>
      
                </DataTable> 

                <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width,  marginBottom: 10 }}>

                {/* WEAPONS */}

                <View style={{ marginTop: 10}}/>

                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/weapons.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>

                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: 'lightgrey' }}>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Name</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Range</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Type</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>S</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>AP</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>D</DataTable.Title>
                            <DataTable.Title style={{  justifyContent: 'center' }}>Ability</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Ectoplasm Cannon")}>Ectoplasm Cannon x2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>24"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Heavy D3")}>HD3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>7</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>D3</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Blast")}>*</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Hades Autocannon")}>Hades Autocannon x2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>36"</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Heavy 4")}>H4</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>8</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: '#E2E2E2' }}>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Daemon Jaws")}>Daemon Jaws</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }} onPress={() => ModPop("Melee")}>CC</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>*</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-1</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>2</DataTable.Cell>
                            <DataTable.Cell style={{  justifyContent: 'center' }}>-</DataTable.Cell>  
                        </DataTable.Row>
                    </DataTable>

                    </CollapseBody>
                </Collapse>

                {/* ABILITY */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/ability.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        
                    <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Daemonic</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>Models in this unit have a 5+ invulnerable save.</Text>
                            </CollapseBody>
                        </Collapse>
                    <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Infernal Regeneration</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>At the start of your turn, this model regains 1 lost wound.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Explodes</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6 it explodes, and each unit within 6" suffers D3 mortal wounds.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse> {/* Ability 1 */}
                            <CollapseHeader>
                                <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Hateful Assault</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.collapseBody}>If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn.</Text>
                            </CollapseBody>
                        </Collapse>
                        
                    </CollapseBody>
                </Collapse>

                {/* KEYWORDS */}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Image source={require('../assets/keywords.png')}
                            style={{ alignSelf: 'center' }}/>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Faction Keywords: {"\n"}</Text>
                        [ CHAOS, [MARK OF CHAOS], HERETIC ASTARTES, [LEGION] ]</Text>
                        <Text style={styles.collapseBody}><Text style={{ fontWeight: 'bold'}}>Keywords: {"\n"}</Text>
                        [ VEHICLE, DAEMON, DAEMON ENGINE, FORGEFIEND ]</Text>
                    </CollapseBody>
                </Collapse>

                    <View style={{ marginBottom: 25}}/>
            
            </ScrollView>

          </View>
        );
    },

};

export default Unit;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    collapseHeader: {
      fontSize: 16, 
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
  