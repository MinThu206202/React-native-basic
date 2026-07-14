import { View, useColorScheme } from "react-native";
import Color from "../constants/color";

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Color[colorScheme] ?? Color.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
