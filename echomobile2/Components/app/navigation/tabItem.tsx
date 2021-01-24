import React from "react";
import { StyleProp, ViewStyle, TouchableWithoutFeedback, View, Text, StyleSheet, Animated } from "react-native";
import { useSpring } from './useSpring';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { DiagonalTransition } from './diagonalTransition'
import { useTheme } from "@react-navigation/native";

const inactiveColor = "rgba(30, 30, 110, 0.4)";

export interface TabItemProps {
  style?: StyleProp<ViewStyle>;
  icon: JSX.Element;
  label: string;
  active: boolean;
  onPress: () => void;
}

export const TabItem: React.FC<TabItemProps> = ({ style, icon, label, active, onPress }) => {
  const {colors} = useTheme();
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
  });
  
  const animation = useSpring({ to: active ? 1 : 0 }, { stiffness: 50 });
  const dotScale = animation;
  const iconTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [0, -30] });
  const labelTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [20, 0] });
  const iconVisibility = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const opacityTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const labelVisibility = animation;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.centered, { transform: [{ translateY: labelTranslate }] }]}>
          <DiagonalTransition visibility={labelVisibility}>
            <Text style={[styles.label, {color: colors.text}]}>{label}</Text>
          </DiagonalTransition>
        </Animated.View>
        <Animated.View style={[styles.centered, {opacity: opacityTranslate}, { transform: [{ translateY: iconTranslate}] }]}>
          <DiagonalTransition visibility={iconVisibility}>
            {icon}
          </DiagonalTransition>
        </Animated.View>
        <Animated.View style={[styles.dot, {backgroundColor: colors.text, transform: [{ scale: dotScale }] }]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  centered: {
    position: "absolute",
  },
  icon: {
    tintColor: inactiveColor,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: 'Ubuntu_400Regular',
    letterSpacing: -0.2,
  },
  dot: {
    position: "absolute",
    bottom: 8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
});