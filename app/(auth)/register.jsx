import { Link } from "expo-router";
import { useContext, useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedView from "../../components/ThemedView";
import { UserContext } from "../../contexts/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register } = useContext(UserContext);

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      await register(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
          Create Account
        </ThemedText>

        <ThemedTextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "#f2f2f2", textAlign: "center" }}>
            {loading ? "Registering..." : "Register"}
          </Text>
        </ThemedButton>

        <Spacer height={40} />
        <Link href="/(auth)/login">
          <ThemedText style={{ textAlign: "center" }}>
            Already have an account? Login
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  error: {
    color: "red",
    padding: 10,
    backgroundColor: "#f8d7da",
    borderRadius: 5,
    marginBottom: 16,
    width: "100%",
    textAlign: "center",
  },
  btnText: {
    color: "#f2f2f2",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});