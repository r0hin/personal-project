import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

export interface TabExploreProps {
  colors: any,
  shown: boolean,
}
 
class TabExplore extends Component<TabExploreProps> {
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
    })
    const colors = this.props.colors

    return (
      <View style={{display: this.props.shown ? 'flex' : 'none'}}>
        <Animated.View {...this.props} style={[ { opacity: this.state.opacity, transform: [ { scale: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1], }) }, ], }, ]} >
          <Text style={[styles.title, {color: colors.text}]}>Explore</Text>
        </Animated.View>
      </View>
    );
  }
}

export default TabExplore