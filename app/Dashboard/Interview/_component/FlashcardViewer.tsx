"use client";

import { useState, useEffect } from "react";
import { generateFlashCards, FlashCard as FlashcardType } from "../_action";
import Flashcard from "./Flashcard";

type FlashcardViewerProp = {
  topic: string;
};

export default function FlashcardViewer({ topic }: FlashcardViewerProp) {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadCards = async () => {
    setLoading(true);
    const cards = await generateFlashCards(topic);
    setFlashcards(cards);
    setCurrentIndex(0);
    setLoading(false);
  };

  useEffect(() => {
    loadCards();
  }, []);

  const currentCard = flashcards[currentIndex];
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8">
      <h2 className="text-2xl font-bold">Topic: {topic}</h2>

      {loading && (
        <span className="loading loading-spinner text-primary"></span>
      )}

      {!loading && currentCard && (
        <Flashcard
          question={currentCard.question}
          answer={currentCard.answer}
        />
      )}

      {!loading && flashcards.length > 0 && (
        <div className="flex gap-4 mt-4">
          <button
            className="btn"
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="btn"
            onClick={() =>
              setCurrentIndex((i) => Math.min(i + 1, flashcards.length - 1))
            }
            disabled={currentIndex === flashcards.length - 1}
          >
            Next
          </button>
        </div>
      )}

      <button
        className="btn btn-accent mt-6"
        onClick={loadCards}
        disabled={loading}
      >
        🔁 Regenerate Flashcards
      </button>
    </div>
  );
}
