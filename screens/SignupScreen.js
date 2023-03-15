import React, {useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
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
    const [value, onChangeText] = React.useState('');


  return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "padding">
            <View style = {styles.container}>
                <Text style={styles.titletext}>Table It</Text>
                <View style={styles.logorectangle}>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.signincontainer}
                onPress={() => navigation.navigate('Signin')}/>
                <Text style={styles.signintext}>Sign In</Text>

            <Pressable 
                style = {({ pressed }) => [
                    styles.signupcontainer,
                    pressed && {opacity: 0.5 },
                ]}
                onPress={incrementCount}>
                <Text style={styles.signuptext}>Sign Up</Text>
            </Pressable>
            
            <Text style={styles.firstname}>First Name </Text>

            <View
                style={{
                    position: 'absolute',
                    top: 380,
                    left: 50,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={310}
                    height={30}
                />
            </View>

            <Text style={styles.lastname}>Last Name </Text>

            <View
                style={{
                    position: 'absolute',
                    top: 465,
                    left: 50,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={310}
                    height={30}
                />
            </View>

            <Text style={styles.emailtext}>Email </Text>

            <View
                style={{
                    position: 'absolute',
                    top: 545,
                    left: 50,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={310}
                    height={30}
                />
            </View>

            <Text style={styles.passwordtext}>Password </Text>

            <View
                style={{
                    position: 'absolute',
                    top: 630,
                    left: 50,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={310}
                    height={30}
                />
            </View>

            <Text style={styles.confirmpasswordtext}>Confirm Password </Text>
            
            <View
                style={{
                    position: 'absolute',
                    top: 715,
                    left: 50,
                    borderColor: '#000000',
                    borderWidth: 1,
                }}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{padding: 10}}
                    width={310}
                    height={30}
                />
            </View>

            <TouchableOpacity 
                style={styles.connectbutton}
                onPress={() => navigation.navigate('Home')}/>
                <Text style={styles.logintext}>Connect</Text>

        </KeyboardAvoidingView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
      
    logorectangle: {
        position: 'absolute',
        width: '100%',
        height: 250,
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
        top: 250,
        backgroundColor: '#0000001a',
      },

      signupcontainer: {
        position: 'absolute',
        width: '50.5%',
        height: 80,
        right: 0,
        top: 250,
        backgroundColor: '#0000001a',
      },

      signintext: {
        width: '50%',
        bottom: 320,
        right: '25%',
        height: 150,
        fontSize: 25,
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

      firstname: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 350,
        left: 50,
        fontWeight: 'bold',
      },

      lastname: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 435,
        left: 50,
        fontWeight: 'bold',
      },

      emailtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 515,
        left: 50,
        fontWeight: 'bold',
      },

      passwordtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 595,
        left: 50,
        fontWeight: 'bold',
      },

      confirmpasswordtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 680,
        left: 50,
        fontWeight: 'bold',
      },

      connectbutton: {
        position: 'absolute',
        width: 320,
        height: 70,
        bottom: 50,
        backgroundColor: '#e5d2ba52',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30
      },

      logintext: {
        width: '52%',
        top: '5%',
        height: 150,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },
})

