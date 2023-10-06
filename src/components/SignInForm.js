import { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../constants/colors";
import Button from "./Button";
import AuthContext from "../store/Auth/auth-context";

const SignInForm = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChangeText = (key, value) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    if (Object.values(data).some((value) => !value)) {
      Alert.alert("Email y Password", "Campos requeridos.");
      return;
    }
    signIn(data);
  };

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.title}>Iniciar sesión</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>Eres nuevo?</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("signUp")}
            >
              <Text style={styles.link}>Crear una cuenta</Text>
            </TouchableWithoutFeedback>
          </View>
          <TextInput
            mode="outlined"
            label="Email:"
            value={data.email}
            style={styles.input}
            selectionColor={COLORS.primaryColor}
            activeOutlineColor={COLORS.primaryColor}
            keyboardType="email-address"
            onChangeText={(value) => handleChangeText("email", value)}
          />
          <TextInput
            mode="outlined"
            label="Contraseña:"
            value={data.password}
            selectionColor={COLORS.primaryColor}
            activeOutlineColor={COLORS.primaryColor}
            onChangeText={(value) => handleChangeText("password", value)}
            right={
              <TextInput.Icon
                icon={!showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword((prev) => !prev)}
              />
            }
            secureTextEntry={!showPassword}
          />
          <Button title="Iniciar sesión" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.whiteColor,
  },
  scrollContent: {
    flexGrow: 1,
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 15,
  },
  containerInfo: {
    flexDirection: "row",
    gap: 5,
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "400",
    color: COLORS.primaryColor,
  },
  textInfo: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primaryColor,
  },
});
