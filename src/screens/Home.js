import React from 'react';
//import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, ImageBackground, AppRegistry, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import { withOrientation } from 'react-navigation';

const headData = [{n:'Jadwal'},{n:'Acuan'},{n:'Jam'},{n:'Keterangan'}]

const dataList = [
    { n: 'Masuk', key: '1' },
    { n: '07.00', key: '2' },
    { n: '07.05', key: '3' },
    { n: 'Terlambat', key: '4' },
    { n: 'Keluar', key: '5' },
    { n: '15.00', key: '6' },
    { n: '15.05', key: '7' },
    { n: 'Tepat', key: '8' },]

const numColumns = 4
const WIDTH = Dimensions.get('window').width

export default class Home extends React.Component {
    constructor() {
        super();
    
        this.state = { currentTime: null}
    }
    
    componentDidMount() {
        this.getCurrentTime();
    }
    
    getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = 'pm';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = 'am';
        }
    
        this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });
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
                <Text>{item.n}</Text>
            </View>
        )
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <ImageBackground
            source={require('../images/bg-home.jpg')}
            style={{width:"100%", height:'100%'}}>

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
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />
                </View>

                <View style={[styles.button, {backgroundColor:'white'}]}>
                    <Text 
                    style={{
                        color:"#00716F"
                    }}>Absen Masuk/Keluar</Text>
                </View>

                <View style={[styles.button, {backgroundColor:'#06C7C4'}]}>
                    <Text 
                    onPress={()=>navigate('History')}

                    style={{
                        color:"#00716F"
                    }}>Riwayat Absen</Text>
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