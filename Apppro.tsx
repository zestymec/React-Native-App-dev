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
        <Text style={Style.textStyle}>umer</Text> 
      </View>
    </SafeAreaView>
  )
}

const Style = StyleSheet.create({ 
  container: {                    
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
  

  }                               
});                               

export default Apppro;