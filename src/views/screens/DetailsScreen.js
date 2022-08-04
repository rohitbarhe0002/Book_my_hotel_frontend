import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  console.log(item,"kkfffkkk");

  return (
    <ScrollView contentContainerStyle={{backgroundColor:COLORS.white,paddingBottom:20}}><StatusBar barStyle='light-content' translucent backgroundColor="rgba(0,0,0,0)"/>
   
    <ImageBackground source={item.image} style={style.headerImage}>
    <View style={style.header}>
      <Icon name='arrow-back-ios' size={28} color={COLORS.white} onPress={navigation.goBack}/>
      {/* <Icon name='arrow-back-ios' size={28} color={COLORS.white} onPress={navigation.goBack}/> */}

      <Icon name='bookmark-border' size={28} color={COLORS.white}/>


    </View>
    </ImageBackground>
    <View>
      <View style={style.iconContainer}>
        <Icon name='place' color={COLORS.white} size={20}/>
      </View>
      <View style={{marginTop:20,paddingHorizontal:20}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
        <Text style={{fontSize:20,fontWeight:'400',color:COLORS.grey}}>{item.location}</Text>
        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row'}}>
            <Icon name='star' color={COLORS.orange} size={20}/>
          <Icon name='star'color={COLORS.orange}  size={20}/>
          <Icon name='star'color={COLORS.orange}  size={20}/>
          <Icon name='star'color={COLORS.orange}  size={20}/>
            </View>
            <Text style={{fontSize:20,fontWeight:'bold', marginLeft:12}}>4.0</Text>
          </View>
       

     <Text style={{fontSize:13,color:COLORS.grey,}}>365reviews</Text>

        </View>

<View style={{marginTop:20}}> 
<Text style={{lineHeight:20,color:COLORS.grey}}>{item.details}</Text>
</View>
      </View>
      <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',paddingLeft:20,alignItems:'center'}}>
<Text style={{fontSize:20,fontWeight:'bold'}}>price per night</Text>
<View style={style.priceTag}>
  <Text style={{fontSize:17,textAlign:'center',fontWeight:'bold'}}>${item.price}</Text>
  <Text style={{fontSize:13,textAlign:'center',color:COLORS.grey}}>+Breakfast</Text>

</View>
      </View>
      <View style={style.btn}>Book Now</View>
    </View>
    </ScrollView>
  )
  }


export default DetailsScreen;


const style = StyleSheet.create({
  btn:{
    fontSize:20,
height:55,
justifyContent:'center',
alignItems:'center',
marginTop:40,
backgroundColor:COLORS.primary,
marginHorizontal:20,
borderRadius:10,
color:COLORS.white
  },
  priceTag:{
height:40,
alignItems:'center',
marginLeft:40,
paddingLeft:20,
flex:1,
backgroundColor:COLORS.secondary,
borderTopLeftRadius:20,
borderBottomLeftRadius:20,
flexDirection:'row'

  },
  headerImage:{
    height:400,
    width:'100%',
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
    overflow:'hidden'
  },
  header:{
    marginTop:60,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    justifyContent:'space-between'
  },
  iconContainer:{
    position:'absolute',
    height:60,
    width:60,
    backgroundColor:COLORS.primary,
    top:-30,
    right:20,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',

  }
})