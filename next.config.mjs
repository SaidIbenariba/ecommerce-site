/**
 * @template {import('next').NextConfig} T
 * @param {T} config
 *@constraint {{import("next").NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}
export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
});
