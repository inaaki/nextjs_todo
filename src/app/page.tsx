import TodoList from "@/components/TodoList";
import sql from "@/lib/db";
import type { Todos } from "@/types/dataType";
import { revalidatePath } from "next/cache";

async function addTodo(formData: FormData) {
  "use server";

  const title = formData.get("title");

  if (title && typeof title === "string") {
    await sql`
      INSERT INTO todos (title) VALUES (${title})
    `;
  }

  revalidatePath("/");
}

async function deleteTodo(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;

  if (id) {
    await sql`
    DELETE FROM todos WHERE id = ${id}
    `;

    revalidatePath("/");
  }
}

async function toggleTodo(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;
  const completed = formData.get("completed") === "on";

  if (id) {
    await sql`
      UPDATE todos SET completed = ${completed} WHERE id = ${id}
    `;

    revalidatePath("/");
  }
}

export default async function Home() {
  const todos = await sql<Todos[]>`
    SELECT * FROM todos ORDER BY created_at ASC, title ASC
  `;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="max-w-lg w-full p-4 rounded-2xl border shadow-xl mt-20">
        {/* todo input */}
        <form action={addTodo}>
          <input
            type="text"
            name="title"
            placeholder="Add a new task"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 px-4"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Add Task
          </button>
        </form>

        {/* todo list */}
        <div className="mt-6 max-h-[50vh] overflow-auto">
          <TodoList
            todos={todos}
            deleteAction={deleteTodo}
            toggleAction={toggleTodo}
          />
        </div>
      </div>
    </main>
  );
}
