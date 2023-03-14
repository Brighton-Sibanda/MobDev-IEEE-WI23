import React, {useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable} from 'react-native'
// import {Routes, Route, useNavigate} from 'react-router-dom'

const SigninScreen = () => {
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
    const [value, onChangeText] = React.useState('');

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `./screens/SignupScreen`; 
    navigate(path);
  }


  return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "padding">
            <View style = {styles.container}>
                <Text style={styles.titletext}>Table It</Text>
                <View style={styles.logorectangle}>
                </View>
            </View>

            <Pressable 
                style = {({ pressed }) => [
                    styles.signincontainer,
                    pressed && {opacity: 0.5 },
                ]}
                onPress={incrementCount}>
                <Text style={styles.signintext}>Sign In</Text>
            </Pressable>

            {/* <Button color="primary" className="px-4" */}
            <Pressable
                style = {({ pressed }) => [
                    styles.signupcontainer,
                    pressed && {opacity: 0.5 },
                ]}
                onPress={incrementCount}>
                <Text style={styles.signuptext}>Sign Up</Text>

            {/* //     onClick={routeChange}
            //     >
            //     Sign Up
            // </Button>  */}
            </Pressable>
            
            <Text style={styles.emailtext}>Email </Text>

            <Text style={styles.passwordtext}>Password </Text>

            <View
                style={{
                    position: 'absolute',
                    bottom: 375,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={300}
                />
            </View>

            <View
                style={{
                    position: 'absolute',
                    bottom: 230,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={300}
                />
            </View>

            <Pressable 
                style = {({ pressed }) => [
                    styles.loginbutton,
                    pressed && {opacity: 0.5 },
                ]}
                onPress={incrementCount}>
                <Text style={styles.signintext}>Sign In</Text>
            </Pressable>

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
        position: 'absolute',
        width: '100%',
        height: 300,
        top: 0,
        backgroundColor: '#e5d2ba',
        opacity: 0.3
    },
    
    titletext: {
        position: 'absolute',
        width: 315,
        height: 150,
        top: 100,
        // fontFamily: 'Lexend',
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
        left: 0,
        top: 300,
        backgroundColor: '#0000001a',
      },

      signupcontainer: {
        position: 'absolute',
        width: '50.5%',
        height: 80,
        right: 0,
        top: 300,
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
        top: "30%",
        height: 150,
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
      },

      passwordtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 24,
        bottom: 290,
        paddingRight: "45%",
        fontWeight: 'bold',
      },

      loginbutton: {
        position: 'absolute',
        width: 320,
        height: 75,
        bottom: 75,
        backgroundColor: '#e5d2ba52',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30
      }
})

