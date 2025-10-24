/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NETLIFY_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
