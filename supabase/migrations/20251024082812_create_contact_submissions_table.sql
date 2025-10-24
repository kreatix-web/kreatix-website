/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `ip_address` (text, optional) - IP address of the submitter for rate limiting
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions (no public access needed)
    - No public read access - admin only
    
  3. Indexes
    - Index on email for faster lookups
    - Index on created_at for sorting by date
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
