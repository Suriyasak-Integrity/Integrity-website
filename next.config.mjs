/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ ถ้าใช้ Next.js 13+ app directory
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
          sourceType: 'unambiguous',
        },
      },
    });
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
};

export default nextConfig;
