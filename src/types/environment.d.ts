export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string;
      NEXT_PUBLIC_API_BASE_URL: string;
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILJS_ENG_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
    }
  }
}
