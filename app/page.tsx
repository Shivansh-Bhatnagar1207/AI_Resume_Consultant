"use client";
import React from "react";
import MainNav from "./_components/MainNav";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <MainNav />

    {/* Hero Section */}

      <div className="hero min-h-screen relative overflow-hidden w-[95dvw] mx-auto rounded-3xl my-2">
        <video
          src="/bgv-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover bg-center"
        />
        <div className="hero-content text-center text-neutral-content relative z-10 bg-black/30 rounded-box">
          <div className="max-w-3xl mx-auto">
            {/* Heading with Typewriter Effect */}
            <h1 className="mb-5 text-3xl lg:text-7xl font-bold text-white h-24 lg:h-64">
              <Typewriter
                words={["Welcome to Your Professional Growth Companion"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            {/* Description */}
            <p className="mb-5 text-lg text-justify text-gray-300">
              Unlock your true potential with tools designed to empower your
              career. From crafting standout resumes to enhancing your
              professional presence, we’re here to help you achieve your goals
              effortlessly and effectively.
            </p>

            {/* Button */}
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
