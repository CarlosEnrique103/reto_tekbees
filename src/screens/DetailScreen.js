import { StyleSheet, Text, View } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
