import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,div } from 'react-native'

const HomeScreen = () => {

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
        <Text style={styles.welcomeMessage}>Welcome, Jane!</Text>
        <Text style= {styles.dashboardTitle}>Your Dashboard</Text>
        <Text style= {styles.dateHere}>{currentDate}</Text>
        <TouchableOpacity 
            style={styles.notificationStatusButton}
            onPress={incrementCount}
            activeOpacity={0.8}>
            <Text></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.instagramHomeContainer}>
        <Image style={styles.instagramHome}
               resizeMode="contain" 
               source={require('../Instagram_logo.png')}>
               </Image>
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    //justifyContent: 'flex-end',
    paddingTop: 50,
    paddingLeft: 25,
    marginTop: 0,
  },

  welcomeMessage: {
    fontSize: 21,
    //fontWeight: 'bold',
    marginBottom: 10,
    //color: '#C3B091',
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
  },

  instagramHomeContainer: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 20,
    width: 350,
    height: 2000,
    color: 'blue',
    backgroundColor: '#F3E7E4',
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 25,
  },

  instagramHome: {
    flex: 1,
    position: 'absolute',
    top: '50%',
    left: '10%',
    width: 20,
    height: 20,
    //marginTop: -100,
    //marginLeft: -100,
  },
})
