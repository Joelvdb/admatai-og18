import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Countdown() {

  return (
    <View style={styles.container}>
      <Text>{moment("20210325", "YYYYMMDD").fromNow()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:windowWidth/4,
    height:windowWidth/4,
    borderRadius:windowWidth/4,
    backgroundColor: '#a5a58d',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  bubble: {
}
});
