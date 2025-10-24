import { neon } from "@netlify/neon";

export type ContactSubmission = {
  name: string;
  email: string;
};

// Initialize Neon connection
const sql = neon(import.meta.env.VITE_NETLIFY_DATABASE_URL || "");

export { sql };
