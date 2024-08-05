import { cn } from "twl";
import type { TodoItem as ITodoItem } from "../db";

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        todo.status === "done" && "text-gray-500",
      )}
    >
      {todo.info.text}
    </div>
  );
}
