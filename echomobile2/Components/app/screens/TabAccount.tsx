import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import {logout} from '../../auth/Firebase'
import { Button } from 'react-native-paper';


export interface TabAccountProps {
  colors: any
}
 
class TabAccount extends Component<TabAccountProps> {
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
        padding: 36,
        paddingTop: 58,
        fontSize: 36,
        fontFamily: 'Ubuntu_700Bold',
      },
      signOutButton: {
        marginTop: 12,
      },
      container: {
        width: '100%',
        padding: 36,
        textAlign: 'center',
      }
    })
    const colors = this.props.colors

    return (
      <Animated.View {...this.props} style={[ { opacity: this.state.opacity, transform: [ { scale: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1], }) }, ], }, ]} >
        <Text style={[styles.title, {color: colors.text}]}>Account</Text>
        <View style={styles.container}>
          <Button style={styles.signOutButton} onPress={logout} mode="outlined">Sign Out</Button>
        </View>
      </Animated.View>
    );
  }
}

export default TabAccount