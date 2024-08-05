"use client";
import { useLiveQuery } from "dexie-react-hooks";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Spinner,
} from "@nextui-org/react";
import { useState } from "react";
import { db } from "../db";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useLiveQuery(() => db.todos.toArray());
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue) return;

    const timestamp = new Date().getTime();
    db.todos.add({
      info: { text: inputValue },
      status: "todo",
      created_at: timestamp,
      updated_at: timestamp,
    });

    setInputValue("");
  };

  if (!todos) return <Spinner>Loading...</Spinner>;

  return (
    <div className="flex h-full flex-col">
      <div className="flex gap-x-2 py-10">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="mt-4 flex flex-1 flex-col items-center overflow-y-auto">
        <Listbox aria-label="TodoList">
          {todos?.map((todo) => (
            <ListboxItem
              key={todo.id}
              textValue={todo.info.text}
              onPress={() =>
                db.todos.update(todo.id, {
                  status: todo.status === "done" ? "todo" : "done",
                })
              }
            >
              <TodoItem todo={todo} />
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </div>
  );
}
