import React, { useContext } from "react";
import { UsuariosContext } from "./Context";

export const ContextoExemplo: React.FC = () => {
  const { sessao, usuarios } = useContext(UsuariosContext);

  return <div>{usuarios[0].nome}</div>;
};
