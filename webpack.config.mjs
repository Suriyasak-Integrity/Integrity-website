module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,       // รองรับ .mjs ด้วย
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            sourceType: 'module'   // บังคับเป็น module
          }
        }
      }
    ]
  }
};
