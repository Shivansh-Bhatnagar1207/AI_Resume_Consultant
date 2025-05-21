// components/FileUploader.tsx
export function FileUploader() {
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file, file.name);
    const res = await fetch("http://127.0.0.1:8000/api/process-pdf", {
      method: "POST",
      body: form,
    });

    const parsed = await res.json();
    console.log(parsed);
  }

  return <input type="file" onChange={handleChange} className="border border-gray-400 border-dashed w-full h-12 p-3 text-gray-400 rounded-md" />;
}
