import { bunDB } from "@/db/bun";
import Link from "next/link";
import React from "react";
import { DeleteButton } from "@/components/DeleteButton";
import { redirect } from "next/navigation";
import { printDate } from "@/utils/date";
import { DoneButton } from "@/components/DoneButton";

export async function deleteData(id: string) {
  "use server";
  try {
    await bunDB.delete(id);
  } catch (e) {
    return "Error deleting data";
  }
  redirect("/");
}

export async function doThing(id: string, value: string) {
  "use server";
  try {
    await bunDB.set(id, value);
  } catch (e) {
    return "Error doing data";
  }
  redirect("/");
}

export default async function Page({ params }: any) {
  const date = printDate(new Date());
  const data = await bunDB.get(params["id"]);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h2>{`Today's date is ${date}`}</h2>
      {data && <p>Do the thing: {data}</p>}
      <DoneButton doThing={doThing} data={data + " DONE!"} id={params["id"]} />
      <DeleteButton deleteData={deleteData} id={params["id"]} />
      <Link className="text-cyan-600" href="/">
        Back
      </Link>
    </div>
  );
}
