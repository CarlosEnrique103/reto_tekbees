import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthContext from "../store/Auth/auth-context";
import AuthNavigator from "../navigation/AuthNavigator";
import AppNavigator from "../navigation/AppNavigator";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log("render");

    console.log("cambio el valor");
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      {!isLoggedIn && <AuthNavigator />}
      {isLoggedIn && <AppNavigator />}
    </React.Fragment>
  );
};

export default Main;
