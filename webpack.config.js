module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,                  // ให้ทำงานเฉพาะ .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            sourceType: 'module'        // ✅ แก้ตรงนี้สำคัญ!
          }
        }
      }
    ]
  }
};
