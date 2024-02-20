"use client";

import { useState } from "react";

export const DeleteButton = ({ deleteData, id }: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      className="border border-red-500 bg-red-200 hover:bg-red-300 p-3 rounded-md"
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        const res = await deleteData(id);
        console.log(res);
      }}
    >
      Delete
    </button>
  );
};
