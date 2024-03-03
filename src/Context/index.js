import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [name, setName] = useState("");
  const data = { name, setName };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useData = () => useContext(Context);

export default Provider;
