"use client";
import Image from "next/image";
import devData from "./data/devData.json";
import DeveloperChart from "./section/DeveloperChart";
import AboutDEV from "./section/aboutDEV";
import Review from "./section/review";
import Contact from "./section/contact";


export default function Home() {
  return (
    <main className="mt-20">
      <AboutDEV />
      <DeveloperChart data={devData} />
      <Review />
      <Contact />
    </main>
  );
}
