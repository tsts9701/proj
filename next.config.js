/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["megasport.ua", "res.cloudinary.com"],
    },
};

module.exports = nextConfig;
