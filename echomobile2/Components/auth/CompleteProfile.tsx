import React, { Component, Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text, Animated} from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Feather } from '@expo/vector-icons';
import { Button, Dialog, Paragraph, Portal, TextInput } from 'react-native-paper';
import {logout} from './Firebase';

import * as firebase from 'firebase';
import 'firebase/auth';
const auth = firebase.auth()

export interface CompleteProfileProps {
  colors: any,
  modifyFunction: Dispatch<SetStateAction<boolean>>,
}
 
class CompleteProfile extends Component<CompleteProfileProps> {

  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const styles = StyleSheet.create({
      title: {
        marginTop: 12,
        fontSize: 26,
        fontFamily: 'Ubuntu_700Bold',
      },
      subtitle: {

      },
      container: {
        padding: 36,
        paddingTop: 58,
        textAlign: 'center',
      },
      container2: {
        padding: 36,
        textAlign: 'center',
      },
      field: {
        marginTop: 8,
      }
    })
    const colors = this.props.colors

    const fakecomplete = () => {
      this.props.modifyFunction(true)
    }

    return (
      <Animated.View {...this.props} style={[ { opacity: this.state.opacity, transform: [ { scale: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1], }) }, ], }, ]} >
        <View style={styles.container}>
          <Feather name="plus-square" size={32} color={colors.text} />
          <Text style={[styles.title, {color: colors.text}]}>Complete Your Profile</Text>
          {/* <TextInput label="Email" value={text} onChangeText={text => setText(text)}/> */}
          {/* <Button onPress={logout} mode="outlined">Sign Out</Button> */}
          <Button onPress={fakecomplete} mode="text">Fake Complete Profile</Button>
        </View>
      </Animated.View>
    );
  }
}

export default CompleteProfile