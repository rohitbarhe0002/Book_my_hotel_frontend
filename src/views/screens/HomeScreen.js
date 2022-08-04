import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

import hotels from '../../consts/hotels';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({ navigation }) => {
  const [selectedCatogoryIndex, setselectedCatogoryIndex] = React.useState(0);
  
  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
  // const scrollX = React.useRef(new Animated.Value(0)).current;
  // const image = 'data:image/png;,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'

  const CatogoryList = ({navigation}) => {
    return <View style={style.catogoryListContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setselectedCatogoryIndex(index)}>
          <View>
            <Text style={{
              ...style.catogoryListText,
              color: selectedCatogoryIndex == index ? COLORS.primary : COLORS.grey
            }}> {item}</Text>
            {selectedCatogoryIndex == index && (<View
              style={{
                height: 3,
                width: 30,
                backgroundColor: COLORS.primary, marginTop: 2
              }}>

            </View>)}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  }

  const Card = ({hotel,index}) => {
    //  const opacity = scrollX.interpolate({inputRange,outputRange:[0.7,0, 0.7]})
    //  const scale = scrollX.interpolate({inputRange,outputRange:[0.8,1, 0.8]})
 return <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('DetailsScreen',hotel)}>
  <View style={style.card}>
      <View style={style.priceTag}>
      <Text style={{color:COLORS.white,fontSize:20,fontWeight:'bold'}}>${hotel.price}</Text>

      </View>
      <Image source={hotel.image} style={style.image}/>
      <View style={style.cardDetails}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     
        <View>
        <Text style={{fontSize:15,fontWeight:'bold'}}>{hotel.name}</Text>
        <Text style={{fontSize:15,fontWeight:'bold',color:COLORS.grey}}>{hotel.location}</Text>
        </View>
      <Icon name='bookmark-border' size={26} color={COLORS.primary}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <View style={{flexDirection:'row'}}>
           <Icon name='star' color={COLORS.orange}/>
           <Icon name='star' color={COLORS.orange}/>
           <Icon name='star' color={COLORS.orange}/>
           <Icon name='star' color={COLORS.grey}/>
        </View>
        <Text style={{fontSize:10,color:COLORS.grey}}> 365 views</Text>
      </View>
      </View>
  </View>
  </TouchableOpacity>
  }

  const TopHotelsCard = ({hotel}) => {
    return <View style={style.topHotelsCard}> 
    <View style={{position:'absolute',top:5,right:5,zIndex:1,flexDirection:'row'}}> 
    <Icon name='star' size={15} color={COLORS.orange}/>
    <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:15}}>5.0</Text>
    </View>
    <Image style={style.tophotelImage} source={hotel.image}/>
    <View style={{paddingVertical:5,paddingHorizontal:1}}>
      <Text style={{fontSize:10,fontWeight:'bold',color:COLORS.grey}}> {hotel.name}</Text>
      <Text style={{fontSize:5,fontWeight:'bold',color:COLORS.grey}}> {hotel.location}</Text>

    </View>
    </View>

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header} >
        <View style={{ paddingHorizontal: 15, }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Find your hotel</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>in</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}> Paris</Text>
          </View>
        </View>
        <Icon name='person-outline' size={38} color={COLORS.grey}  onPress={()=>navigation.navigate('Profile')}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputContainer}>
          <Icon name='search' size={35} style={{ marginLeft: 27 ,marginTop:10}} />
          <TextInput placeholder='search' style={{ fontSize: 20, paddingLeft: 10 }} />
        </View>
        <CatogoryList />
      
        <View>
          <FlatList
          data={hotels} 
          horizontal
          contentContainerStyle={{paddingHorizontal:30,paddingLeft:20,paddingRight:20 }} 
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=><Card hotel={item}index={index}/>}
          // snapToInterval={cardWidth}
          />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
          <Text style={{fontWeight:'bold',color:COLORS.grey}}>Top hotels</Text>
          <Text style={{fontWeight:'bold',color:COLORS.grey}}>show All</Text>
        </View>
        <FlatList
        data={hotels}
        showsHorizontalScrollIndicator={false}
         horizontal
         contentContainerStyle={{paddingLeft:20,marginTop:20,paddingBottom:30,}}
         renderItem={({item,index})=><TopHotelsCard hotel={item}/>}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    flexDirection: 'row',
    width:cardWidth-290
  },
  catogoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30

  },
  catogoryListText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  card:{
    height:250,
    width:cardWidth,
    elevation:15,
    marginRight:20,
    borderRadius:15,
    backgroundColor:COLORS.grey,
    marginTop:20
  },
  image:{
    height:200,
    width:'100%',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
  },
  priceTag:{
height:60,
width:80,
backgroundColor:COLORS.primary,
position:'absolute',
zIndex:1,
right:0,
borderTopRightRadius:15,
borderBottomLeftRadius:15,
justifyContent:'center',
alignItems:'center'
  },
  cardDetails:{
    height:100,
    borderRadius:15,
    backgroundColor:COLORS.white,
    position:'absolute',
    bottom:0,
    padding:20,
    width:'100%'
  },
  topHotelsCard:{
    height:120,
    width:120,
    backgroundColor:COLORS.white,
    elevation:15,
    marginHorizontal:10,
    borderRadius:10,
    alignItems:'center',
    marginTop:20
    
  },
tophotelImage:{
height:80,
width:'100%',
borderTopRightRadius:10,

  }

})

export default HomeScreen;
