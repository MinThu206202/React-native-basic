import { StyleSheet } from "react-native";
import { useContext } from "react";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <ThemedView safe style={styles.container}>
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>

      <Spacer />

      {user ? (
        <>
          <ThemedText>Email: {user.email}</ThemedText>
          <Spacer height={20} />
          <ThemedButton onPress={logout}>
            <ThemedText style={{ color: "#f2f2f2" }}>Logout</ThemedText>
          </ThemedButton>
        </>
      ) : (
        <ThemedText>Time to start reading some book...</ThemedText>
      )}

      <Spacer />
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#6366F1",
    marginBottom: 20,
  },
});