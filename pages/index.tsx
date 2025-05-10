// pages/index.tsx
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Features from "@/components/Features";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

interface TeslaData {
  "hero-slides": any[];
  "car-models": any[];
  features: any[];
}

export async function getStaticProps() {
  const res = await fetch("https://inotch-backend.onrender.com/api/tesla");
  const json = await res.json();
  console.log("json...",json.data.data);
  return {
    props: {
      data: json.data.data,
    },
  };
}

export default function HomePage({ data }: { data: TeslaData }): React.ReactElement {
  const { "hero-slides": heroSlides, "car-models": carModels, features } = data;

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero slides={heroSlides} />
        <Models models={carModels} />
        <Features features={features} />
      </main>
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2025 Tesla Replica. All rights reserved.
        </div>
      </footer>
    </>
  );
}
