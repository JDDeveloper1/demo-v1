"use client";

import { FormEvent, useState } from "react";

export const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(false);

  const onContactFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    const elements = e.currentTarget.elements;

    Array.from(elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setStatus(res.status);
        setDisabled(res.message.length > 0);
      });
  };

  return (
    <div>
      <form className="form space-y-2" onSubmit={onContactFormSubmit}>
        <div className="form-control w-full">
          <label htmlFor="name" className="label cursor-pointer">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="name"
            id="name"
            required
            disabled={disabled}
          />
        </div>

        <div className="form-control w-full">
          <label htmlFor="email" className="label cursor-pointer">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            name="email"
            id="email"
            required
            disabled={disabled}
          />
        </div>

        <div className="form-control w-full">
          <label htmlFor="message" className="label cursor-pointer">
            <span className="label-text">Message</span>
          </label>
          <textarea
            rows={3}
            className="textarea textarea-bordered w-full"
            name="message"
            id="message"
            required
            disabled={disabled}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`btn btn-block !mt-4 ${
            disabled ? "btn-disabled" : "btn-primary"
          }`}
          disabled={disabled}
        >
          Send Message
        </button>
      </form>
      {message.length > 0 ? (
        <div
          className={`alert shadow-lg mt-4 ${
            status === "success" ? "alert-success" : "alert-error"
          }`}
        >
          <span>{message}</span>
        </div>
      ) : null}
    </div>
  );
};
