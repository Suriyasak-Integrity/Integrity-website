module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,            // ✅ รองรับ .js และ .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            sourceType: 'module'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],       // ✅ เสริมให้นำเข้าไฟล์ JSX ได้เนียน
  },
};
