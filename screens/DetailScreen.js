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
        <TouchableOpacity onPress={() => navigation.navigate("Email")} >
            <Text style={styles.dashMessage}>Back</Text></TouchableOpacity>
        <Text style= {styles.pageTitle}>Purdue</Text>
      </View>
      <View style={styles.dashboardHomeContainer}> 
        <TouchableOpacity style={styles.appDashViewem}><Image style={styles.emailHome}
               resizeMode="contain" 
               source={require('../gmail.png')}>
               </Image></TouchableOpacity>

<ScrollView style={{height: 300, width: 600, marginLeft: 300}}>
      <Text style={{fontWeight:'bold'}}>Purdue University Admissions {"\n"}{"\n"}</Text>
      <Text>
        Hi Omar,{"\n"}{"\n"}

        Applications for fall 2023 admissions are {"\n"}live! You are invited to apply to one 
        of our Masters{"\n"} Programs. 
        We have chosen you based on your {"\n"}academic
         merits and we think you're a perfect{"\n"} candidate.{"\n"}

         {"\n"}Looking forward to receiving your application.{"\n"}{"\n"}{"\n"}

        Purdue University Masters Programe{"\n"}
        Computer Science Department{"\n"}
        1345 Tork Street{"\n"}
        West Lafayette
        Indiana
      </Text>
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
