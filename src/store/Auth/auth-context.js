import { createContext } from "react";

const AuthContext = createContext({
  user: [],
  isLoggedIn: false,
  isLoading: false,
  signIn: () => {},
  signUp: () => {},
  logout: () => {},
});

export default AuthContext;
