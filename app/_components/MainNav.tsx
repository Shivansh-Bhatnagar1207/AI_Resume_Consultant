"use client";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function MainNav() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <button
          className="btn btn-ghost lg:hidden"
          popoverTarget="hm"
          style={{ anchorName: "--anchor-1" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          className="dropdown menu w-52 rounded-box shadow-sm bg-white dark:bg-base-100 divide-y border"
          popover="auto"
          id="hm"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li>
            <a>Resume Builder</a>
          </li>
          <li>
            <a>Resume Optimization</a>
          </li>
          <li>
            <a>Content Creator for LinkedIn</a>
          </li>
          <li>
            <a>LinkedIn Profile Optimization</a>
          </li>
          <li>
            <a>AI Interviewer</a>
          </li>
        </ul>
        <a
          href="#"
          className="bg-black dark:bg-white text-white p-3 rounded-3xl dark:text-black font-semibold btn"
        >
          AI-Resume-Consultant
        </a>
      </div>
      <div className="navbar-center hidden  lg:flex gap-8">
        <span className="btn btn-ghost">About</span>
        <button
          className="btn btn-ghost"
          popoverTarget="lm"
          style={{ anchorName: "--anchor-2" }}
        >
          Learn More <RiArrowDropDownLine size={25} />
        </button>

        <ul
          className="dropdown menu w-52 rounded-box shadow-sm bg-white dark:bg-base-100 divide-y border"
          popover="auto"
          id="lm"
          style={{ positionAnchor: "--anchor-2" }}
        >
          <li>
            <a>Resume Builder</a>
          </li>
          <li>
            <a>Resume Optimization</a>
          </li>
          <li>
            <a>Content Creator for LinkedIn</a>
          </li>
          <li>
            <a>LinkedIn Profile Optimization</a>
          </li>
          <li>
            <a>AI Interviewer</a>
          </li>
        </ul>

        <span className="btn btn-ghost">Contact Us</span>
      </div>
      <div className="navbar-end flex gap-2">
        <button className="btn btn-accent">Signin</button>
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            value="halloween"
            className="theme-controller"
            onChange={(e) => {
              document.documentElement.setAttribute(
                "data-theme",
                e.target.checked ? "halloween" : "fantasy"
              );
            }}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
}
