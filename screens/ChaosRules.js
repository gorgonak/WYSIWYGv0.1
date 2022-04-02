import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'; // npm install accordion-collapse-react-native


function CSMRules(props) {
    return ( 
  
        <View style={{ flex: 1, alignItems: 'center' }}>
  
        <ScrollView style={{flexGrow: 1, width: Dimensions.get("window").width, marginBottom: 10, marginTop: 35 }} >

            {/* ABILITY */}
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Image source={require('../assets/armyruleability.png')}
                        style={{ width: Dimensions.get("window").width, resizeMode: 'contain', alignSelf: 'center' }}/>
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

                    <Collapse> {/* Ability 2 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Hateful Assault</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn.</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 3 */}
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

                    <Collapse> {/* Ability 4 */}
                        <CollapseHeader>
                            <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Daemonic Ritual</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <Text style={styles.collapseBody}>Instead of moving in their Movement phase, any CHAOS CHARACTER can, at the end of their Movement phase, 
                        attempt to summon a unit with this ability by performing a Daemonic Ritual (the character cannot do so if they arrived as reinforcements this turn, or if they themselves have been summoned to the battlefield this turn).
                        If they do so, first choose one of the four Chaos Gods – KHORNE, TZEENTCH, NURGLE or SLAANESH. A CHARACTER who owes allegiance to one of the Dark Gods can only attempt to summon the units of their patron
                        – for example, a KHORNE CHARACTER could only attempt to summon a KHORNE unit.
                        Roll up to three D6 – this is your summoning roll. You can summon one new unit with the Daemonic Ritual ability to the battlefield that has a Power Rating equal to or less than the total result so long as it has the same Chaos God keyword you chose at the start. This unit is treated as reinforcements for your army and can be placed anywhere on the battlefield that is wholly within 12" of the character and more than 9" from any enemy model. If the total rolled is insufficient to summon any unit, the ritual fails and no new unit is summoned.
                        If your summoning roll included any doubles, your character then suffers 1 mortal wound. If it contained any triples, it instead suffers D3 mortal wounds.</Text>
                        </CollapseBody>
                    </Collapse>
                </CollapseBody>

            </Collapse>

            {/* DETACHMENT */}
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Image source={require('../assets/armyrulesdetach.png')}
                        style={{ width: Dimensions.get("window").width, resizeMode: 'contain', alignSelf: 'center' }}/>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                        
                    <Collapse> {/* Ability 1 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Chaos Space Marine Units</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>In the rules described in this section we often refer to ‘Chaos Space Marine units’. 
                            This is shorthand for any unit that has one of the following Faction keywords: [ LEGION ], BLACK LEGION, WORD BEARERS, IRON WARRIORS, ALPHA LEGION, NIGHT LORDS, WORLD EATERS, EMPEROR’S CHILDREN, FALLEN or RED CORSAIRS. 
                            A Chaos Space Marine Detachment is therefore one which only includes units with one of these keywords. FABIUS BILE can be included in a Detachment without preventing it from being a Chaos Space Marine Detachment.

                            {"\n\n"}* Note that the Death Guard and Thousand Sons Legions deviate significantly in terms of organisation and therefore cannot make use of any of the rules or abilities listed in this section; instead they have bespoke rules and abilities detailed in their own codexes.</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 2 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Despoilers of the Galaxy</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>If your army is Battle-forged, all Troops units in Chaos Space Marine Detachments gain this ability. 
                            Such a unit that is within range of an objective marker controls it even if there are more enemy models within range of it. 
                            If an enemy unit within range of the objective marker has a similar ability, then it is controlled by the player who has the most models within range as normal.</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 3 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Legions</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <Text style={styles.collapseBody}> If your army is Battle-forged, all CHARACTER, INFANTRY, BIKER and HELBRUTE units in Chaos Space Marine Detachments gain a Legion Trait, 
                        so long as every unit in that Detachment is from the same Legion. The Legion Trait gained depends upon the Legion they are from, as shown in the Legion Traits table. 
                        For example, all such units in a NIGHT LORDS Detachment gain the Terror Tactics trait.

                        {"\n\n"}If your Chaos Space Marines are from a Renegade Chapter, or if they do not otherwise have an associated trait, use the Renegade Chapters trait. 
                        For example, all of the units described above that are in a RED CORSAIRS Detachment would have the Dark Raiders trait.

                        {"\n\n"} <Text style={{fontStyle: 'italic'}}>see LEGION TRAITS below</Text>
                        </Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 4 */}
                        <CollapseHeader>
                            <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Mere Mortals</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <Text style={styles.collapseBody}>CHAOS CULTIST units do not gain a Legion Trait.</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 5 */}
                        <CollapseHeader>
                            <View>
                                <Text style={styles.collapseHeader}>{'\u2022'} Shadowy Allies</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <Text style={styles.collapseBody}>The inclusion of Fabius Bile or FALLEN units in a Detachment does not prevent other units in that Detachment from gaining a Legion Trait. 
                        However, Fabius Bile and the FALLEN units can never themselves benefit from a Legion Trait.</Text>
                        </CollapseBody>
                    </Collapse>
                </CollapseBody>
            </Collapse>


            {/* KEYWORDS */}
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Image source={require('../assets/armyruleskeyword.png')}
                        style={{ width: Dimensions.get("window").width, resizeMode: 'contain', alignSelf: 'center' }}/>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                        
                    <Collapse> {/* Ability 1 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Legion</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>Chaos Space Marines belong to a Legion or Renegade Chapter. 
                            For simplicity we will refer to all of these as Legions, even though in truth Renegade Chapters have a different genesis.
                            Some datasheets specify what Legion the unit is from (e.g. Abaddon the Despoiler has the BLACK LEGION keyword, so is from the Black Legion). 
                            If a Heretic Astartes datasheet does not specify which Legion it is from, it will have the [ LEGION ] keyword. 
                            When you include such a unit in your army, you must nominate which Legion that unit is from. 
                            You then simply replace the [ LEGION ] keyword in every instance on that unit’s datasheet with the name of your chosen Legion.
                            For example, if you were to include a Chaos Lord in your army, and you decided he was from the Alpha Legion, 
                            his [ LEGION ] Faction keyword is changed to ALPHA LEGION and his Lord of Chaos ability would then read: 
                            ‘You can re-roll hit rolls of 1 made for friendly ALPHA LEGION units within 6" of this model.’

                            {"\n\n"}* The Death Guard, Thousand Sons and FALLEN deviate significantly in terms of organisation and fighting styles. 
                            As a result, you cannot choose one of these keywords when determining which Legion a unit in this codex is from. 
                            The rules and abilities for the Death Guard and Thousand Sons Legions are detailed in their own codexes, and both of the datasheets that describe the forces of the Fallen can be found later in this book.</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 2 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Mark of Chaos</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}>Many Heretic Astartes units dedicate themselves to a single Chaos God, whilst others worship the entire pantheon in all its dark glory. 
                            The Chaos God a unit is dedicated to is denoted by the Mark of Chaos that it bears. 
                            Some datasheets specify the Mark of Chaos for a unit (e.g. Khârn the Betrayer has the KHORNE keyword). {"\n"}
                            If a Heretic Astartes datasheet does not specify which Mark of Chaos a unit has, it will have the [ MARK OF CHAOS ] keyword. 
                            When you include such a unit in your army, you must nominate which Mark of Chaos that unit has. 
                            You then simply replace the [ MARK OF CHAOS ] keyword in every instance on that unit’s datasheet with one of the following: KHORNE, TZEENTCH, NURGLE or SLAANESH. 
                            Note that PSYKERS cannot have the KHORNE keyword.
                            {"\n"}{"\n"}
                            You do not have to choose a Mark of Chaos for a unit if you do not want to; 
                            if you do not, it is assumed that the unit has not dedicated itself to a specific Dark God. {"\n"}{"\n"}
                            The exceptions are units from the World Eaters or Emperor’s Children Legions: all WORLD EATERS units must have the KHORNE keyword if they are able to do so, 
                            and all EMPEROR’S CHILDREN units must have the SLAANESH keyword if they are able to do so. 
                            If a unit has the TZEENTCH, NURGLE or SLAANESH keywords, it cannot be from the World Eaters Legion, 
                            and if a unit has the KHORNE, TZEENTCH or NURGLE keywords, it cannot be from the Emperor’s Children Legion. 
                            In addition, PSYKERS cannot be from the World Eaters Legion.</Text>
                        </CollapseBody>
                    </Collapse>
                </CollapseBody>
            </Collapse>


            {/* LEGION TRAITS */}
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Image source={require('../assets/armyruleslegion.png')}
                        style={{ width: Dimensions.get("window").width, resizeMode: 'contain', alignSelf: 'center' }}/>
                    </View>
                    </CollapseHeader>
                <CollapseBody>
                        
                    <Collapse> {/* Ability 1 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Alpha Legion</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}><Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>HIDDEN IN PLAIN SIGHT</Text> {"\n\n"}
                            The warriors of the Alpha Legion are masters of duplicity, able to mislead and misdirect even the most vigilant of enemies before delivering the killing blow.
                            {"\n\n"}
                            Your opponent must subtract 1 from hit rolls that target units with this trait if they are more than 12" away.</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse> {/* Ability 2 */}
                        <CollapseHeader>
                            <View>
                            <Text style={styles.collapseHeader}>{'\u2022'} Black Legion</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text style={styles.collapseBody}><Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>BLACK CRUSADERS</Text> {"\n\n"}
                            <Text style={{fontStyle: 'italic'}}>Inexorable and unflinching, the Black Legion exemplify the threat posed by the Heretic Astartes, emerging from the Eye of Terror for the sole purpose of erasing the Imperium from the galaxy.
                            {"\n\n"}</Text>
                            Add 1 to the Leadership characteristic of models in units with this trait. 
                            In addition, if a unit with this trait Advanced, it treats all its Rapid Fire weapons as Assault weapons until the end of the turn 
                            (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).</Text>
                        </CollapseBody>
                    </Collapse>
                </CollapseBody>
            </Collapse>
                
                            

                        

      </ScrollView>
  
      <View style={{ marginBottom: 25, height: 1, width: '100%' }} />
  
    </View> 
    );
  }

export default CSMRules;

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