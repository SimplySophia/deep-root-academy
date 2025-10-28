import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Programs from "./components/section/Programs"
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Footer />
      </main>
    </div>
  );
}
