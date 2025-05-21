"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { linkedin as LinkedInProfile } from "./_action";

export default function Optimizer() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
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
    if (!text) {
      setIsloading(false);
      setError("No PDF Found");
      return;
    }
    try {
      const response = await LinkedInProfile(text);
      if (response.err) {
        setError(response.err);
      } else {
        setResult(response.result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 py-10">
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
          LinkedIn Profile Optimization
        </h1>
        <p className="text-gray-500 mb-8 text-center text-base leading-relaxed">
          Upload your LinkedIn profile (PDF, DOCX) to receive personalized
          optimization tips.
        </p>

        <div className="space-y-8">
          <div>
            <label
              htmlFor="linkedinFile"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Upload Your LinkedIn Profile:
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              className="border border-gray-400 border-dashed w-full h-12 p-3 text-gray-400 rounded-md"
            />
          </div>
          {result && (
            <div className="p-4 bg-gray-100 border rounded-lg text-gray-800">
              <p className="font-semibold">Resume:</p>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            disabled={isloading}
          >
            {isloading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <span>Genrate Optimized Tips</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
