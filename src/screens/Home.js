import React from 'react';
//import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, ImageBackground, Button, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { currentTime: null, absenTime: null, absenType:'Absen Masuk',
            tableHead: ['Jadwal', 'Acuan', 'Jam', 'Status'],
            tableData: [
              ['Masuk', '07.00', '-', 'Terlambat'],
              ['Keluar', '14.00', '-', 'Tepat']
            ]  
        }
    }
    
    componentDidMount() {
        this.getCurrentTime();
    }
    
    getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
    
        if (hour < 10) {
            hour = '0' +  hour;
        }

        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        this.setState({ currentTime: hour + ':' + minutes + ':' + seconds});
        this.setState({ absenTime: hour + ':' + minutes});
    }

    getAbsenTime = () => {        
        if (this.state.absenType === "Absen Masuk") {
            let newArray = this.state.tableData;
            newArray[0][2] = [this.state.absenTime];
            alert("Anda Masuk pukul " + newArray[0][2]);
            this.setState({tableData: newArray});
            this.state.absenType = "Absen Keluar"
        } else {
            let newArray = this.state.tableData;
            newArray[1][2] = [this.state.absenTime];
            alert("Anda Keluar pukul " + newArray[1][2]);
            this.setState({tableData: newArray});
            this.state.absenType = "Absen Masuk"
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
          this.getCurrentTime();
        }, 1000);
    }

    render(){
        const state = this.state;
        const {navigate} = this.props.navigation
        return(
            <ImageBackground
            source={require('../images/bg-home.jpg')}
            style={{width:"100%", height:'100%'}}>

                <View style={{width:'100%', alignSelf:'center', flex:1 }}>

                    <View style={{paddingHorizontal:25, marginTop:50}}>
                        <Text style={{
                            fontFamily:"MontBold",
                            fontSize:20,
                            color:'white',
                        }}>
                            Selamat datang,
                            <Text>{'\t'}{'\t'}[Nama]</Text>
                        </Text>
                    </View>

                    <View style={{paddingHorizontal:25, marginTop:25}}>
                        <Text style={{
                            fontSize:20,
                            color:'white',
                            fontFamily:"MontRegular"
                        }}>
                            Waktu saat ini :
                        </Text>
                    </View>

                    <View style={styles.clock}>
                        <View>
                            <Text style={[styles.timeText, {fontFamily:"MontBold"}]}>{this.state.currentTime}</Text>
                        </View>
                    </View>

                    <View style={{paddingHorizontal:25, marginTop:15}}>
                        <Text style={{
                            fontSize:16,
                            color:'white',
                            fontFamily:"MontRegular"
                        }}>
                            Saat ini anda terjadwal,
                            <Text>{'\t'}{'\t'}[Shift] :</Text>
                        </Text>
                    </View>

                    <View style={styles.container}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#6B9080'}}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={state.tableData} style={styles.body} textStyle={styles.text}/>
                        </Table>
                    </View>

                    <TouchableOpacity onPress={this.getAbsenTime}>
                        <View style={[styles.button, {backgroundColor:'white'}]}>
                                <Text style={{fontFamily:"MontBold", color:"#00716F"}}>
                                    {this.state.absenType}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigate('History')}>
                        <View style={[styles.button, {backgroundColor:'#06C7C4', marginBottom:25}]}>             
                            <Text id='buttonabsen' style={{fontFamily:"MontBold", color:"#00716F"}}>
                                Riwayat Absen</Text>
                        </View>
                    </TouchableOpacity>
                
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create(
    {
      clock: {
        marginTop: (Platform.OS === 'ios') ? 0 : 0,
        paddingHorizontal:25
      },

      timeText: {
        fontSize: 50,
        color: 'white'
      },

      button: {
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        paddingVertical:8,
        borderRadius:23
      },

      container: { flex: 1, padding: 25},
      head: { height: 40, backgroundColor: '#A4C3B2' },
      text: { margin: 6 },
      body: { height: 40, backgroundColor: '#fff' }
  
    });