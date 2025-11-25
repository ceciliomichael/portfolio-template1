import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    AI_MODEL: process.env.AI_MODEL || 'qwen/qwen3-vl-4b',
    AI_BASE_URL: process.env.AI_BASE_URL || 'http://localhost:1234/v1',
  },
};

export default nextConfig;
