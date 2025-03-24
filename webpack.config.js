module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,             // ✅ ใช้กับไฟล์ .js
        exclude: /node_modules/,   // ✅ ไม่รวม node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
            sourceType: 'module'   // ✅ จุดสำคัญ!! ให้ Babel อ่านเป็น ES Module
          },
        },
      },
    ],
  },
};
