import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import {useState} from 'react';
import { Ionicons, FontAwesome, AntDesign,MaterialIcons } from '@expo/vector-icons';


export default function SignUp({navigation}) {
  const register = () => Alert.alert("Confirmation Sent")

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:100,marginBottom:30}}>
            <View style={{flexDirection:'row'}}>
            <Text style = { {color:'white', fontSize:25, fontWeight:"600"}}>
              AmaZing 
            </Text>
            <View style={{paddingTop:25}}>
            <Text style = { {color:'orange', fontSize:25, fontWeight:"600"}}>
              WaTches 
            </Text>
            </View>
            </View>            
          </View>
      <View style={styles.inputs}>
      <View style={{marginBottom:10}}>
      <View style={styles.email_pass}>
      <MaterialIcons name='email' size= {18} color='black'/>
      <Text style={{fontWeight:'bold',marginHorizontal:10}}>EMAIL</Text>
      </View>
      <TextInput style={styles.textInputs} placeholder="Enter Email" underlineColorAndroid={'transparent'}/>
      </View>
      <View style={styles.email_pass}>
      <FontAwesome name='lock' size= {18} color='black'/>
      <Text style={{fontWeight:'bold',marginHorizontal:10}}>PASSWORD</Text>
      </View>
      <TextInput style={styles.textInputs} placeholder="Password" underlineColorAndroid={'transparent'} secureTextEntry={true}/>
      <TextInput style={styles.textInputs} placeholder="Confirm Password" underlineColorAndroid={'transparent'} secureTextEntry={true}/>

      <TouchableOpacity style={styles.btn} 
      onPress={() =>{
        navigation.navigate('Login')
      }}
      >
        <View style={{backgroundColor:'orange',borderRadius:15,alignItems:'center',justifyContent:'center', marginTop:10}}>
        <Text style={styles.btn_text}>SIGNUP</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'space-between', marginVertical:10,marginHorizontal:10}}>
        <TouchableOpacity
        onPress={() =>{
          navigation.navigate('Login')
        }}
        >
          <Text style={{fontSize:15,fontWeight:'500',color:'orange'}}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={register}>
          <Text style={{fontSize:15,fontWeight:'500',color:'orange'}}>
            CONFIRM CODE
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:17,
    alignSelf:'stretch',   
    backgroundColor:'#F3E6DE',
    justifyContent:'center',
    alignItems:'stretch'
  },
  email_pass:{
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'center'
  },
  header:{
    flex:1,
    textAlign:'center',
    marginTop:'30%',
    fontSize:20,
    color:'black',
    borderBottomColor:"#199187",
    borderBottomWidth:1,
    fontWeight:'bold',
  },
  textInputs:{
    borderRadius: 15,
    fontSize:17,
    color:"#fff",
    alignSelf:'stretch',
    height:40,
    marginVertical:10,
    borderWidth:.5,
    borderColor:"grey",
    paddingVertical:5,
    paddingHorizontal: 10,
  },
  inputs:{
    marginHorizontal:40,
    //alignItems:'center',
    justifyContent:'center',
    marginBottom:'35%'
    
  },
  
  btn_text:{
    color:"white",
    fontSize:17,
    fontWeight:'bold',
    paddingVertical:10,
  },
  
});
