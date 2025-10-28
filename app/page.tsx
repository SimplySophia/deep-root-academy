import Hero from "./components/section/Hero";
import About from "./components/section/About";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50">
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
