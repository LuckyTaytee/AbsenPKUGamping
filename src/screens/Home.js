import React from 'react';
//import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, ImageBackground, Button, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';

const headData = [{id:'Jadwal'},{id:'Acuan'},{id:'Jam'},{id:'Keterangan'}]

const dataList = [
    { id: 'Masuk', key: '1' },
    { id: '07.00', key: '2' },
    { id: '07.05', key: '3' },
    { id: 'Terlambat', key: '4' },
    { id: 'Keluar', key: '5' },
    { id: '15.00', key: '6' },
    { id: '15.05', key: '7' },
    { id: 'Tepat', key: '8' },]

var isMasuk = "false";

const numColumns = 4
const WIDTH = Dimensions.get('window').width

export default class Home extends React.Component {
    constructor() {
        super();
    
        this.state = { currentTime: null}
        this.state = { absenTime: null}
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
        if (isMasuk === "false") {
            let newArray = dataList;
            newArray[2].id = [this.state.absenTime];
            alert("Anda Masuk pukul " + newArray[2].id);
            isMasuk = "true"
        } else {
            let newArray = dataList;
            newArray[6].id = [this.state.absenTime];
            alert("Anda Keluar pukul " + newArray[6].id);
            isMasuk = "false"
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

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>{item.id}</Text>
            </View>
        )
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <ImageBackground
            source={require('../images/bg-home.jpg')}
            style={{width:"100%", height:'100%'}}>

                <View style={{backgroundColor:'black', width:'95%', height:'95%', alignSelf:'center', flex:1 }}>

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

                    <View style={styles.flatlist}>
                        <FlatList style={{backgroundColor:'#20FA7B'}}
                            data={headData}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={numColumns}
                        />
                        
                        <FlatList style={{backgroundColor:'white'}}
                            data={dataList}
                            renderItem={this._renderItem}
                            numColumns={numColumns}
                        />
                    </View>

                    <TouchableOpacity onPress={this.getAbsenTime}>
                        <View style={[styles.button, {backgroundColor:'white'}]}>
                                <Text style={{fontFamily:"MontBold", color:"#00716F"}}>
                                    Absen Masuk/Keluar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigate('History')}>
                        <View style={[styles.button, {backgroundColor:'#06C7C4'}]}>             
                            <Text style={{fontFamily:"MontBold", color:"#00716F"}}>
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
        alignItems: 'center',
      },

      timeText: {
        fontSize: 50,
        color: 'white'
      },

      flatlist: {
          paddingHorizontal: 25,
          paddingTop: 20,
          marginBottom: 20
      },

      item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: (WIDTH-200) / numColumns,
        flex: 1,
        margin: 1
      },

      button: {
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        paddingVertical:8,
        borderRadius:23
      }
  
    });