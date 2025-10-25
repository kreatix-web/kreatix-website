/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NETLIFY_DATABASE_URL: string;
  readonly VITE_CRM_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
