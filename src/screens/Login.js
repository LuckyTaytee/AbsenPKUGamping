import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:'#FFF', height:'100%'}}>
                <Image style = {{width:125, height:125, alignSelf:'center', marginTop:50}}
                    source = {require('../images/logo.jpg')} />

                <Text style = {[styles.text, { fontSize:35, fontFamily:"MontBold" }]}>
                    E-Absen</Text>
                
                <Text style = {[styles.text, { fontSize:20, fontFamily:"MontRegular", marginBottom:40 }]}>
                    PKU Gamping</Text>

                <View style = {styles.input}>
                    <TextInput style={{paddingHorizontal:10}}
                        placeholder="NIK"
                        placeholderTextColor="#00716F"
                        keyboardType="number-pad"/>
                </View>

                <View style = {styles.input}>
                    <TextInput style={{paddingHorizontal:10}}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="#00716F"/>  
                </View>

                <TouchableOpacity onPress={()=>navigate('Home')}>
                    <View style={[styles.button]}>
                        <Text style={{
                            fontFamily:"MontBold",
                            color:"white"
                        }}>Log In</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigate('Register')}>
                    <Text style={[styles.text, { fontFamily:"MontBold", paddingVertical:30 }]}>
                        Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        input: {
            flexDirection:"row",
            alignContent:"center",
            marginHorizontal:55,
            borderWidth:2,
            marginTop:10,
            paddingHorizontal:10,
            borderColor:"#00716F",
            borderRadius:23
        },

        button: {
            marginHorizontal:55,
            alignItems:"center",
            justifyContent:"center",
            marginTop:30,
            backgroundColor:"#00716F",
            paddingVertical:8,
            borderRadius:23
        },

        text: { alignSelf:"center", color:"#00716F" }
    }
)