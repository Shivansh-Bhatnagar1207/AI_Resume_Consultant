"use client";
import React from "react";
import "atropos/css";
import Atropos from "atropos/react";
import Cards from "@/app/_components/Cards";
import { FiFileText } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { BiBriefcase, BiUserCheck } from "react-icons/bi";
import MainNav from "@/app/_components/DashNav";

const data = [
  {
    title: "Resume Optimization",
    desc: "Upload your resume to get ATS-friendly optimization tips tailored to your desired job role.",
    actionText: "Optimize Resume",
    icon: <FiFileText className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/ResumeOptimizer",
  },
  {
    title: "LinkedIn Caption Generator",
    desc: "Generate professional LinkedIn captions from your informal inputs to enhance your profile engagement.",
    actionText: "Generate Caption",
    icon: <LiaLinkedin className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Caption",
  },
  {
    title: "LinkedIn Profile Optimization",
    desc: "Upload your LinkedIn profile to receive actionable tips for improving visibility and appeal.",
    actionText: "Optimize Profile",
    icon: <BiUserCheck className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Optimize-Profile",
  },
  {
    title: "Generate New Resume",
    desc: "Create a professional resume from scratch by entering your details step by step.",
    actionText: "Create Resume",
    icon: <BiBriefcase className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Create-Resume",
  },
  {
    title: "AI Interviewer",
    desc: "Practice your interview skills with AI.",
    actionText: "AI Interviewer",
    icon: <BiBriefcase className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Interview",
  },
];
export default function Dashboard() {
  return (
    <>
      <MainNav />
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
      <div className="my-20 mx-auto  flex flex-wrap gap-10 justify-center items-center ">
        {data.map((card, index) => (
          <Atropos key={index} className="w-96" highlight={false}>
            <Cards
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              action={card.action}
              actionText={card.actionText}
            />
          </Atropos>
        ))}
      </div>
    </>
  );
}
