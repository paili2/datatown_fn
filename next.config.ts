// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.another.com",
      },
      // 여러 도메인 허용하려면 아래처럼 추가
      // { protocol: 'https', hostname: 'cdn.another.com' }
    ],
  },
};

/* 
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   config options here 
} export default nextConfig;

*/
