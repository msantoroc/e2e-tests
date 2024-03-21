import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen p-24">
      <header className="flex w-full">
        <Link href="/">Home</Link>
      </header>
      <p>Sobre...</p>
    </main>
  );
}
