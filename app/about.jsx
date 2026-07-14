import { Link } from "expo-router";
import { StyleSheet, Text, View ,useColorScheme } from "react-native";
import { Colors } from "../constants/color";

const About = () => {
  const colorschema = useColorScheme();
  const theme = Colors[colorschema] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>About Page</Text>

      <Link href="/">Go to Home</Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
