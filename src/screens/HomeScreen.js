import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import LottieView from "lottie-react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require("./../../assets/animations/welcome.json")}
      />
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
