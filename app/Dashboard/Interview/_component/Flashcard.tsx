"use client";

import { useState } from "react";

type FlashcardProps = {
  question: string;
  answer: string;
};

export default function Flashcard({ question, answer }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-xl h-64 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d rounded-xl ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-primary text-primary-content rounded-xl p-6 flex items-center justify-center text-center text-lg backface-hidden">
          {question}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-accent text-accent-content rounded-xl p-6 flex items-center justify-center text-center text-base backface-hidden transform rotate-y-180">
          {answer}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
