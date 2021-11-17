import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,TextInput } from 'react-native';
import { AntDesign,MaterialIcons,FontAwesome, Feather } from '@expo/vector-icons';


const login =({navigation})=> {

  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
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
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
        <Feather name='user' color='grey' size={24}/>
          <TextInput placeholder='Username or Email' underlineColorAndroid={'transparent'}
            style={{
              borderRadius: 15,
              fontSize:17,
              color:"black",
              alignSelf:'stretch',
              height:40,
              marginVertical:10,
              paddingVertical:5,
              paddingHorizontal: 10,
              width:'60%',
              }}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
        <Feather name='user' color='grey' size={24}/>
          <TextInput placeholder='Username or Email' placeholder="Password" underlineColorAndroid={'transparent'} secureTextEntry={true}
            style={{
              borderRadius: 15,
              fontSize:17,
              color:"black",
              alignSelf:'stretch',
              height:40,
              marginVertical:10,
              paddingVertical:5,
              paddingHorizontal: 10,
              width:'60%',
              }}/>
        </View>
        <TouchableOpacity style={{marginLeft:-115,marginBottom:10}}>
          <Text style={{color:'blue'}}>
            Forgotten Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} 
          onPress={() =>{
            navigation.navigate('Home')
          }}
          >
        <View style={{backgroundColor:'orange',borderRadius:15,alignItems:'center',justifyContent:'center', marginTop:10}}>
        <Text style={styles.btn_text}>Login</Text>
        </View>
      </TouchableOpacity>
        <View>
          <Text style={{color:'orange', fontSize:15,marginTop:5 }}>
            - or -
          </Text>
        </View>
        <TouchableOpacity
          onPress ={() =>{
            navigation.navigate('Home')
          }}
          style={{backgroundColor:"#e3e3e3", 
          padding:10,paddingHorizontal:48,
          marginTop:20,borderRadius:10, 
          flexDirection:"row", 
          alignItems:"center"}}>
            <AntDesign name="google" size={24} color="blue" />
          <Text style={{fontSize:18, marginLeft:10}}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress ={() =>{
          navigation.navigate('Home')
        }}
        style={{backgroundColor:"black", 
        padding:10,
        paddingHorizontal:48,
        marginTop:20,
        borderRadius:10, 
        flexDirection:"row",
        alignItems:"center"}}>
        <AntDesign name="apple1" size={24} color="white" />
          <Text style={{fontSize:18, color:'white', marginLeft:10}}>Login with Apple</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            {/*<Text style={{color:"white",fontWeight:'500',marginTop:10 }}>Not a member?</Text>*/}
            <TouchableOpacity 
            onPress ={() =>{
              navigation.navigate('SignUp')
            }}
            >
            <Text style={{color:"orange",fontWeight:'bold',marginTop:10 }}> SignUp</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    backgroundColor:'#F3E6DE' 
    
  },
  image: {
    justifyContent: "center"
  },
  email_pass:{
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'center'
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
  btn_text:{
    color:"white",
    fontSize:15,
    fontWeight:'bold',
    paddingVertical:10,
    paddingHorizontal:107,

  },
  
});

export default login;