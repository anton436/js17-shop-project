import React, { createContext, useContext, useEffect, useState } from "react";
import fire from "../fire";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":

          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);

            break;
        }
      });
  };

  const hahdleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/-not-found":
            setEmailError(err.message);

            break;
          case "auth/wrong-password":
            setPasswordError(err.message);

            break;
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  console.log(user);

  const values = {
    email,
    password,
    user,
    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,
    handleSignUp,
    hahdleLogin,
    handleLogOut,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
