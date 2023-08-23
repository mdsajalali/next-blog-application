/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
