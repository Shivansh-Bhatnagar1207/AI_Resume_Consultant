"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { caption as GenCaption } from "./_action";
export default function Caption() {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isloading, setIsloading] = useState<boolean>(false);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setResult("");
    setError("");
    setIsloading(true);
    try {
      const response = await GenCaption(formData);
      if (response.error) {
        setError(response.error);
      }
      setResult(response.result);
    } catch (error) {
      setError(error);
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
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 "
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Generate a LinkedIn Caption
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Input:
            </label>
            <textarea
              name="userInput"
              required
              placeholder="Enter details..."
              className="block w-full border rounded-lg p-3"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Tone:
            </label>
            <select
              name="tone"
              required
              className="block w-full border rounded-lg p-3"
            >
              <option value="Professional">Professional</option>
              <option value="Casual">Casual</option>
              <option value="Inspirational">Inspirational</option>
            </select>
          </div>

          {error && <p className="text-red-500 font-medium">{error}</p>}

          {result && (
            <div className="p-4 bg-gray-100 border rounded-lg text-gray-800">
              <p className="font-semibold">Generated Caption:</p>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700"
            disabled={isloading}
          >
            {isloading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <span>Generate Caption</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
