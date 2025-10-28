import Image from "next/image";
import Hero from "./components/section/Hero";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50">
      <main>
        <Hero />
      </main>
    </div>
  );
}
