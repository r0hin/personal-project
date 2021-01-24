import { useTheme } from "@react-navigation/native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleProp, ViewStyle, ImageRequireSource, View, StyleSheet } from "react-native";
import { TabItem } from './tabItem';

export interface TabBarProps {
  style?: StyleProp<ViewStyle>;
  items: { icon: JSX.Element; label: string}[];
  modifyFunction: (Dispatch<SetStateAction<number>>);
}

export const TabBar: React.FC<TabBarProps> = ({ style, items, modifyFunction }) => {
  const {colors} = useTheme();
  
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    //@ts-ignore (Theme)
    <View style={[styles.bar, style, {backgroundColor: colors.background2}]}>
      {items.map((it, index) => (
        <TabItem
          key={index}
          style={styles.item}
          icon={it.icon}
          label={it.label}
          active={index === activeIndex}
          onPress={() => {setActiveIndex(index); modifyFunction(index)}}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    height: 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  item: {
    flex: 1,
  },
});