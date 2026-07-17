import { Image } from "react-native";
import React from "react";
import Icon from "../assets/images/icon.png";

const ThemedLogo = ({ style, ...props }) => {
  return (
    <Image
      source={Icon}
      {...props}
      style={[{ width: 200, height: 200, resizeMode: "contain" }, style]}
    />
  );
};

export default ThemedLogo;