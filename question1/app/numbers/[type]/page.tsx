"use client";

import { Server } from "@/server/server";
import { useEffect, useState } from "react";

export default function Number({
  params,
}: {
  params: {
    type: string;
  };
}) {
  const [average, setAverage] = useState<number>();
  const [numbers, setNumbers] = useState<number[]>();
  useEffect(() => {
    (async () => {
      const res: { numbers: number[] } = await Server(params.type);
      const sum = res.numbers.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      );
      setNumbers(res.numbers);
      setAverage(sum / res.numbers.length);
    })();
  }, [params]);

  return (
    <main className="flex items-center justify-center h-screen w-full gap-4">
      {average && (
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Numbers</h1>
          <ul className="flex flex-row items-center gap-2">
            {numbers && numbers.map((num, i) => <li key={i}>{num}</li>)}
          </ul>
          <h1 className="text-xl font-semibold">Average</h1>
          <p>{average}</p>
        </div>
      )}
    </main>
  );
}
