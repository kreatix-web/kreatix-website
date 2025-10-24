import { neon } from "@netlify/neon";

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

// Initialize Neon connection
const sql = neon(import.meta.env.VITE_NETLIFY_DATABASE_URL || "");

export { sql };
