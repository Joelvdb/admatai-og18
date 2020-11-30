import Countdown from "./Countdown";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Animated, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Animatedcountdown extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          mounted:false
      }
  
    }
    async componentDidMount(){
        this.setState({
            mounted:true,
        })
    }

    render() {
    
      return (
        <View style={styles.container}>
        <Animatable.View animation={'tada'} iterationCount={'infinite'} iterationDelay={3000}>
          <Countdown/>
        </Animatable.View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      top:80,
      left:10,

        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        position: 'absolute',zIndex: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.0)'
    },

})