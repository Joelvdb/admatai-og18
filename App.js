import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput, } from 'react-native';
import moment from 'moment';
import Coundown from './components/Countdown'
import Animatedcountdown from './components/Animatedcountdown';
import List from './components/List';
import firebase from 'firebase/app';
import {db} from './src/firebase/config'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      textHolder:'',
      data:['hold']
    }
  }
    componentDidMount() {
    db.ref('/sentences').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let todoItems = {...data};
      let array=[];
      Object.keys(todoItems).map(function(key, index) {
       array.push(todoItems[key]);
      });
      console.log(array)
      this.setState({data:array})
    });
  }
  render(){
  return (
    <View style={styles.container}>
      <List DATA={this.state.data}/>
      <Animatedcountdown style={{position: 'absolute',zIndex: 5,}}/>
      <TextInput
            ref={input => { this.textInput = input }}
            placeholder="עד מתי? תנו לי חיזוקים"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={text => this.setState({textHolder:text})}
            onSubmitEditing={()=>{
              this.textInput.clear()
                 // called only when multiline is false
            }}                        
            onKeyPress={ (event) => {
                if(event.nativeEvent.key == "Enter"){
                    db.ref('/sentences').push({
                      sentence:this.state.textHolder
                    });
                     //called when multiline is true
                    // this.signIn();
                 
                } 

            }}
        />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddbea9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
