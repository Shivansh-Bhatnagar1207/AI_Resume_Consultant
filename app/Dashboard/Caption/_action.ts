"use server";
import { model } from "@/lib/GenAI";

export async function caption(formData: FormData) {
  const userInput = formData.get("userInput");
  const tone = formData.get("tone");

  if (!userInput || !tone) {
    return { error: "Missing fields" };
  }

  const prompt = `Generate a professional LinkedIn post caption based on: ${userInput}, in a ${tone} tone. Return only one option as the output.`;

  try {
    const response = await model.generateContent(prompt);

    const generatedText =
      response?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No caption generated";

    return { result: generatedText };
  } catch (error) {
    console.error("Error generating caption:", error);
    return { error: "Failed to generate caption" };
  }
}
