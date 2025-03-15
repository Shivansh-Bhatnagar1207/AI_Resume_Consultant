"use client";
import React from "react";
import "atropos/css";
import Atropos from "atropos/react";
import Cards from "../_components/Cards";

const data = [
  {
    title: "Resume Builder",
    desc: "Create professional resumes in minutes.",
    bg: "bg-red-500 ",
    link: "/Dashboard/Resume_Builder",
  },
  {
    title: "Resume Optimization",
    desc: "Optimize your resume for ATS and recruiters.",
    bg: "bg-error text-secondary-content",
    link: "/Dashboard/Resume_Optimization",
  },
  {
    title: "Content Creator for LinkedIn",
    desc: "Generate engaging content for your LinkedIn profile.",
    bg: "bg-green-600",
    link: "/Dashboard/Caption",
  },
  {
    title: "LinkedIn Profile Optimization",
    desc: "Optimize your LinkedIn profile for maximum visibility.",
    bg: "bg-info text-info-content",
    link: "/Dashboard/Profile_Optimization",
  },
];
export default function Dashboard() {
  return (
    <>
      <div className="flex my-5 justify-center">
        <span className="text-4xl font-bold text-primary">Dashboard</span>
      </div>
      <p className="w-[90vw] mx-auto text-justify lg:text-xl/10">
        Your one-stop solution for optimizing your professional presence. Our
        AI-powered platform helps you craft the perfect resume, enhance your
        LinkedIn profile, and generate engaging captions for your posts. Whether
        you&apos;re looking to land your dream job or stand out in the
        competitive market, our intelligent tools—AI Resume Optimization,
        LinkedIn Profile Optimization, and LinkedIn Caption Generator—are
        designed to give you an edge. Start exploring and take your career to
        the next level!
      </p>
      <div className="my-20 flex flex-wrap  gap-10 justify-center items-center min-h-screen ">
        {data.map((card, index) => (
          <Atropos key={index} className="w-96" highlight={false}>
            <Cards
              bg={card.bg}
              title={card.title}
              desc={card.desc}
              route={card.link}
            />
          </Atropos>
        ))}
      </div>
    </>
  );
}
