"use server";
import { model } from "@/lib/GenAI";
export async function linkedin(text: string) {
  if (!text) {
    return { error: "Missing field" };
  }

  const prompt = `Optimize the following LinkedIn profile for increased visibility, keyword relevance, and professional appeal:\n\n${text}\n\nProvide detailed optimization tips in bullet points. Ensure they are crisp, precise, and professional. Avoid general commentary and directly list improvements related to structure, keywords, and profile impact. Use an extra space between points and "-" to differentiate subpoints within the same point.`;

  try {
    const response = await model.generateContent(prompt);
    const generatedText =
      response?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No caption generated";
    return { result: generatedText };
  } catch (err) {
    return { err };
  }
}
