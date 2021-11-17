import React from 'react';
import { View,Image, Text,TouchableOpacity, SafeAreaView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AntDesign} from 'react-native-vector-icons'
import Home from './home'
const detailScreen = ({navigation, route}) =>{
    const watch = route.params;
    const [loading, setLoading] = React.useState(false);

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',paddingHorizontal:10,marginTop:20,}}>
            <View style={{
                //paddingHorizontal:20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:10,
            }}>
                <Icon name='arrow-back' size={26} onPress={() =>navigation.goBack()}/>
                <TouchableOpacity
                    style={{
                      height: 40,
                      width: 50,
                      borderRadius: 35,
                      position: "absolute",
                      right: 0,
                    }}>
        

        <AntDesign
          style={{ alignSelf: "center", top: 15 }}
          name="shoppingcart"
          size={24}
          color="#f07e05"
        />
      </TouchableOpacity>
            </View>
            
            <View style={{flex:0.45,marginTop:10,justifyContent:'center',alignItems:'center',padding:10}}>
                <Image source={watch.img} style={{resizeMode:'contain',flex:1}}/>
            </View>
            <View style={{flex:0.45,backgroundColor:'#F3E6DE', marginBottom:7, borderRadius:10, marginTop:20,paddingLeft:10,}}>
              <View style={{flexDirection:'row',alignItems:'center', marginTop:15,marginTop:5}}>
              <Text style={{fontSize:18}}>  
                {watch.name}
              </Text >
              <Text style={{fontSize:18}}>  
                {" - "}
                {watch.color}
              </Text>
              </View>
              <Text style={{fontSize:15, color:"orange"}}>  
                {watch.description}
              </Text>
              <View style={{flexDirection:'row',alignItems:'center', marginTop:15,marginTop:5}}>
              <Text>  
                Brand
              </Text>
              <Text style={{fontSize:15, }}>  
                {" : "}
                {watch.brand}
              </Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center', marginTop:15,marginTop:5}}>
              <Text>  
                Gender
              </Text>
              <Text style={{fontSize:15, }}>  
                {" : "}
                {watch.gender}
              </Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center', marginTop:15,marginTop:5}}>
              <Text>  
                Price
              </Text>
              <Text>
                {" : "}  
                {watch.currency}
              </Text>
              <Text> 
                {" "} 
                {watch.price}
              </Text>
              </View>
            </View>
            
            
            <TouchableOpacity
            style={{ backgroundColor: "#f07e05", marginHorizontal:100,padding:10,borderRadius:10 }}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
          <Text
            style={{
              marginTop:10,
              alignSelf: "center",
              color: "white", 
              fontSize: 15,
              fontWeight:'bold',
              justifyContent:'center',
              alignItems:'center'
            }}>
              Continue Shopping
          </Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
}
export default detailScreen;