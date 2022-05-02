import { createContext, useMemo, useState } from "react";

export const Context = createContext();

// Context.Provider
// Context.Consumer

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const disconnect = () => setUser(null);
  const connect = (e, value) => {
    e.preventDefault();
    if (!value) {
      return false;
    }
    setUser(value);
  };

  const value = useMemo(() => {
    return {
      user,
      disconnect,
      connect,
    };
  }, [user]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
