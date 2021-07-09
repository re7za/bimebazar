module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bimebazar.com"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://bimebazar.com/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/friendship",
        permanent: true,
      },
    ];
  },
};
