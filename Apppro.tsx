import React from "react";

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'

function Apppro() {
  const isDarkmode = useColorScheme() ==='dark'
  return (
    <SafeAreaView style={Style.container}> 
      <View>
        <Text style={isDarkmode ? Style.textblack : Style.textwhite}>My name is "M umer aziz"</Text> 
      </View>

    </SafeAreaView>
  )
}

const Style = StyleSheet.create({ 
  container: {                    
    flex: 1,
   alignItems:'center',
   justifyContent:"center"
  },
  textwhite: {
    color: 'white',
  },
  textblack: {
    color: 'black',
  }
});                               

export default Apppro;