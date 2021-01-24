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

import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'
const user = firebase.auth().currentUser
const db = firebase.firestore()
import Unverified from '../auth/Unverified';
import CompleteProfile from '../auth/completeProfile';

export default function Home() {

  const [profileComplete, setProfileComplete] = useState(false);
  const {colors} = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [emailVerify, setEmailVerify] = useState(firebase.auth().currentUser?.emailVerified);


  useEffect(() => {
    if (firebase.auth().currentUser !== null) {
      if (firebase.auth().currentUser?.displayName) {
        setIsLoading(false)
        setProfileComplete(true)
      }
      else {
        setIsLoading(false)
        setProfileComplete(false)
      }
      console.log('New Firebase Request');
      // console.trace('New Firebase Request!')
    }
    else {
      console.log('Exuse me?????? home but not signed in');
    }
  })
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

  if (isLoading) {
    return (
      <Text style={{color: colors.text}}>Still Loading...</Text>
    )
  }
  else {
    return (
      <View style={{height: '100%'}} >
        {emailVerify ?
        // is the profile complete?
        <View style={{height: '100%'}} >
          {profileComplete ? 
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
          </View> :
          <CompleteProfile modifyFunction={setProfileComplete} colors={colors} />
          }
        </View>
        :
        <Unverified modifyFunction={setEmailVerify} colors={colors}/>
      }
      </View>
    )
  }
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