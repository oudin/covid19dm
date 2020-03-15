import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Count from './Count';
import StepModal from "react-native-step-modal";


const { width, height } = Dimensions.get('window')
export default function HomeScreen({navigation}) {
  let Component1 = <View>
<Text style={{fontSize: 120, textAlign: 'center'}}>👏</Text>
  <Text style={[styles.center, styles.h3]}>Wash your hands properly with soap and water for twenty (20) seconds</Text>
  <Text style={[styles.center, styles.poptext]}>Use an alcohol-based hand sanitizer if water and soap are not available.</Text></View>;

let Component2 = <View>
<Text style={{fontSize: 120, textAlign: 'center'}}>🤧</Text>
  <Text style={[styles.center, styles.h3]}>Cover your nose and mouth with a tissue when you cough or sneeze</Text>
  <Text style={[styles.center, styles.poptext]}>Dispose of tissue immediately after using. Cough and sneeze into the crook of your elbow if you do not have a tissue.</Text></View>;

let Component3 = <View>
<Text style={{fontSize: 120, textAlign: 'center'}}>🤭</Text>
  <Text style={[styles.center, styles.h3]}>Avoid touching your face</Text>
  <Text style={[styles.center, styles.poptext]}>Don't touch your eyes, nose or mouth wiht your hands to avoid getting infected.</Text></View>;

let Component4 = <View>
<Text style={{fontSize: 80, textAlign: 'center'}}>❌🤝❌</Text>
  <Text style={[styles.center, styles.h3, {marginTop: 30}]}>Avoid Shaking Hands</Text>
  <Text style={[styles.center, styles.poptext]}>Avoid shaking hands, kissing people hello and unnecessary contact with people in public.</Text></View>;

let Component5 = <View>
<Text style={{fontSize: 120, textAlign: 'center'}}>😷</Text>
  <Text style={[styles.center, styles.h3]}>Stay home if you are ill</Text>
  <Text style={[styles.center, styles.poptext]}>Avoid close contact with people who have flu-like symptoms or if you are feeling sick.</Text></View>;



  return (
    <View style={styles.container}>
       <StepModal stepComponents={[Component1, Component2, Component3, Component4, Component5]} />
      <View style={{position: 'absolute', top: 0, zIndex: 999}}>
      <Count />
      </View>
          <Text style={{fontSize: 124, paddingTop: 30}}>🙂</Text>
          <Text style={{color: 'black', fontSize: 24}}>Hello!</Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
              marginVertical: 0,
            }}>
            Are you feeling sick?
          </Text>
          <View style={{flexDirection: 'row'}}>
          

          <TouchableOpacity style={styles.no} onPress={() => navigation.navigate('Links')}>
            <Text style={{color: 'white',fontSize: 24}}>No</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.yes} onPress={() => navigation.navigate('Symptoms')}>
            <Text style={{color: 'black',fontSize: 24}}>Yes</Text>
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
         margin: 30
      }}>
        <MaterialCommunityIcons name="phone" size={24} color="grey" />
        <Text style={{fontSize: 18, color: 'grey', paddingLeft: 8, fontWeight: 'bold'}}>Call the COVID19 Hotline</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 20, fontSize: 14, fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 40}}>Please do not panic. Together we can reduce the spread of COVID-19 in Trinidad and Tobago.</Text>
      <Text style={{marginTop: 20, fontSize: 12, paddingHorizontal: 20}}>If you are experiencing flu-like symptoms and have recently travelled outside of Trinidad and Tobago, or have come into close contact with someone who has travelled internationally, please self-quarantine and call your nearest public health facility.</Text>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: 'white',
    flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' 
  },
  yes: {
    width: '45%',
    marginTop: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  no: {
    width: '45%',
    marginTop: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  h3: {
  fontSize: 24,
  fontWeight: 'bold'
  },
  center: {
  textAlign: 'center'
  },
  poptext: {
    fontSize: 18,
    paddingVertical: 20
  }
});
