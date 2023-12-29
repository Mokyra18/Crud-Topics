"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description, author, category, language, tags, location }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newCategory, setNewCategory] = useState(category);
  const [newLanguage, setNewLanguage] = useState(language);
  const [newTags, setNewTags] = useState(tags);
  const [newLocation, setNewLocation] = useState(location);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newAuthor, newCategory, newLanguage, newTags, newLocation }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <input
        onChange={(e) => setNewAuthor(e.target.value)}
        value={newAuthor}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Author"
      />

      <input
        onChange={(e) => setNewCategory(e.target.value)}
        value={newCategory}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Category"
      />

      <input
        onChange={(e) => setNewLanguage(e.target.value)}
        value={newLanguage}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Language"
      />

      <input
        onChange={(e) => setNewTags(e.target.value)}
        value={newTags}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Tags"
      />

      <input
        onChange={(e) => setNewLocation(e.target.value)}
        value={newLocation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Location"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
