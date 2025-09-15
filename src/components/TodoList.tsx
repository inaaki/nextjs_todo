"use client";
import type { Todos } from "@/types/dataType";
import clsx from "clsx";

type PropsType = {
  todos: Todos[];
  deleteAction: (formData: FormData) => Promise<void>;
  toggleAction: (formData: FormData) => Promise<void>;
};

export default function TodoList({
  todos,
  deleteAction,
  toggleAction,
}: PropsType) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg  not-last:mb-2 gap-2"
        >
          <form action={toggleAction} className="flex items-center">
            <input type="hidden" name="id" value={todo.id} />
            <input
              className="cursor-pointer w-5 h-5"
              type="checkbox"
              name="completed"
              checked={todo.completed}
              onChange={(e) => e.target?.form?.requestSubmit()}
              key={String(todo.completed)}
            />
          </form>

          <span
            className={clsx(todo.completed && "line-through text-gray-500")}
          >
            {todo.title}
          </span>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={todo.id} />
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              type="submit"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
