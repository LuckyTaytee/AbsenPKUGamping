import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Register extends React.Component{

    render(){
        return(
            <View style={{backgroundColor:"#FFF", height:"100%"}}>
               <Image 
                    style = {{width:125, height:125, alignSelf:'center', marginTop:50}}
                    source = {require('../images/logo.jpg')}
                />

                <Text
                    style = {{
                        fontSize:35,
                        alignSelf:"center",
                        fontFamily:"MontBold",
                        color:"#00716F"
                    }}
                >E-Absen</Text>
                
                <Text
                    style = {{
                        fontSize:20,
                        alignSelf:"center",
                        fontFamily:"MontRegular",
                        color:"#00716F",
                        marginBottom:40
                    }}
                >PKU Gamping</Text>

                <View style = {styles.input}>
                    <TextInput
                        placeholder="NIK"
                        placeholderTextColor="#00716F"
                        keyboardType="number-pad"
                        style={{paddingHorizontal:10}}/>  
                </View>

                <View style = {styles.input}>
                    <Text style={{paddingHorizontal:10, paddingVertical:4, color:"#00716F"}}>
                        deviceId</Text> 
                </View>

                <View style = {styles.input}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        keyboardType="email-address"
                        style={{paddingHorizontal:10}}/>  
                </View>

                <View style = {styles.input}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}/>  
                </View>

                <View style = {styles.input}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}/>  
                </View>

                <TouchableOpacity>
                    <View style={[styles.input, { marginTop:20, backgroundColor:"#00716F", paddingVertical:8}]}>
                        <Text style={{
                            fontFamily:"MontBold",
                            alignSelf:"center",
                            color:"white",
                        }}>Register</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        input: {
            marginHorizontal:55,
            borderWidth:2,
            marginTop:10,
            paddingHorizontal:10,
            borderColor:"#00716F",
            borderRadius:23
        },

        text: { alignSelf:"center", color:"#00716F" }
    }
)