import Image from "next/image";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
  <div className="flex">
    <Hero></Hero>
    <Sidebar></Sidebar>
  </div>
  );
}
