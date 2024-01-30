import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-7xl font-bold text-indigo-600">
        Main Page
      </span>

      <Link href={'/about'} >About Page</Link>
    </main>
  );
}
