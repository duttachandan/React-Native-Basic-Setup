import { StyleSheet, Text, View, Button } from 'react-native'; // Import Button
import React from 'react';

const Login = (props) => {
    return (
        <View style={styles.container}>  
            <Text style={styles.text}>Login Page</Text>  
            {/* Correct use of Button with 'title' prop */}
            <Button 
                title="Go to Home"  // Add 'title' for the button's text
                color="blue"  // Use color prop for button color
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
