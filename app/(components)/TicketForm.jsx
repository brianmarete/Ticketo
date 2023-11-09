"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const router = useRouter();
  const IS_EDITING = ticket._id !== "new";

  const startingState = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "bug",
  };

  if (IS_EDITING) {
    startingState.title = ticket.title;
    startingState.description = ticket.description;
    startingState.priority = ticket.priority;
    startingState.progress = ticket.progress;
    startingState.status = ticket.status;
    startingState.category = ticket.category;
  }

  const [formData, setFormData] = useState(startingState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (IS_EDITING) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{IS_EDITING ? "Update your ticket" : "Create Your Ticket"}</h3>

        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required={true}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required={true}
          rows={5}
        />

        <label>Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required={true}
        >
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
          <option value="other">Other</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label>Progress</label>
        <input
          id="progress"
          name="progress"
          type="range"
          min={0}
          max={100}
          value={formData.progress}
          onChange={handleChange}
        />

        <label>Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="submit"
          value={IS_EDITING ? "Update ticket" : "Create ticket"}
          className="btn"
        />
      </form>
    </div>
  );
};

export default TicketForm;
