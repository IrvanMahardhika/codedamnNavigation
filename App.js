import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerSidebar } from 'react-navigation-drawer';

import Home from '@components/home';
import Dashboard from '@components/dashboard';
import Sidebar from '@components/sidebar';

const Appstack = createAppContainer(createDrawerNavigator({
    home: {
        screen: Home
    },
    dashboard: {
        screen: Dashboard
    }
}, {
    contentComponent: ({navigation}) => <Sidebar navigation={navigation} />,
    initialRouteName: 'dashboard'
}));

const App = () => {
    return (
        <Appstack />
    );
};

export default App;

