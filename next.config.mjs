/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/019ad56e-aab1-6ea3-9140-2640ed66ebb3',
        permanent: false, // 307 temporary redirect
      },
    ];
  },
};

export default nextConfig;
