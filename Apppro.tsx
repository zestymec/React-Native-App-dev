import React from "react";

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native'

function Apppro() {
  return (
    <SafeAreaView style={Style.container}> 
      <View>
        <Text style={isDarkmode ? textblack : textwhite}>My name is "M umer aziz"</Text> 
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