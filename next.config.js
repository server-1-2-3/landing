module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        port: "",
        pathname: "/**",
      },
    ],

  },
};
