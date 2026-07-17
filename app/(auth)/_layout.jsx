import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GuestOnly } from "../../components/GuestOnly";

export default function AuthLayout() {
  return (
    <GuestOnly>
      <>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false, animation: "none" }} />
      </>
    </GuestOnly>
  );
}