import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "../constants/color";
import { BooksProvider } from "../contexts/BooksContext";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={theme.navBackground}
        />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
};

export default RootLayout;
