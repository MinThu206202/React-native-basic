import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/color";

function ThemedButton({ style, disabled, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: disabled ? theme.textSecondary : theme.primary },
        pressed && !disabled && styles.pressed,
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default ThemedButton;
