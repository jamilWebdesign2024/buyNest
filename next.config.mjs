/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ds.rokomari.store",
      },
      {
        protocol: "https",
        hostname: "readersmeet.com", // যদি এই ডোমেইন থেকেও ইমেজ থাকে
      },
    ],
  },
};

export default nextConfig;
