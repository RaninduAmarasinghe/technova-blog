import Navbar from "@/components/Navbar";
import HeroPost from "@/components/HeroPost";
import LatestPosts from "@/components/LatestPosts";   
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <HeroPost />
      <LatestPosts />
      <Footer />
    </main>
  );
}