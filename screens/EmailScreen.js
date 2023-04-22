import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,div, ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'; // here

const AppScreen = () => {
  const navigation = useNavigation(); // here 
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);

    // PLACEHOLDER FUNCTION FOR TOUCHABLE OPACITY 1
    const [count, setCount] = useState(0);
    const incrementCount = () => {
    setCount(count + 1);}; //

  return (

    <View style={styles.mainContainer}>

      <View style={styles.titleContainer}>
      <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate('Home')} // here
            activeOpacity={0.8}/>
      <TouchableOpacity 
            style={styles.menuButton}
            onPress={incrementCount}
            activeOpacity={0.8}/>
      <TouchableOpacity 
            style={styles.menuButton}
            onPress={incrementCount}
            activeOpacity={0.8}/>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} >
            <Text style={styles.dashMessage}>Dashboard</Text></TouchableOpacity>
        <Text style= {styles.pageTitle}>Email</Text>
      </View>
      <View style={styles.dashboardHomeContainer}> 
        <TouchableOpacity style={styles.appDashViewem}><Image style={styles.emailHome}
               resizeMode="contain" 
               source={require('../gmail.png')}>
               </Image></TouchableOpacity>

<ScrollView style={{height: 300, width: 600, marginLeft: 300}}>
      <View style={{width: 300, marginBottom: 10}}><Text>3:39am</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>Purdue University {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"Consider applying to our program..."</Text>
      </TouchableOpacity>
      <View style={{width: 300, marginBottom: 10}}><Text>8:26am</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>Hannah {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"The deadline to apply is approchi..."</Text>
      </TouchableOpacity>
      <View style={{width: 300, marginBottom: 10}}><Text>8:50am</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>McCormick CS Bulletin {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"Northwestern Seminar next week.."</Text>
      </TouchableOpacity>
      <View style={{width: 300, marginBottom: 10}}><Text>9:03am</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>Sarah Sood {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"Hey Omar! i'm excited to learn that..."</Text>
      </TouchableOpacity>
      <View style={{width: 300, marginBottom: 10}}><Text>9:10am</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>Victor Scarz {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"Update on your recent interview..."</Text>
      </TouchableOpacity>
      <View style={{width: 300, marginBottom: 10}}><Text>3:10pm</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>Reece James {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"Hey, Just checking in after our recent..."</Text>
      </TouchableOpacity>
      <View style={{width: 300, marginBottom: 10}}><Text>4:50pm</Text></View>
      <TouchableOpacity style={styles.previewMsg}>
           <Text style={{paddingLeft: 10 }}>Sara N {"\n"} </Text>
           <Text style={{paddingLeft: 10 }}>"Omar, do you by any chance..."</Text>
      </TouchableOpacity>

      </ScrollView>

      </View>
      
    </View>
  )
}

export default AppScreen

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: 'grey',
    width: 20,
    height: 2,
    paddingBottom: 5,
    justifyContent: 'right',
    marginLeft: 330,
    marginBottom: 4,
  },

  titleContainer: {
    alignItems: 'flex-start',
    paddingTop: 80,
    paddingLeft: 25,
  },

  dashMessage: {
    fontSize: 21,
    marginBottom: 10,
    color: 'grey',
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 70,
  },

 dashboardHomeContainer: {
    flex: 1,
    alignItems: 'center',
    width: 350,
    height: 2500,
    color: 'blue',
    backgroundColor: '#F3E7E4',
    marginLeft: 20,
    marginBottom: 50,
    borderRadius: 25,
  },
  emailHome: {
    flex: 1,
    position: 'absolute',
    width:'100%',
    height: '100%',
  },
  appDashViewem:{
    marginTop: -25,
    backgroundColor: '#F3E7E4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 80,
    marginBottom: 30,
    
  },
  previewMsg:{
       backgroundColor: 'white',
       width: 300,
       height: 50,
       borderRadius: 15,
       fontSize: 15,
       marginBottom: 10,

  },
})
