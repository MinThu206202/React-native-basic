import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/color";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.surface,
          color: theme.text,
          borderColor: theme.border,
          borderWidth: 1,
          borderRadius: 8,
          padding: 14,
          fontSize: 16,
        },
        style,
      ]}
      placeholderTextColor={theme.textSecondary}
      {...props}
    />
  );
};

export default ThemedTextInput;
