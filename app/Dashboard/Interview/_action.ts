"use server";
import { model } from "@/lib/GenAI";

export type FlashCard = {
  question: string;
  answer: string;
};

export async function generateFlashCards(topic: string): Promise<FlashCard[]> {
  const prompt = `
  You are a helpful AI trained to create technical interview flashcards.
  
  Generate 10 concise interview questions on the topic ${topic} and their answers.
  Respond **only in raw JSON format**, as:
  [
    {
      "question": string,
      "answer": string,
    },
    ...
  ]
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]");
    const jsonString = text.slice(jsonStart, jsonEnd + 1);
    return JSON.parse(jsonString) as FlashCard[];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function generateQuiz(formdata: FormData) {
  const parseText = formdata.get("parsedText");
  const role = formdata.get("role");
  const industry = formdata.get("industry");

  const prompt = `
  Extract the skills from the provided resume data: ${parseText}

  Based on these skills, generate 10 technical interview questions for a candidate applying for a role in ${industry} and specific role is ${role}.

  - Each question should be multiple-choice with 4 options.
  - Clearly specify the correct answer for each question.
  - Provide a brief explanation for the correct answer.

  Return the response strictly in the following JSON format without any additional text:
  {
    "questions": [
      {
        "question": "string",
        "options": ["string", "string", "string", "string"],
        "correctAnswer": "string",
        "explanation": "string"
      }
    ]
  }
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const quiz = JSON.parse(cleanedText);

    return quiz.questions;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw new Error("Failed to generate quiz questions");
  }
}
