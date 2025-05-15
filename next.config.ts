import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete
    // even if your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  // Expose environment variables to the browser
  env: {
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_ELEVENLABS_AGENT_ID:
      process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
    NEXT_PUBLIC_FINE_TUNED_MODEL: process.env.NEXT_PUBLIC_FINE_TUNED_MODEL,
  },
  // Any other config options here
};

export default nextConfig;
