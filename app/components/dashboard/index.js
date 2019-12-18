import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import styles from './styles';

const Dashboard = props => {

    const { parent, text } = styles;

    return (
        <View style={parent} >
            <Text style={text} >Dashboard</Text>
        </View>
    );
};

export default Dashboard;