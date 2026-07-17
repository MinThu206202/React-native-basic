import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: safe ? insets.top : 0,
          paddingBottom: safe ? insets.bottom : 0,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
