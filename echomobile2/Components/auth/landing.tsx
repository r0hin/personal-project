import React, { useState } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';

import { Button, TextInput, Portal, Dialog, Paragraph} from 'react-native-paper';

import * as firebase from 'firebase';
import 'firebase/auth';
const auth = firebase.auth();

export default function Landing() {
  const {colors} = useTheme();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState('')
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
  });


  async function login() {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      console.log('Probably signed in. No state changes though !');
    } catch (error) {
      setErrorText(error.message)
      showDialog()
    }
  }

  function signup() {
    showDialog()
    console.log(`signup with ${email} and ${password}`);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.image} source={colors.card === 'rgb(255, 255, 255)' ? require('../../assets/Light.png') : require('../../assets/Dark.png')}></Image>
      <br /><br />
      <TextInput mode='outlined' label="Email" value={email} onChangeText={text => setEmail(text)} />
      <br />
      <TextInput mode='outlined' secureTextEntry={true} label="Password" value={password} onChangeText={text => setPassword(text)} />
      <br /><br />
      <Button onPress={login} mode='contained'> Login </Button> 
      <br />
      <Text style={[styles.or, {color: colors.text}]}>- or -</Text>
      <br />
      <Button onPress={signup} mode='text'> Sign Up </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{errorText}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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