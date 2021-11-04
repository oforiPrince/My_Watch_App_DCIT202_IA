import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import { Text, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screen/home';
import Settings from '../screen/settings';
import Carts from '../screen/carts';

const width = Dimensions.get('window').width;

const Stack = createNativeStackNavigator()

function HomeStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    );
}

function SettingsStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Navigator>
    );
}

function CartsStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Carts}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const Navigation = (props) =>{
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) => ({
            headerTitle: () => <Text>Header</Text>,
            tabBarIcon:({focused,color,size,padding}) => {
                var icon_Name;
                if (route.name === 'Home'){
                    icon_Name = focused ? 'home' : 'home-outline'
                }else if(route.name === 'Settings'){
                    icon_Name = focused ? 'setting' : 'settings-outline'
                }else if(route.name == 'Carts'){
                    icon_Name = focused ? 'cart': 'cart-outline'
                }

                return(
                    <Icon name={icon_Name} color={color} size ={size} style={{paddingBottom:padding}}/>
                );
                
            },
        })}
        tabBarOptions = {{
            activeTntColor: 'lightseagreen',
            inactiveTintColor: 'grey',
            labelStyle:{fontSize:16},
            style:{width:width}
        }}  
        >
            <Tab.Screen name='Settings' component={SettingsStackScreen}/>
            <Tab.Screen name='Home' component={HomeStackScreen}/>
            <Tab.Screen name='Carts' component={CartsStackScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
}

export default Navigation;