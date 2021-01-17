import React, { createContext, useState } from "react";

interface Usuario {
  nome: string;
  id: number;
}

interface Usuarios {
  usuarios: Usuario[];
  sessao: boolean;
  setState?: React.Dispatch<React.SetStateAction<Usuarios>>;
  valorAleatorio: string;
}

//Initial State
const initialState: Usuarios = {
  usuarios: [{ id: 1, nome: "Xerox" }],
  sessao: false,
  valorAleatorio: "xyz",
};

//Create context
export const UsuariosContext = createContext<Usuarios>(initialState);

//Create provider
export const UsuariosProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<Usuarios>(initialState);
  const valorAleatorio: string = "Abc";

  return (
    <UsuariosContext.Provider value={{ ...state, setState, valorAleatorio }}>
      {children}
    </UsuariosContext.Provider>
  );
};
