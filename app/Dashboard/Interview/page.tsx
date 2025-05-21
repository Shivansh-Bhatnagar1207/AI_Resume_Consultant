"use client"
import React, { useState } from "react";
import FlashcardViewer from "./_component/FlashcardViewer";
function Interview() {
  const [topic, setTopic] = useState("");
  const [submittedTopic, setSubmittedTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedTopic(topic.trim());
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-base-100 p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">🎯 AI Interview Flashcards</h1>

        <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter a topic e.g. React, CSS, Node.js"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary" type="submit">
            Generate
          </button>
        </form>

        {submittedTopic && <FlashcardViewer topic={submittedTopic} />}
      </div>
    </div>
  );
}
export default Interview;
