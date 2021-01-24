import React, { useState } from 'react'
import { View, Image, Text, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { Button, TextInput } from 'react-native-paper';
import { logout } from '../auth/Firebase';

export default function Landing() {
  const {colors} = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[styles.or, {color: colors.text}]}>Sup</Text>
      <Button onPress={logout} mode="outlined">Sign Out</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  or: {
    fontFamily: 'Ubuntu_400Regular',
  }
});