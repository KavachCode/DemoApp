import React from "react";
import { View } from "react-native";
import { FontAwesome, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const BottomIcons: React.FC = () => {
  const iconSize = 20;
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === 'dark' ? "white" : "black";

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <FontAwesome name="heart-o" size={iconSize} color={iconColor} />
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <Feather name="send" size={iconSize} color={iconColor} />
    </View>
  );
};

export default BottomIcons;
