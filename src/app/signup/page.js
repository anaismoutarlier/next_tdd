"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fields = [
  {
    name: "username",
    placeholder: "Username",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email address",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
  },
];

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (fields.some(field => !Boolean(formData[field.name]))) return;

    // Insert verification fetch
    console.log(formData.password !== formData.confirmPassword);
    if (formData.password !== formData.confirmPassword)
      return router.push("/signup/failure");
    router.push("/signup/success");
  };
  return (
    <main id="main" className={styles.main}>
      <h1>Sign Up</h1>
      <form id="signup" onSubmit={handleSubmit}>
        {fields.map(field => (
          <input
            key={field.name}
            {...field}
            onChange={handleChange}
            value={formData[field.name] || ""}
          />
        ))}
        <button
          type="submit"
          disabled={Object.keys(formData).length < fields.length}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
