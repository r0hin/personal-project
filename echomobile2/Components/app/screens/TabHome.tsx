import React, { Component, Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Post } from '../../../Theme/Types'
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

export interface TabHomeProps {
  colors: any,
  posts: Post[],
  setOwnMounted: Dispatch<SetStateAction<boolean>>,
  shown: boolean,
}
 
export interface TabHomeState {
  opacity: Animated.Value,
  posts: Post[],
  postUpdate: number,
  onFirst: boolean,
}

class TabHome extends Component<TabHomeProps, TabHomeState> {
  state: TabHomeState = {
    opacity: new Animated.Value(0),
    posts: [],
    postUpdate: 0,
    onFirst: true,
    
  }

  shouldComponentUpdate() {
    return true
  }

  componentDidUpdate(prevProps: any) {
    console.log(this.props);
  }

  componentDidMount() {
    if (this.state.onFirst) {

      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
  
      setTimeout(() => {
        this.setState({
          onFirst: false,
        })
      }, 200);

      this.props.setOwnMounted(true)
      console.log('Mount call.');
    }
    else {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).reset();
    }
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
        <Animated.View {...this.props} style={this.state.onFirst && [ { opacity: this.state.opacity, transform: [ { scale: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1], }) }, ], }, ]} >
          <Text style={[styles.title, {color: colors.text}]}>Home</Text>
        </Animated.View>

        {this.props.posts.map(post => {
          return (
          <View key={post.id}> 
            <Text>{post.caption}</Text>
          </View> 
          )
        })} 
      </View>
    );
  }
}

export default TabHome