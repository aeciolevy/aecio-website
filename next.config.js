/** @type {import('next').NextConfig} */
const { withContentCollections } = require("@content-collections/next");

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

module.exports = withContentCollections(nextConfig);

