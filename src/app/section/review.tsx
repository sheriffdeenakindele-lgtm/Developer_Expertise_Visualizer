"use client";
import React from "react";
import { useState } from "react";

export default function Review() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send review to your API route
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, review }),
    });

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setReview("");
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <section className="mt-16 mb-20 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
        💬 Share Your Thoughts
      </h2>

      {submitted ? (
        <p className="text-green-500">Thank you for your feedback! 🙌</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md"
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg mb-3 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            placeholder="Your feedback..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-3 rounded-lg mb-3 h-32 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all"
          >
            Send Feedback
          </button>
        </form>
      )}
    </section>
  );
}
