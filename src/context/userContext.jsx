import { createContext, useContext, useReducer } from "react";

const userContext = createContext();

const initialState = {
  user: {},
  isLoading: false,
  error: "",
  isAuthenticated: false,
  token: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "signup":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "update":
      return {
        ...state,
        user: action.payload,
      };

    default:
      break;
  }
}

function UserProvider({ children }) {
  const [{ user, isLoading, token }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <userContext.Provider
      value={{
        dispatch,
        user,
        isLoading,
        token,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

function useAppState() {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("Context used in a wrong provider");
  }

  return context;
}

export { UserProvider, useAppState };
