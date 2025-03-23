module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            sourceType: 'module',  // เพิ่มการตั้งค่า sourceType เป็น module
          },
        },
      },
    ],
  },
};
