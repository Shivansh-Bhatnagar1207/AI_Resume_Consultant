import { GoogleGenerativeAI } from "@google/generative-ai";

const GenAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY);
export const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" });