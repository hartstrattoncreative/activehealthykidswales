declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_DATASET: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      SANITY_API_TOKEN: string;
      SANITY_STUDIO_PREVIEW_SECRET: string;
      NEXT_PUBLIC_SITE_URL: string;
      ANALYZE: string;
    }
  }
}
