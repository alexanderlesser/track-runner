import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {
  ADD_ERROR,
  SIGN_UP,
  SIGN_IN,
  CLEAR_ERROR_MESSAGE,
  SIGN_OUT,
} from "./types";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { errorMessage: "", token: action.payload };
    case SIGN_UP:
      return { errorMessage: "", token: action.payload };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: "" };
    case SIGN_OUT:
      return { errorMessage: "", token: null };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: SIGN_IN, payload: token });

    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up
    try {
      const response = await trackerApi.post("/signup", { email, password });
      // Add token to storage
      await AsyncStorage.setItem("token", response.data.token);
      // when signed up, modify state and authenticate user
      dispatch({ type: SIGN_UP, payload: response.data.token });

      // navigate user to main flow
      navigate("TrackList");
    } catch (err) {
      // if signup fail, show error message to user
      dispatch({
        type: ADD_ERROR,
        payload: "This email already exist",
      });
    }
  };
};

const signin = (dispatch) => async ({ email, password }) => {
  // make api request to sign in
  try {
    const response = await trackerApi.post("/signin", { email, password });

    // save token to local storage
    await AsyncStorage.setItem("token", response.data.token);

    // if signed in modify state
    dispatch({ type: SIGN_IN, payload: response.data.token });

    navigate("TrackList");
  } catch (err) {
    //on signin fail show error message to user
    dispatch({ type: ADD_ERROR, payload: "Something went wrong" });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");

  dispatch({ type: SIGN_OUT, payload: token });

  navigate("Signin");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
