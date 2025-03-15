"use client";
import React from "react";
import MainNav from "./_components/MainNav";
import { Typewriter } from "react-simple-typewriter";
import Timeline from "./_components/Timeline";

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

      <div className="hero min-h-screen">
        <div className="hero bg-base min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-6">
                Transform Your Career with{" "}
                <span className="text-primary">AI-Powered Tools</span>
              </h1>
              <p className="py-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Step into the future of career growth with our revolutionary
                platform designed to supercharge your professional journey. From
                optimizing your resume for ATS systems to crafting compelling
                LinkedIn posts, we provide AI-driven solutions tailored to your
                unique career aspirations. Explore, analyze, and excel with
                cutting-edge tools built just for you.
              </p>

              <div className="max-w-4xl mx-auto my-10">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-4">
                  Revolutionizing Resume Building & LinkedIn
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                  Our application is designed to simplify resume creation and
                  content generation for LinkedIn. Whether you're a student or a
                  seasoned professional, we leverage advanced AI capabilities to
                  help you create ATS-friendly resumes, optimize your profiles,
                  and craft compelling posts that stand out.
                </p>

                {/* Timeline Component */}
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
