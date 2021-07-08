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
};
