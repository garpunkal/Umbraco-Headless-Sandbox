/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly IMAGE_BASE_URL: string;
    readonly API_BASE_URL: string;
    readonly UMBRACO_API_KEY: string;
    readonly UMBRACO_PREVIEW: bool;
    readonly DISABLE_SSR:bool;
    readonly NODE_ENV: string;
    readonly NODE_TLS_REJECT_UNAUTHORIZED: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }