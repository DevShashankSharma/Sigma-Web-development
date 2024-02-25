/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.freepik.com',
                port: '',
                pathname: '',
            },
        ],
    },
};

export default nextConfig;
