import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/color";
import { StatusBar } from "react-native-web";

const RootLayout = () => {
  const colorschema = useColorScheme();
  const theme = Colors[colorschema] ?? Colors.light;

  return (
    <>

    <StatusBar value="auto" />
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      />
    </Stack>

    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
