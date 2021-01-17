import { createContext } from "react";

interface Usuario {
  nome: string;
  id: number;
}

interface Usuarios {
  usuarios: Usuario[];
  sessao: boolean;
}

export const UsuariosContext = createContext<Usuarios>({
  usuarios: [{ id: 1, nome: "Xerox" }],
  sessao: false,
});
