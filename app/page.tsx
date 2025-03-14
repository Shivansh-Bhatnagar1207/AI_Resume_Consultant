"use client";
import React from "react";
import MainNav from "./_components/MainNav";

export default function Home() {
  return (
    <>
      <MainNav />
      <div className="hero min-h-screen relative overflow-hidden w-[95dvw] mx-auto rounded-3xl my-2">
        <video
          src="/bgv-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover bg-center"
        />
        
      </div>
    </>
  );
}
