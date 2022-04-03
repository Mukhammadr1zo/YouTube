import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [menu, setMenu] = React.useState();

  return (
    <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
