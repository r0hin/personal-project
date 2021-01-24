import React from "react";
import { StyleProp, ViewStyle, ImageRequireSource, TouchableWithoutFeedback, View, Text, Image, StyleSheet, Animated } from "react-native";
import { useSpring } from './useSpring';
import { DiagonalTransition } from './diagonalTransition'

const activeColor = "rgb(30, 30, 110)";
const inactiveColor = "rgba(30, 30, 110, 0.4)";

export interface TabItemProps {
  style?: StyleProp<ViewStyle>;
  icon: JSX.Element;
  label: string;
  active: boolean;
  onPress: () => void;
}

export const TabItem: React.FC<TabItemProps> = ({ style, icon, label, active, onPress }) => {
  const animation = useSpring({ to: active ? 1 : 0 }, { stiffness: 50 });
  const dotScale = animation;
  const iconTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [0, -30] });
  const labelTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [20, 0] });
  const iconVisibility = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const labelVisibility = animation;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.centered, { transform: [{ translateY: labelTranslate }] }]}>
          <DiagonalTransition visibility={labelVisibility}>
            <Text style={styles.label}>{label}</Text>
          </DiagonalTransition>
        </Animated.View>
        <Animated.View style={[styles.centered, { transform: [{ translateY: iconTranslate }] }]}>
          <DiagonalTransition visibility={iconVisibility}>
            {icon}
          </DiagonalTransition>
        </Animated.View>
        <Animated.View style={[styles.dot, { transform: [{ scale: dotScale }] }]} />
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
    color: activeColor,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  dot: {
    position: "absolute",
    bottom: 8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: activeColor,
  },
});