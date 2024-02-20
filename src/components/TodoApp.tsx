"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const TodoApp = ({ write, fetch }: any) => {
  const [string, setString] = useState("");
  const [id, setId] = useState("");
  const [list, setList] = useState([]);

  const refresh = async () => {
    const data = await fetch();
    setList(data);
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="py-2 drop-shadow shadow-blue-500 text-xl">
        Do thing: {string}
      </h1>
      <input
        className="block p-3 bg-blue-100 text-blue-900 rounded-lg shadow-lg"
        type="text"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <button
        className="block p-3 bg-blue-300 text-white rounded-lg shadow-lg hover:bg-blue-400 hover:text-white"
        onClick={async () => {
          const res = await write(string);
          setId(res);
          refresh();
        }}
      >
        aight
      </button>
      {id && (
        <p className="border border-slate-500 p-3 rounded-md">
          id: {id} created
        </p>
      )}
      <h2 className="border-b border-black p-3 text-xl">List</h2>
      <ul>
        {list.map((item: any) => (
          <li className="text-cyan-600" key={item}>
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
