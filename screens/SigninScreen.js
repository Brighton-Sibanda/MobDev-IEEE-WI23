import React, {useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
    const navigation = useNavigation(); 
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);

    // PLACEHOLDER FUNCTION FOR TOUCHABLE OPACITY 1
    const [count, setCount] = useState(0);
    const incrementCount = () => {
    setCount(count + 1);}; //
    
    // PLACEHOLDER FUNCTION FOR TEXT INPUT
    const [text1, onChangeText1] = React.useState('');
    const [text2, onChangeText2] = React.useState('');

  return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "padding">
          <View>
            <Text style={styles.titletext}>Table It</Text>
                <View style={styles.logorectangle}>
                </View>
          
            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText1(text)}
                placeholder="email"
                value={text1}
                style={styles.textinput1}
                width={300}
                />
            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText2(text)}
                placeholder="password"
                value={text2}
                style={styles.textinput2}
                width={300}
                 />

            <Pressable 
                style = {({ pressed }) => [
                    styles.signincontainer,
                    pressed && {opacity: 0.5 },
                ]}
                onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signintext}>Sign In</Text>
            </Pressable>

            <TouchableOpacity
                style={styles.signupcontainer}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signuptext}>Sign Up</Text></TouchableOpacity>
            
            <Text style={styles.emailtext}>Email </Text>

            <Text style={styles.passwordtext}>Password </Text>

          
            <TouchableOpacity 
                style={styles.loginbutton}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.logintext}>Login</Text></TouchableOpacity>

            <Image style={styles.tableitlogo}
               resizeMode="contain" 
               source={require('../tableitlogo1.png')}>
               </Image>
          </View>
          
        </KeyboardAvoidingView>
    )
}

export default SigninScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
      
    logorectangle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: 300,
        left: -200,
        top: -450,
        backgroundColor: '#e5d2ba',
        opacity: 0.3
    },
    
    titletext: {
        position: 'absolute',
        width: 315,
        height: 150,
        top: -375,
        left: -160,
        fontSize: 64,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },

      signincontainer: {
        position: 'absolute',
        width: '50.5%',
        height: 80,
        right: 0,
        top: -150,
        backgroundColor: '#0000001a',
      },

      signupcontainer: {
        position: 'absolute',
        width: '50.5%',
        height: 80,
        left: 0,
        top: -150,
        backgroundColor: '#0000001a',
      },

      signintext: {
        width: '50%',
        top: "30%",
        height: 150,
        fontSize: 25,
        left: "25%", 
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },

      signuptext: {
        width: '52%',
        top: '30%',
        //height: 150,
        fontSize: 25,
        left: "25%", 
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },

      emailtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 24,
        paddingRight: "58%",
        fontWeight: 'bold',
        paddingBottom: 20,
        left: -165,
        bottom: -20
      },

      passwordtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 24,
        bottom: -145,
        paddingRight: "45%",
        fontWeight: 'bold',
        left:-165
      },

      loginbutton: {
        position: 'absolute',
        width: 320,
        height: 75,
        bottom: -360,
        backgroundColor: '#e5d2ba52',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30,
        left: -165
      },

      scroll: {
        flex: 1,
        paddingHorizontal: 20,
      },

      logintext: {
        width: '52%',
        top: '20%',
        left: '20%',
        height: 150,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },

      textinput1: {
          position: 'absolute',
          bottom: -60,
          borderColor: '#000000',
          borderWidth: 1,
          padding: 10,
          left: -165
      },

      textinput2: {
        position: 'absolute',
        bottom: -205,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
        left: -165
      },

      tableitlogo: {
          flex: 1,
          bottom: 180,
          right: -50,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          height: 105,
          width: 105,
      }

})

