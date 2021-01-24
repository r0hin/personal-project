import React, { useState } from 'react'
import { View, Image, Text, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { Feather } from '@expo/vector-icons';
import { Button, TextInput } from 'react-native-paper';

import {TabBar} from './navigation/tabBar'
import { logout } from '../auth/Firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
  const {colors} = useTheme();
  const tabItems = [{
    icon: <Feather name="home" size={24} color="black" />,
    label: 'hi',
  }, {
    icon: <Feather name="home" size={24} color="black" />,
    label: 'hi',
  }]

  return (
    
    <View style={{flex: 1}}>
      <ScrollView></ScrollView>
      <TabBar style={styles.tabBar} items={tabItems}></TabBar>
      <View style={styles.bottomBar}></View>
    </View>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text style={[styles.or, {color: colors.text}]}>Sup</Text>
    //   <Button onPress={logout} mode="outlined">Sign Out</Button>
    // </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    // To allow for the bar to return to home on IOS
    
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'red',
    shadowOpacity: 1.0,
    
    height: 40,
    
    backgroundColor: 'white',
  },
  tabBar: {
    borderBottomWidth: 0,
  }
});