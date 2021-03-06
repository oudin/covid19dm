import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, Linking } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


const { width, height } = Dimensions.get('window')


export default class Tested extends React.Component {
  state = {
  };

  render() {
    return (
<View style={styles.container}>
          <Text style={{fontSize: 72}}>😷</Text>
          <Text style={{color: 'black', fontSize: 24, textAlign: 'center'}}>You should self-quarantine for fourteen (14) days.</Text>
          <Text
            style={styles.instructions}>
            Please contact a doctor, healthcenter or hospital to speak with a doctor.
          </Text>

          <View style={{flexDirection: 'row'}}>

          <TouchableOpacity style={styles.yes} onPress={() => this.props.navigation.navigate('Contacts')}>
            <Text style={{color: 'black',fontSize: 24}}>View Hospitals Nearby</Text>
          </TouchableOpacity>

          
          </View>
          <TouchableOpacity
      onPress={() => Linking.openURL(`tel:${18688779742}`)}
      style={{
        width: width,
        height: 48,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
         flexDirection:'row',
         margin: 20
      }}>
        <MaterialCommunityIcons name="phone" size={24} color="grey" />
        <Text style={{fontSize: 18, color: 'grey', paddingLeft: 8, fontWeight: 'bold'}}>Call the COVID19 Hotline</Text>
      </TouchableOpacity>
          </View>
    );
  }
}

Tested.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  instructions: {
    backgroundColor: 'transparent',
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  yes: {
    width: '100%',
    margin: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  no: {
    width: '25%',
    margin: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
