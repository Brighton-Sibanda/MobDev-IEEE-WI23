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
    const [text3, onChangeText3] = React.useState('');
    const [text4, onChangeText4] = React.useState('');
    const [text5, onChangeText5] = React.useState('');
    const [text6, onChangeText6] = React.useState('');
    const [text7, onChangeText7] = React.useState('');


  return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "padding">
            <View>
                <Text style={styles.titletext}>Table It</Text>
                <View style={styles.logorectangle}>
                </View>

            <TouchableOpacity 
                style={styles.signincontainer}
                onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.signintext}>Sign In</Text></TouchableOpacity>

            <Pressable 
                style = {({ pressed }) => [
                    styles.signupcontainer,
                    pressed && {opacity: 0.5 },
                ]}
                onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signuptext}>Sign Up</Text>
            </Pressable>
            
            <Text style={styles.firstname}>First Name </Text>

            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText3(text)}
                placeholder="first name"
                value={text3}
                style={styles.textinput3}
                width={310}
                height={30}
                />

            <Text style={styles.lastname}>Last Name </Text>

            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText4(text)}
                placeholder="last name"
                value={text4}
                style={styles.textinput4}
                width={310}
                height={30}
                />

            <Text style={styles.emailtext}>Email </Text>

            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText5(text)}
                placeholder="email"
                value={text5}
                style={styles.textinput5}
                width={310}
                height={30}
                />

            <Text style={styles.passwordtext}>Password </Text>

            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText6(text)}
                placeholder="password"
                value={text6}
                style={styles.textinput6}
                width={310}
                height={30}
                />


            <TouchableOpacity 
                style={styles.connectbutton}
                onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.logintext}>Connect</Text></TouchableOpacity>
            </View>

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
        height: 300,
        backgroundColor: '#e5d2ba',
        opacity: 0.3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left: -200,
        top: -450,
    },
    
    titletext: {
        position: 'absolute',
        width: 315,
        height: 150,
        top: -325,
        left: -170,
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
        left: '25%',
        top: '30%',
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
        left: "20%", 
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },

      firstname: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: -50,
        left: -160,
        fontWeight: 'bold',
      },

      lastname: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 35,
        left: -160,
        fontWeight: 'bold',
      },

      emailtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 115,
        left: -160,
        fontWeight: 'bold',
      },

      passwordtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 195,
        left: -160,
        fontWeight: 'bold',
      },

      confirmpasswordtext: {
        position: 'absolute',
        flex: 1,
        fontSize: 20,
        top: 275,
        left: -160,
        fontWeight: 'bold',
      },

      connectbutton: {
        position: 'absolute',
        width: 320,
        height: 70,
        top: 300,
        left: -160,
        backgroundColor: '#e5d2ba52',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30
      },

      logintext: {
        width: '52%',
        top: '20%',
        left: '25%',
        height: 150,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
      },

      textinput3: {
        position: 'absolute',
        top: -20,
        left: -165,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10
      },

      textinput4: {
        position: 'absolute',
        top: 65,
        left: -165,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10
      },

      textinput5: {
        position: 'absolute',
        top: 145,
        left: -165,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10
      },

      textinput6: {
        position: 'absolute',
        top: 230,
        left: -165,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10
      },

      textinput7: {
        position: 'absolute',
        top: 310,
        left: -165,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10
      }


})

