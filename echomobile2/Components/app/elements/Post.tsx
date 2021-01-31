import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

// Post component will be full-width

export default function Post(props: any) {
  return (
    <View style={styles.post}>
      <PostContent data={props.data} />
      <Text>{props.data.id}</Text>
    </View>
  )
}

function PostContent(props: any) {

  const [postImgWidth, setPostImgWidth] = useState(0)
  const [postImgHeight, setPostImgHeight] = useState(0)

  if (props.data.file_url == "echo-home-text_post") {
    return (
      <Text style={styles.caption}>{props.data.url_content}</Text>
    )
  }
  else {

    Image.getSize(props.data.file_url, (w, h) => {
      const screenWidth = Dimensions.get('window').width - 26 - 26
      const scaleFactor = w / screenWidth
      const imageHeight = h / scaleFactor
      setPostImgWidth(screenWidth);
      setPostImgHeight(imageHeight);
      console.log(h);
    })

    return (
      <View style={{position: 'relative'}}>
        <Image style={[styles.postImage, {height: postImgHeight, width: postImgWidth}]} resizeMode='contain' source={{uri: props.data.file_url}} />

        {/* Header */}
        <View style={styles.postHeader}></View>
        <Text style={styles.postCaption}>{props.data.caption}</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  post: {
    marginLeft: 26,
    marginRight: 26,
    margin: 8,
  },
  postImage: {
    width: '100%',
    borderRadius: 20,
    overflow: "hidden",

  },
  postHeader: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    padding: 14,
  },
  caption: {

  },
  postCaption: {

  },
})