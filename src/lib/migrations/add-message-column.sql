-- Add message column to existing contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS message TEXT NOT NULL DEFAULT '';

-- Remove the default after adding the column (for future inserts to require a message)
ALTER TABLE contact_submissions 
ALTER COLUMN message DROP DEFAULT;
