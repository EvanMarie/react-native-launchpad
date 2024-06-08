import React from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { buttonBg, buttonText, col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";

interface MyIconButtonProps {
  iconName: string;
  onPress?: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  padding?: number;
}

const MyIconButton: React.FC<MyIconButtonProps> = ({
  iconName,
  onPress,
  size = 33,
  color = buttonText,
  backgroundColor = buttonBg,
  padding = 8,
  style,
}) => {
  const styles = StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: padding,
      backgroundColor: backgroundColor,
      color: color,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        boxShadows.glowSm900,
        borders.borderSm500,
        styles.button,
        { borderRadius: 30 },
        style,
      ]}
    >
      <Ionicons size={size} style={{ color: color }} name={iconName as any} />
    </TouchableOpacity>
  );
};

export default MyIconButton;
