import { Pressable, StyleSheet, Text, View } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>Sign Up Screen</Text>
      <Pressable onPress={() => navigation.navigate("signIn")}>
        <Text> Ir SingIn</Text>
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
