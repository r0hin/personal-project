import React, { Component, Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Post } from '../../../Theme/Types'
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

export interface TabHomeProps {
  colors: any,
  posts: Post[],
  setPosts: Dispatch<SetStateAction<Post[]>>,
}
 
export interface TabHomeState {
  opacity: Animated.Value,
}

class TabHome extends Component<TabHomeProps, TabHomeState> {
  state: TabHomeState

  constructor(props: TabHomeProps) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    }
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
      <Animated.View {...this.props} style={[ { opacity: this.state.opacity, transform: [ { scale: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1], }) }, ], }, ]} >
        <Text style={[styles.title, {color: colors.text}]}>Home</Text>

        {this.props.posts.map(station => {
          return (
          <View key={station.call}> 
            <Text>{station.frequency}</Text>
          </View> 
          )
        })} 
      </Animated.View>
    );
  }
}

export default TabHome