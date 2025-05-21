"use server";
import { model } from "@/lib/GenAI";


export async function resume(text : string, role : string) {  
  if (!text || !role) {
    return { error: "Missing required fields" };
  }

  const prompt = `Optimize the following resume for ATS compatibility based on the specified job role:\n\n${text}\n\nJob Role: ${role}\n\nProvide detailed optimization tips in bullet points. Ensure they are crisp, precise, and professional. Avoid general commentary and directly list improvements related to structure, keywords, and ATS optimization. Use an extra space between points and "-" to differentiate subpoints within the same point.`;

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
