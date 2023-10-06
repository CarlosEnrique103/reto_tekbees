import { Pressable, StyleSheet, Text, View } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>SignInScreen</Text>
      <Pressable onPress={() => navigation.navigate("signUp")}>
        <Text> Ir SignUp</Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
