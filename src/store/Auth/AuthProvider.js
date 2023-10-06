import { useReducer } from "react";
import { Alert } from "react-native";
import AuthContext from "./auth-context";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

const authReducer = (state, action) => {
  if (action.type === "SIGN_UP") {
    return {
      ...state,
      user: action.payload,
      isLoggedIn: true,
    };
  }

  if (action.type === "SIGN_IN") {
    return {
      ...state,
      user: action.payload,
      isLoggedIn: true,
    };
  }
  return state;
};

const fetchSignIn = async (dispatch, credentials) => {
  const { email, password } = credentials;
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);

    dispatch({ type: "SIGN_IN", payload: data.user });
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    Alert.alert("Error", "Ocurrio un error en el servidor");
  }
};

const fetchSignUp = async (dispatch, credentials) => {
  const { email, password } = credentials;
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    dispatch({ type: "SIGN_IN", payload: data.user });
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    Alert.alert("Error", "Ocurrio un error en el servidor");
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const signInHandler = (credentials) => {
    fetchSignIn(dispatch, credentials);
  };

  const signUpHandler = (data) => {
    fetchSignUp(dispatch, data);
  };

  const value = {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    signIn: signInHandler,
    signUp: signUpHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
