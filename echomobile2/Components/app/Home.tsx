import React, { useEffect, useState } from 'react'
import { View, Image, Text, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { Feather } from '@expo/vector-icons';
import { Button, TextInput } from 'react-native-paper';
import { AppLoading, Font } from 'expo'


import {TabBar} from './navigation/tabBar'
import { logout } from '../auth/Firebase';
import { ScrollView } from 'react-native-gesture-handler';

import TabHome from './screens/TabHome'
import TabExplore from './screens/TabExplore'
import TabInbox from './screens/TabInbox'
import TabAccount from './screens/TabAccount'

export default function Home() {

  const [remountCount, setRemountCount] = useState(0);
  const refresh = () => setRemountCount(remountCount + 1);
  const {colors} = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  // useEffect(() => {
  //   setActiveTab(0)
  // },)

  const tabItems = [{
    icon: <Feather name="home" size={24} color={colors.text} />,
    label: 'Home',
    active: true,
  }, 
  {
    icon: <Feather name="compass" size={24} color={colors.text} />,
    label: 'Explore',
  },
  {
    icon: <Feather name="inbox" size={24} color={colors.text} />,
    label: 'Inbox',
  },
  {
    icon: <Feather name="user" size={24} color={colors.text} />,
    label: 'Account',
  }]

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        { activeTab === 0 && 
          <TabHome colors={colors}/>
        }
        { activeTab === 1 && 
          <TabExplore colors={colors} />
        }
        { activeTab === 2 && 
          <TabInbox colors={colors} />
        }
        { activeTab === 3 && 
          <TabAccount colors={colors} />
        }
      </ScrollView>
      <TabBar style={styles.tabBar} items={tabItems} modifyFunction={setActiveTab}></TabBar>
      <View style={[styles.bottomBar, {
        // @ts-ignore (Theme)
        backgroundColor: colors.background2}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    // To allow for the bar to return to home on IOS
    
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'red',
    shadowOpacity: 1.0,
    
    height: 40,
  },
  tabBar: {
    borderBottomWidth: 0,
  }
});