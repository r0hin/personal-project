import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, Button } from "react-native";
import { useTheme } from "@react-navigation/native";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

import Post from "../elements/Post";
const db = firebase.firestore();

export default function TabHome({navigation}: {navigation: any}) {
  const {colors} = useTheme();

  const [posts, setPosts] = useState<any[] | []>([]);
  useEffect(() => {
    // Grab posts
    console.log('Status: Home loaded - grabbing posts.');
    setPosts([{"caption":"testing relevant posts!","comments":1,"file_name":"Screen Shot 2019-12-14 at 12.18.16 AM1598420723498.png","file_url":"https://firebasestorage.googleapis.com/v0/b/eongram-87169.appspot.com/o/users%2FL5NjKTveedYfrw8JK9AjThahsT13%2FScreen%20Shot%202019-12-14%20at%2012.18.16%20AM1598420723498.png?alt=media&token=034d0e75-1039-4d66-ac57-453ff66fb8d7","latest_comment":"null","latest_comment_content":"#nofilter #justwokeup","latest_comment_name":"Rohin","latest_comment_photo":"https://firebasestorage.googleapis.com/v0/b/eongram-87169.appspot.com/o/logos%2Fflash%20centered.png?alt=media&token=52bc8c63-8cf5-4a7b-815d-40d46dc81da3","latest_comment_uid":"L5NjKTveedYfrw8JK9AjThahsT13","likes":4,"name":"Rohin","photo_url":"https://firebasestorage.googleapis.com/v0/b/eongram-87169.appspot.com/o/logos%2Fflash%20centered.png?alt=media&token=52bc8c63-8cf5-4a7b-815d-40d46dc81da3","private":true,"report_weight":0,"reported":false,"status":true,"tags":["happy birthday to the ground"],"timestamp":{"seconds":1598420726,"nanoseconds":20000000},"uid":"L5NjKTveedYfrw8JK9AjThahsT13","username":"rohin","id":"bbDh28Lha3mOLIH7koCs"},{"comments":0,"file":"echo-home-text_post","file_url":"echo-home-text_post","latest_comment":"null","latest_comment_photo":"null","likes":1,"name":"Rohin","photo_url":"https://firebasestorage.googleapis.com/v0/b/eongram-87169.appspot.com/o/logos%2Fflash%20centered.png?alt=media&token=52bc8c63-8cf5-4a7b-815d-40d46dc81da3","private":false,"report_weight":0,"reported":false,"status":false,"tags":[],"timestamp":{"seconds":1601274391,"nanoseconds":962000000},"uid":"L5NjKTveedYfrw8JK9AjThahsT13","url_content":"another post","url_theme":"light","username":"rohin","id":"DHFEHuNOiaLzuZqhx6XI"},{"comments":1,"file":"echo-home-text_post","file_url":"echo-home-text_post","latest_comment":"null","latest_comment_content":"DJ KHALED","latest_comment_name":"Amr","latest_comment_photo":"https://firebasestorage.googleapis.com/v0/b/eongram-87169.appspot.com/o/logos%2FmnGe9H9PNgWMA8zL1GwynZYfYzH3.png?alt=media","latest_comment_uid":"mnGe9H9PNgWMA8zL1GwynZYfYzH3","likes":1,"name":"Rohin","photo_url":"https://firebasestorage.googleapis.com/v0/b/eongram-87169.appspot.com/o/logos%2Fflash%20centered.png?alt=media&token=52bc8c63-8cf5-4a7b-815d-40d46dc81da3","private":false,"report_weight":0,"reported":false,"status":false,"tags":[],"timestamp":{"seconds":1601274403,"nanoseconds":524000000},"uid":"L5NjKTveedYfrw8JK9AjThahsT13","url_content":"wow anothe rone","url_theme":"deep","username":"rohin","id":"jnF4b7zSjoBt9YFdgzoW"}])    
    return;
    db.collection('timelines').doc(firebase.auth().currentUser?.uid).collection('posts').limit(5).orderBy('timestamp', 'asc').get().then(async (postsDocs) => {
      const posts: any[] = [];
      for (let i = 0; i < postsDocs.docs.length; i++) {
        const post = await db.collection('new_posts').doc(postsDocs.docs[i].id).get()
        if (!post.exists) {
          continue;
        }
        posts.push(post.data())
        posts[posts.length - 1 ].id = post.id
      }
      setPosts(posts)
    })
  }, []);

  return (
    <ScrollView>
      <Text style={{color: colors.text}}>Home screen</Text>


      {
        (posts as any[]).map((item,i) => <Post data={item} key={item.id}/>)
      }



      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </ScrollView>
  );
}