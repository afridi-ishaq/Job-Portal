"use client";

import { useState } from "react";

export default function ApplyForm({
  jobId,
}) {
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      resumeLink: "",
    });

  const [message, setMessage] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    const res = await fetch(
      "/api/applications",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          ...form,
          jobId,
        }),
      }
    );

    const data =
      await res.json();

    if (data.success) {
      setMessage(
        "Application Submitted Successfully!"
      );

      setForm({
        name: "",
        email: "",
        resumeLink: "",
      });
    } else {
      setMessage(
        data.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={
            handleChange
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={
            handleChange
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="resumeLink"
          placeholder="Resume Link"
          value={
            form.resumeLink
          }
          onChange={
            handleChange
          }
          className="w-full border p-3 rounded"
        />

        <button
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Submit Application
        </button>
      </form>

      {message && (
        <p className="mt-4 font-bold">
          {message}
        </p>
      )}
    </>
  );
}