"use client";

import { model } from "@/lib/GenAI";

export async function ResumeCreate(formData) {
  const fullName = formData.get("fullname");
  const phoneNumber = formData.get("phonenumber");
  const email = formData.get("email");
  const linkedin = formData.get("linkedin");
  const github = formData.get("github");
  const jobRole = formData.get("jobrole");
  const skills = formData.get("skills");

  const education = formData.get("education");
  const experience = formData.get("experience");
  const projects = formData.get("projects");

  if (!fullName || !phoneNumber || !skills) {
    return { error: "Missing required fields" };
  }

  let educationArray = [];
  let experienceArray = [];
  let projectsArray = [];

  try {
    educationArray = education ? JSON.parse(education) : [];
    experienceArray = experience ? JSON.parse(experience) : [];
    projectsArray = projects ? JSON.parse(projects) : [];
  } catch (err) {
    return { error: "Invalid JSON data in form fields" };
  }

  const prompt = `
  You are an AI resume builder. Generate a professional, ATS-friendly resume based on the following user inputs.
  
  Personal Info:
  - Full Name: ${fullName}
  - Email: ${email}
  - Phone Number: ${phoneNumber}
  - LinkedIn: ${linkedin || "N/A"}
  - GitHub: ${github || "N/A"}
  - Desired Job Role: ${jobRole}
  
  Skills:
  ${skills}
  
  Education:
  ${
    educationArray
      .map(
        (edu, i) =>
          `#${i + 1}: ${edu.degree} from ${edu.institution} (${edu.year})`
      )
      .join("\n") || "N/A"
  }
  
  Experience:
  ${
    experienceArray
      .map(
        (exp, i) =>
          `#${i + 1}: ${exp.role} at ${exp.company} for ${
            exp.duration
          }. Responsibilities: ${exp.responsibilities?.join(", ")}`
      )
      .join("\n") || "N/A"
  }
  
  Projects:
  ${
    projectsArray
      .map(
        (proj, i) =>
          `#${i + 1}: ${proj.title} - ${proj.description} (GitHub: ${
            proj["github link"]
          })`
      )
      .join("\n") || "N/A"
  }
  
  Instructions:
  - Generate a summary under 50 words tailored to the ${jobRole}.
  - Return the response strictly in the following JSON format:
  {
    data: {
      "fullName": "string",
      "email": "string",
      "phoneNumber": "string",
      "skills": ["string"],
      "linkedin": "string",
      "github": "string",
      "summary": "string",
      "education": [{"degree": "string", "institution": "string", "year": "string"}],
      "experience": [{"role": "string", "company": "string", "duration": "string", "responsibilities": ["string"]}],
      "projects": [{"title": "string", "description": "string", "githubLink": "string"}]
    }
  }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const resumedata = JSON.parse(cleanedText);
    console.dir(resumedata);
    return resumedata;
  } catch (err) {
    return { error: "Failed to generate resume data." };
  }
}
