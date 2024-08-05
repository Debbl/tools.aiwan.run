import type { EntityTable } from "dexie";
import { Dexie } from "dexie";

export interface TodoInfo {
  text: string;
}

export type TodoStatus = "todo" | "done";

export interface TodoItem {
  id: number;
  info: TodoInfo;
  status: TodoStatus;
  created_at: number;
  updated_at: number;
}

const db = new Dexie("todo") as Dexie & {
  todos: EntityTable<TodoItem, "id">;
};

db.version(2).stores({
  todos: "++id, info, status, created_at, updated_at",
});

export { db };
