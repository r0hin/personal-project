import React from "react";
import { View, Text, Button } from "react-native";

export default function TabExplore({navigation}: {navigation: any}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}