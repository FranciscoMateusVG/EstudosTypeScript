import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface Estado {
  nome: string;
  geoId: number;
}

type Estados = Estado[];

export const AxiosExemplo: React.FC = () => {
  const [estados, setEstados] = useState<Estados>([]);

  useEffect(() => {
    async function loadEstados() {
      const response = await axios.get(
        "http://www.geonames.org/childrenJSON?geonameId=3469034"
      );

      const listaEstados: Estados = formataListaEstados(response);

      setEstados(listaEstados);
    }
    loadEstados();
  }, []);

  return <div>{JSON.stringify(estados)}</div>;
};

const formataListaEstados = (response: AxiosResponse<any>) => {
  const formatado: Estados = response.data.geonames.map(
    ({ adminName1, geonameId }: { adminName1: string; geonameId: number }) => {
      return { nome: adminName1, geoId: geonameId };
    }
  );

  return formatado;
};
