import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import { COLUMNS } from '../components/columns'

const headData = [{n:'Tanggal'},{n:'Acuan Masuk'},{n:'Acuan Keluar'},{n:'Absen Masuk'},{n:'Absen Keluar'}]

const dataList = [
    { "id":1, "tanggal":"01/01", "acu_msk":"07.00", "acu_klr":"14.00", "abs_msk":"07.05", "abs_klr":"14.05"},
    { "id":2, "tanggal":"02/01", "acu_msk":"07.00", "acu_klr":"14.00", "abs_msk":"07.05", "abs_klr":"14.05"},
    { "id":3, "tanggal":"03/01", "acu_msk":"07.00", "acu_klr":"14.00", "abs_msk":"07.05", "abs_klr":"14.05"},
]

const numColumns = 5
const WIDTH = Dimensions.get('window').width

export default class Home extends React.Component {
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>{item.n}</Text>
            </View>
        )
    }

    render(){
        return(
            <ImageBackground
            source={require('../images/bg-home.jpg')}
            style={{width:"100%", height:'100%'}}>

                <View style={{paddingHorizontal:25, marginTop:25}}>
                    <Text style={{
                        fontSize:20,
                        color:'white',
                    }}>
                        Riwayat Absen (3 terakhir)
                    </Text>

                    <View style={styles.container}>
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

      container: {
          paddingHorizontal: 25,
          paddingTop: 20,
          marginBottom: 20
      },

      item: {
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
    }
);