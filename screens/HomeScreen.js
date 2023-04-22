import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,div } from 'react-native'
import {useNavigation} from '@react-navigation/native'; // here

const HomeScreen = () => {
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
            //onPress={() => navigation.navigate('App')} // here
            activeOpacity={0.8}/>
      <TouchableOpacity 
            style={styles.menuButton}
            onPress={incrementCount}
            activeOpacity={0.8}/>
      <TouchableOpacity 
            style={styles.menuButton}
            onPress={incrementCount}
            activeOpacity={0.8}/>
        <Text style={styles.welcomeMessage}>Welcome, Omar!</Text>
        <Text style= {styles.dashboardTitle}>Your Dashboard</Text>
        <Text style= {styles.dateHere}>{currentDate}</Text>
        <TouchableOpacity 
            style={styles.notificationStatusButton}
            onPress={incrementCount}
            activeOpacity={0.8}>
            <Text style={styles.notifyText}>15 Notifications</Text>
        </TouchableOpacity>
        <Text style={styles.notificationText}>Today's Notifications</Text>
      </View>
      <View style={styles.dashboardHomeContainer}> 
        <TouchableOpacity style={styles.appDashViewig}><Image style={styles.instagramHome}
               resizeMode="contain" 
               source={require('../Instagram_logo.png')}>
               </Image></TouchableOpacity>
        <TouchableOpacity style={styles.appDashViewem} onPress={() => navigation.navigate('App')}><Image style={styles.emailHome}
               resizeMode="contain" 
               source={require('../gmail.png')}>
               </Image></TouchableOpacity>
        <TouchableOpacity style={styles.appDashViewms}><Image style={styles.messageHome}
               resizeMode="contain" 
               source={require('../messages_logo.png')}>
               </Image></TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

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
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingLeft: 25,
    marginTop: 0,
    paddingBottom:10
  },

  welcomeMessage: {
    fontSize: 21,
    marginBottom: 10,
    color: 'grey',
  },

  dashboardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 23,
  },

  dateHere: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 70,
  },

  notificationStatusButton:{
    color: "#D0BCB8",
    paddingLeft: 3,
    width: 120,
    height: 100,
    backgroundColor: '#F3E7E4',
    borderRadius: 10,
    marginVertical: 10,
    width: 340,
    borderRadius: 25,
    paddingBottom: 25,
    alignItems: 'center',
  },
  notificationText:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    fontSize: 19,
    paddingTop: 25,
    paddingLeft: 80,
  },
  notifyText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 40,
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
  instagramHome: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  messageHome: {
    flex: 1,
    position: 'absolute',
    width:'100%',
    height: '100%',
  },
  emailHome: {
    flex: 1,
    position: 'absolute',
    width:'100%',
    height: '100%',
  },
  appDashViewem:{
    marginTop: 50,
    backgroundColor: '#F3E7E4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 80,
  },
  appDashViewig:{
    marginTop: 10,
    backgroundColor: '#F3E7E4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 80,
  },
  appDashViewms:{
    marginTop: 40,
    backgroundColor: '#F3E7E4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
  },
})
