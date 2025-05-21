"use client";
import React, { useState } from "react";
import { ResumeCreate } from "./_action";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./_component/Template";

export default function ResumeForm() {
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);

  const addField = (setter, obj) => setter((prev) => [...prev, obj]);

  const handleChange = (setter, index, field, value) => {
    setter((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field.toLowerCase()]: value } : item
      )
    );
  };

  const removeField = (setter, index) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("education", JSON.stringify(education));
    // ✅ Split responsibilities string into an array
    const exp = experience.map((exp) => ({
      ...exp,
      responsibilities: exp.responsibilities
        ? exp.responsibilities.split(",").map((r) => r.trim())
        : [],
    }));
    formData.append("experience", JSON.stringify(exp));
    formData.append("projects", JSON.stringify(projects));

    setResult(undefined);
    setError("");

    try {
      const response = await ResumeCreate(formData);
      if (response.error) {
        setError(response.error);
      } else {
        setResult(response.data);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
        <Link
          href={"/Dashboard"}
          className="border rounded-full p-2 border-gray-700 fixed top-5 left-5 hover:bg-gray-200 transition"
        >
          <IoIosArrowBack size={28} className="text-gray-700" />
        </Link>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200"
        >
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Create Your Resume
          </h1>
          <div className="space-y-6">
            {[
              "Full Name",
              "Email",
              "Phone Number",
              "LinkedIn",
              "GitHub",
              "Desired Job Role",
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field}:
                </label>
                <input
                  type={field.includes("Email") ? "email" : "text"}
                  name={field.toLowerCase().replace(/\s/g, "")}
                  required={
                    !field.includes("LinkedIn") && !field.includes("GitHub")
                  }
                  placeholder={`Enter your ${field}`}
                  className="block w-full border rounded-lg p-3"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Skills (comma-separated):
              </label>
              <textarea
                name="skills"
                placeholder="e.g., Python, Java, React"
                className="border w-full rounded-md p-2"
              />
            </div>

            {[
              {
                title: "Education",
                data: education,
                setData: setEducation,
                fields: ["Degree", "Institution", "Year"],
              },
              {
                title: "Experience",
                data: experience,
                setData: setExperience,
                fields: [
                  "Role",
                  "Company",
                  "Duration",
                  "Responsibilities (comma-separated)",
                ],
              },
              {
                title: "Projects",
                data: projects,
                setData: setProjects,
                fields: ["Title", "GitHub Link", "Description"],
              },
            ].map(({ title, data, setData, fields }, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h2 className="text-lg font-semibold">{title}</h2>
                {data.map((item, index) => (
                  <div key={index} className="border p-4 rounded-md my-2">
                    {fields.map((field) => (
                      <div key={field} className="mb-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          {field}:
                        </label>
                        <input
                          type="text"
                          value={item[field.toLowerCase()] || ""}
                          onChange={(e) =>
                            handleChange(setData, index, field, e.target.value)
                          }
                          className="block w-full border rounded-lg p-2"
                          placeholder={`Enter ${field}`}
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => removeField(setData, index)}
                      className="bg-red-500 text-white px-3 py-1 rounded mt-2 hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  onClick={() =>
                    addField(
                      setData,
                      fields.reduce(
                        (acc, field) => ({ ...acc, [field.toLowerCase()]: "" }),
                        {}
                      )
                    )
                  }
                >
                  Add {title}
                </button>
              </div>
            ))}

            {error && <p className="text-red-500 font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Generate Resume
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto flex-row overflow-hidden">
      <div className="my-20">
        <Link
          href={"/Dashboard"}
          className="border rounded-full p-2 border-gray-700 fixed top-5 left-5 hover:bg-gray-200 transition"
        >
          <IoIosArrowBack size={28} className="text-gray-700" />
        </Link>
      </div>
      <PDFViewer width="100%" height="800px">
        <MyDocument data={result} />
      </PDFViewer>
    </div>
  );
}
