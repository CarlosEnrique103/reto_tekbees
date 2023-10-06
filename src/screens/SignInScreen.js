import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignInForm from "../components/SignInForm";
import { COLORS } from "../constants/colors";
import LottieView from "lottie-react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <LottieView
          autoPlay
          style={styles.animation}
          source={require("./../../assets/animations/login.json")}
        />
      </View>
      <View style={styles.body}>
        <SignInForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 250,
    height: 250,
  },
  body: {
    marginTop: 10,
    flex: 1.5,
    width: "100%",
    backgroundColor: "red",
  },
});
