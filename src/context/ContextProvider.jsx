import { useContext, createContext, useState } from "react";

const Context = createContext();

export default function ContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState({});

  const data = {
    login,
    setLogin,
    profile,
    setProfile,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const getContext = () => {
  return useContext(Context);
};