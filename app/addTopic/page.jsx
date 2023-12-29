"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !author  || !category  || !language  || !tags  || !location) {
      alert("Field are required.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, author, category, language, tags, location }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <input
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Author"
      />

      <input
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Category"
      />

      <input
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Language"
      />

      <input
        onChange={(e) => setTags(e.target.value)}
        value={tags}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Tags"
      />

      <input
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Location"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
