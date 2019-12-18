import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import styles from './styles';

const Home = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { parent, heading, input } = styles;

    const checkLogin = () => {
        fetch('http://localhost:1111', { method: 'POST', body: JSON.stringify({ username, password }) })
            .then(res => {
                return res.text();
            })
            .then(res => {
                if (res === '1') {
                    props.navigation.navigate('dashboard');
                } else {
                    Alert.alert('Error', 'Username/Password missmatch', [{ text: 'Okay' }]);
                }
            });
    };

    return (
        <View style={parent} >
            <Text style={heading} >Login</Text>
            <TextInput style={input} placeholder="Username" onChangeText={setUsername} autoCapitalize='none' />
            <TextInput style={input} placeholder="Password" onChangeText={setPassword} secureTextEntry={true} />
            <Button title="Login" onPress={checkLogin} />
        </View>
    );
};

export default Home;