import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>home Page</h1>
        <p>redige vers page "x"</p>
        <Link href="/x">Voir le projet</Link>
        <p>Prochainement autorisation et configuration des cookies</p>
      </main>
    </div>
  );
}
