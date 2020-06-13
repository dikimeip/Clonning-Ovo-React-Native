/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';


const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{height:400}}>
      <View style={{height:220, width:'100%', backgroundColor:'#4a248c',borderBottomLeftRadius:40, borderBottomRightRadius:40,position:'absolute'}}>
        <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
        <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>OPPOTO</Text>
        <Image source={require('./src/Assets/Icon/alert.jpg')} style={{width:30,height:30,marginLeft: 250}} ></Image>
        </View>
        <Text style={{color:'white',fontSize:15,marginTop:20,marginLeft:30}}>OPPOTO Cash</Text>
        <Text style={{flexDirection:'row',marginLeft:30}}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:15}}>RP. </Text>
          <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>130.000</Text>
        </Text>
      </View>
      <View style={{width:'90%',height:200,backgroundColor:'white',borderColor:'silver',borderWidth:0,borderRadius:20,marginLeft:'5%',position:'relative',top:150}}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <View style={{backgroundColor:'white', height:50, width:'30%',marginLeft:'2%',justifyContent:'center',alignItems:'center' }}>
            <Image source={require('./src/Assets/Icon/TopUp.jpg')} style={{width:50,height:30,resizeMode:'stretch'}} ></Image>
            <Text style={{color:'#4a248c',fontSize:13}}>Top Up</Text>
          </View>
          <View style={{backgroundColor:'white', height:50, width:'30%',marginLeft:'2%',justifyContent:'center',alignItems:'center' }}>
            <Image source={require('./src/Assets/Icon/Transfer.jpg')} style={{width:50,height:30,resizeMode:'stretch'}} ></Image>
            <Text style={{color:'#4a248c',fontSize:13}}>Transfer</Text>
          </View>
          <View style={{backgroundColor:'white', height:50, width:'30%',marginLeft:'2%',justifyContent:'center',alignItems:'center' }}>
            <Image source={require('./src/Assets/Icon/History.jpg')} style={{width:50,height:30,resizeMode:'stretch'}} ></Image>
            <Text style={{color:'#4a248c',fontSize:13}}>History</Text>
          </View>
        </View>
        <View style={{height:5,backgroundColor:'#f7f4f7',marginTop:20}}></View>
        <View style={{flexDirection:"row",flexWrap:'wrap',marginTop:15}}>
          <View style={{backgroundColor:'white', height:80, width:'20%',marginLeft:0,justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/pln.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>PLN</Text>
          </View>
          <View style={{backgroundColor:'white', height:80, width:'20%',marginHorizontal:'5%',justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/Pulsa.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>Pulsa</Text>
          </View>
          <View style={{backgroundColor:'white', height:80, width:'20%',marginHorizontal:'5%',justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/PaketData.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>Paket Data</Text>
          </View>
          <View style={{backgroundColor:'white', height:80, width:'20%',marginRight:0,justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/Asuransi.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>Asuransi</Text>
          </View>
          <View style={{backgroundColor:'white',marginTop:10, height:80, width:'20%',marginLeft:0,justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/bpjs.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>BPJS</Text>
          </View>
          <View style={{backgroundColor:'white',marginTop:10, height:80, width:'20%',marginHorizontal:'5%',justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/TvKabel.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>TV Kabel</Text>
          </View>
          <View style={{backgroundColor:'white',marginTop:10, height:80, width:'20%',marginHorizontal:'5%',justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/IuranLingkungan.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>Iuran</Text>
          </View>
          <View style={{backgroundColor:'white',marginTop:10, height:80, width:'20%',marginRight:0,justifyContent:'center',alignItems:'center' }}>
              <Image source={require('./src/Assets/Icon/Lain.jpg')} style={{width:40,height:45,resizeMode:'stretch'}} ></Image>
              <Text style={{color:'#4a248c',fontSize:13,marginTop:5}}>Lainya</Text>
          </View>
        </View>
      </View>
      </View>
      <View style={{height:10,backgroundColor:'#f7f4f7',marginTop:50}}></View>
      <View style={{flex:1 ,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:20,marginLeft:40}}>Info dan Promo Spesial</Text>
          <Text style={{fontSize:17,marginRight:35,color:'#82c2c6',fontWeight:'bold'}}>Lihat Semua</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
          <ScrollView horizontal={true}>
             <View style={{width:400,height:150,backgroundColor:'#3a1c73',marginLeft:40,borderRadius:20}}>
              <View style={{flexDirection:'row',marginTop:20,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:120,height:40,backgroundColor:'white'}}>
                  <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',color:'black',marginTop:5}}>BREAKING</Text>
                </View>
                <View style={{width:100,height:50,backgroundColor:'red'}}>
                  <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'white',marginTop:3}}>NEWS</Text>
                </View>
              </View>
              <Text style={{marginTop:10,color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>MERCHANT REKANAN OPPOTO</Text>
              <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>BERTAMBAH LAGI!</Text>
            </View>
            <View style={{width:400,height:150,backgroundColor:'#3a1c73',marginLeft:20,borderRadius:20}}>
              <View style={{flexDirection:'row',marginTop:20,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:120,height:40,backgroundColor:'white'}}>
                  <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',color:'black',marginTop:5}}>BREAKING</Text>
                </View>
                <View style={{width:100,height:50,backgroundColor:'red'}}>
                  <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'white',marginTop:3}}>NEWS</Text>
                </View>
              </View>
              <Text style={{marginTop:10,color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>MERCHANT REKANAN OPPOTO</Text>
              <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>BERTAMBAH LAGI!</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{height:10,backgroundColor:'#f7f4f7',marginTop:20}}></View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{fontWeight:'bold',fontSize:20,marginLeft:40}}>Yang Menarik di OPPOTO</Text>
        </View>

      </View>
      <View style={{height:70 ,backgroundColor:'white',flexDirection:'row'}}>
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./src/Assets/Icon/Home.jpg')} style={{width:'40%',height:'40%',resizeMode:'stretch'}} ></Image>
          <Text style={{color:'#4a248c',marginTop:5}}>Home</Text>
        </View>
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./src/Assets/Icon/Deals.jpg')} style={{width:'40%',height:'40%',resizeMode:'stretch'}} ></Image>
          <Text style={{color:'#4a248c',marginTop:5}}>Deals</Text>
        </View>
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./src/Assets/Icon/Scan.jpg')} style={{width:'60%',height:'60%',resizeMode:'stretch',paddingTop:10}} ></Image>
          <Text style={{color:'#4a248c',marginTop:2}}>Scan</Text>
        </View>
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./src/Assets/Icon/Finance.jpg')} style={{width:'40%',height:'40%',resizeMode:'stretch'}} ></Image>
          <Text style={{color:'#4a248c',marginTop:5}}>Finance</Text>
        </View>
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./src/Assets/Icon/Profil.jpg')} style={{width:'40%',height:'40%',resizeMode:'stretch'}} ></Image>
          <Text style={{color:'#4a248c',marginTop:5}}>Profile</Text>
        </View>
      </View>
    </View>
  );
};



export default App;
