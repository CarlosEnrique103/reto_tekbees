import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../constants/colors";
import Button from "./Button";

const SignUpForm = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "asdas",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChangeText = (key, value) => {
    if (key === "confirmPassword" && data["password"] !== value) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }

    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (Object.values(data).some((value) => !value)) {
      return;
    }
    console.log("Sending data", { data });
  };

  const handleRegister = () => {
    if (password === confirmPassword) {
      // Aquí puedes agregar lógica para registrar al usuario
      console.log("Registro exitoso");
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.title}>Registrate</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>Ya tienes una cuenta?</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("signIn")}
            >
              <Text style={styles.link}>Ingresa aquí</Text>
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
          <TextInput
            mode="outlined"
            label="Confirma tu contraseña:"
            value={data.confirmPassword}
            selectionColor={COLORS.primaryColor}
            activeOutlineColor={COLORS.primaryColor}
            onChangeText={(value) => handleChangeText("confirmPassword", value)}
            right={
              <TextInput.Icon
                icon={!showConfirmPassword ? "eye-off" : "eye"}
                onPress={() => setShowConfirmPassword((prev) => !prev)}
              />
            }
            secureTextEntry={!showConfirmPassword}
          />

          {!passwordMatch && (
            <Text style={styles.errorText}>Las contraseñas no coinciden</Text>
          )}

          <Button title="Iniciar sesión" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpForm;

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
