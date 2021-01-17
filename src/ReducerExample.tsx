import React, { useReducer } from "react";

type Actions =
  | { type: "add"; text: string; complete: boolean }
  | { type: "remove"; idx: number };

interface ToDo {
  text: string;
  complete: boolean;
}

type State = ToDo[];

const ToDoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: action.complete }];

    case "remove":
      return state.filter((_, i) => action.idx !== i);

    default:
      return state;
  }
};

export const ReducerExample = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "ameno", complete: true });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "remove", idx: 0 });
        }}
      >
        -
      </button>
    </div>
  );
};
