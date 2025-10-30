import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Programs from "./components/section/Programs"
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import Review from "./components/section/reviews/Reviews";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Review />
        <Footer />
      </main>
    </div>
  );
}
