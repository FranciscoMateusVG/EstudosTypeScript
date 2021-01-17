import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; // ? -> É opcional
  i: number;
  fn: () => void; //Retorna nada
  fn2: () => string; //Retorna string
  fn3: (bob: number) => string; //Função com parametro number e retorna string
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [contador] = useState<number | null | undefined>(5);
  const [node] = useState<TextNode>({ text: "Ameno" });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <p>{contador}</p>
      <p>{JSON.stringify(node)}</p>
      <input onChange={handleChange} ref={inputRef} />
    </div>
  );
};
