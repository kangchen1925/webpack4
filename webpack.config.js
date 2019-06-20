let path = require('path');
module.exports = {

  mode: 'development',

  entry: {
    app: './app/app.js'
  },

  output: {
    path: path.resolve(__dirname + '/public')
  },

  //配置loader
  module: {

    //loader规则
    rules: [
      
      //css-loader
      {
        //匹配文件后缀
        test: /\.css$/,

        //使用loader
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }

    ]
  }
}