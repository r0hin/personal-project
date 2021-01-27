import React from 'react'
import { View, Text } from 'react-native'
import { Post } from '../../../Theme/Types'

// Post component will be full-width

export default function Post(props: Post) {
  return (
    <View>
      <Text>{props.id}</Text>  
    </View>
  )
}
