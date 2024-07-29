import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-full gap-4">
      <Link
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-all text-white"
        href="/numbers/p"
      >
        Prime Numbers
      </Link>
      <Link
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-all text-white"
        href="/numbers/f"
      >
        Fibonacci Numbers
      </Link>
      <Link
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-all text-white"
        href="/numbers/e"
      >
        Even Numbers
      </Link>
      <Link
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-all text-white"
        href="/numbers/r"
      >
        Random Numbers
      </Link>
    </main>
  );
}
