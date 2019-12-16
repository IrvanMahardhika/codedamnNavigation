import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './app/components/home';
import Dashboard from './app/components/dashboard';

export default createAppContainer(createStackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
          header: null
        }
    }
}));

