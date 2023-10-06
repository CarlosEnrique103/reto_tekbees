import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.whiteColor,
  },
});
