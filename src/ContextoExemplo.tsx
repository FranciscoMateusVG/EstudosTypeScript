import React, { useContext } from "react";
import { UsuariosContext } from "./Context";

export const ContextoExemplo: React.FC = () => {
  const { usuarios, valorAleatorio } = useContext(UsuariosContext);
  console.log(valorAleatorio);
  return <div>{usuarios[0].nome}</div>;
};
