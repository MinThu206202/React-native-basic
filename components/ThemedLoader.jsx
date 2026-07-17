import { ActivityIndicator, useColorScheme } from "react-native-web";
import { Colors } from "../constants/color";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={{
        flex : 1 ,
        justifyContent : "center" , 
        alignItem : 'center'
    }}>
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
};

export default ThemedLoader;
