"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingState = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "bug",
  };

  const [formData, setFormData] = useState(startingState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>

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

        <input type="submit" value="Create ticket" className="btn" />
      </form>
    </div>
  );
};

export default TicketForm;
