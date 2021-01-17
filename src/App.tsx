import React from "react";
import "./App.css";
import { AxiosExemplo } from "./AxiosExemplo";
import { ContextoExemplo } from "./ContextoExemplo";
import { Counter } from "./Counter";
import { ReducerExample } from "./ReducerExample";
import { TextField } from "./TextField";

const App: React.FC = () => {
  function fn() {
    console.log("Não retorno nada");
  }

  function fn2() {
    return "Retorno Algo";
  }

  function fn3(bob: number) {
    return "Meu Parametro tem que ser um numero e meu retorno uma string";
  }

  const person = { firstName: "Xerox", lastName: "To Xerox Xerox" };

  return (
    <div className="App">
      <TextField
        person={person}
        text="hello"
        ok={true}
        i={1}
        fn={fn}
        fn2={fn2}
        fn3={fn3}
        handleChange={(e) => {
          console.log(e.currentTarget);
        }}
      />
      <ReducerExample />

      <Counter>
        {(count, setCount) => (
          <div>
            {count} <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <AxiosExemplo />
      <ContextoExemplo />
    </div>
  );
};

export default App;
