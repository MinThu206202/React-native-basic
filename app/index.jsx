import { Link } from "expo-router";
import { Image, StyleSheet, Text } from "react-native";
import ThemedView from "../components/ThemedView";


const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={require("../assets/icon/icon.png")} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={styles.subtitle}>Reading list App</Text>

<Link href="/profile" style={styles.link}>
        Profile Page
      </Link>
      <Link href="/login" style={styles.link}>
        Login Page
      </Link>
      <Link href="/register" style={styles.link}>
        Register Page
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 10,
  },

  link: {
    marginTop: 20,
    color: "blue",
    borderBottomWidth: 2,
  },

  img: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});
