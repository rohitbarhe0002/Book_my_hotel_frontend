import { View, Text,SafeAreaView ,  StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';




const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={style.profileContainer}>
    <View style={style.header}>
        <Icon name='arrow-back-ios' size={30} color={COLORS.grey} onPress={()=>navigation.goBack()}/>
    
    </View>
    </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      
      },
      profileContainer:{
          height:350,
          backgroundColor:'grey',
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20
      }
})

export default ProfileScreen