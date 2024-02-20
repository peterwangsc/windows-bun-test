"use client";

import { useState } from "react";

export const DoneButton = ({ doThing: doIt, data, id }: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      className="border border-black bg-green-200 hover:bg-green-300 p-3 rounded-md"
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        const res = await doIt(id, data);
        console.log(res);
      }}
    >
      Done
    </button>
  );
};
