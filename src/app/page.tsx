"use client";
import Image from "next/image";
import devData from "./data/devData.json";
import DeveloperChart from "./section/DeveloperChart";
import AboutDEV from "./section/aboutDEV";
import Contact from "./section/contact";


export default function Home() {
  return (
    <main className="pt-12 sm:pt-16 lg:pt-20">
      <AboutDEV />
      <DeveloperChart data={devData} />
      <Contact />
    </main>
  );
}
