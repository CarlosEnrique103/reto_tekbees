import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../constants/colors";

const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: COLORS.primaryColor,
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Roboto-Black",
    textAlign: "center",
    fontSize: 18,
    color: COLORS.whiteColor,
  },
});
