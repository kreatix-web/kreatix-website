-- Add converted and no_prospect columns to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS converted BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS no_prospect BOOLEAN NOT NULL DEFAULT false;
