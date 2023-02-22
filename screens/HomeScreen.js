import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button title="Button 1" />
                <Button title="Button 2" />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})
