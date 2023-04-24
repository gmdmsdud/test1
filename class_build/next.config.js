/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  //getServerSideProps 들어있는페이지는 제외시켜줘
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
