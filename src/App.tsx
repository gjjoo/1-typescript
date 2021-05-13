import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import styled from "styled-components";
import Box from "./components/Box";
import Input from "./components/Input";
import { ITodo, ResType } from "./types/interfaces";
import { getuserAge } from "./utils/common";

const Container = styled.div`
  background-color: blue;
`;

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        ).then((res) => res.json());
        setTodos(result);
      })();
    } catch (e) {
      if (e.code === ResType.SUCCESS) {
        // ..
      } else if (e.code === ResType.FAIL) {
        // ..
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Box>
            <h1>hi</h1>

            <div>{ResType.SUCCESS}</div>

            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.userId}</span>
                  <span>{getuserAge(todo.userId)}</span>
                </li>
              ))}
            </ul>
          </Box>
          <Input />
        </Container>
      </header>
    </div>
  );
}

export default App;
