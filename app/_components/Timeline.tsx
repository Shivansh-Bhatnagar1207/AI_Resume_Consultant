import React from "react";

export default function Timeline() {
  return (
    <div className="relative my-10">
      {/* Timeline Rod */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800 dark:bg-gray-400"></div>

      <ul className="space-y-10">
        {/* Feature 1 */}
        <li className="flex items-start">
          <div className="w-1/2 text-right pr-4 ">
            <time className="font-mono italic text-blue-600">
              Step 1
            </time>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              AI-Powered Resume Building
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Input your career details, and let our AI craft a professional,
              ATS-friendly resume tailored to your target role.
            </p>
          </div>
        </li>

        {/* Feature 2 */}
        <li className="flex items-start flex-row-reverse">
          <div className="w-1/2 text-left pl-4">
            <time className="font-mono italic text-green-600">Step 2</time>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Resume Improvement Suggestions
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Upload your existing resume, and we’ll provide actionable insights
              to optimize it for your desired job role.
            </p>
          </div>
        </li>

        {/* Feature 3 */}
        <li className="flex items-start">
          <div className="w-1/2 text-right pr-4">
            <time className="font-mono italic text-yellow-600">Step 3</time>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              LinkedIn Content Creation
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Generate professional captions for LinkedIn posts, ensuring your
              updates are engaging, relevant, and impactful.
            </p>
          </div>
        </li>

        {/* Feature 4 */}
        <li className="flex items-start flex-row-reverse">
          <div className="w-1/2 text-left pl-4">
            <time className="font-mono italic text-red-600">Step 4</time>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              LinkedIn Optimization Suggestions
            </div>
            <p className="text-gray-600 dark:text-gray-400 ">
              Upload your LinkeIn profile, and we&apos;ll provide actionable
              insights to optimise it for your better reach in the network.
            </p>
          </div>
        </li>

        {/* Feature 5 */}
        <li className="flex items-start">
          <div className="w-1/2 text-right pr-4">
            <time className="font-mono italic text-purple-600">Step 5</time>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              AI-Powered Interviews
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Practice and master the questions your interviewer might ask in
              your upcoming interviews with the AI-Interviewer
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
