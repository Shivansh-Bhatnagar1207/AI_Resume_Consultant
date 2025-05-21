// Resume_Builder.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { resume as ResumeAction } from "./_action";

export default function Resume_Builder() {
  const [text, setText] = useState<string | null>("");
  const [role, setRole] = useState<string | null>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  const [isloading, setIsloading] = useState<boolean>(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/api/process-pdf", {
      method: "POST",
      body: form,
    });

    const parsed = await res.json();
    setText(parsed.text);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsloading(true);
    if (!text || !role) {
      alert("No File or no role found");
      setIsloading(false);
      return;
    }
    try {
      const response = await ResumeAction(text, role);
      if (response.err) {
        setError(response.err);
      } else {
        setResult(response.result);
      }
    } catch (err) {
      return { err: err };
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
      <Link
        href={"/Dashboard"}
        className="border rounded-full p-2 border-gray-700 flex items-center fixed top-5 left-5 hover:bg-gray-200 transition"
      >
        <IoIosArrowBack size={28} className="text-gray-700" />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 transform transition-all hover:scale-105"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">
          Optimize Your Resume
        </h1>
        <p className="text-gray-500 mb-8 text-center text-base leading-relaxed">
          Upload your resume and enter the desired job role to get personalized,
          ATS-friendly optimization tips.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Your Resume:
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              className="border border-gray-400 border-dashed w-full h-12 p-3 text-gray-400 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Job Role:
            </label>
            <input
              type="text"
              placeholder="e.g., Software Engineer"
              className="block w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              required
            />
          </div>

          {result && (
            <div className="p-4 bg-gray-100 border rounded-lg text-gray-800">
              <p className="font-semibold">Tips:</p>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          )}

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl"
            disabled={isloading}
          >
            {isloading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <span>Generate Optimization Tips</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
