import { View, useColorScheme } from "react-native";
import Color from "../constants/color";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Color[colorScheme] ?? Color.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
    card : {
        borderradius: 10,
        padding : 20
    }
})
