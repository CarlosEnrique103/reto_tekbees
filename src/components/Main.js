import React, { useContext } from "react";
import AuthContext from "../store/Auth/auth-context";
import AuthNavigator from "../navigation/AuthNavigator";
import AppNavigator from "../navigation/AppNavigator";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <React.Fragment>
      {!isLoggedIn && <AuthNavigator />}
      {isLoggedIn && <AppNavigator />}
    </React.Fragment>
  );
};

export default Main;
