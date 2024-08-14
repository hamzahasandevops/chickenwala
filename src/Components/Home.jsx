import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MainSection from "./MainSection";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MainSection />
    </div>
  );
}
