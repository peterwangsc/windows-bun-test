import { TodoApp } from "@/components/TodoApp";
import { bunDB } from "@/db/bun";

export const write = async (name: string) => {
  "use server";
  const ay = bunDB.set(new Date().getTime().toString(), name);
  return ay;
};

export const fetch = async () => {
  "use server";
  const data = await bunDB.list();
  return data;
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl pb-5">Welcome to Do</h1>
      <TodoApp write={write} fetch={fetch} />
    </main>
  );
}
