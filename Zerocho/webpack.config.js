const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실 서비스 : production
  devtool: "eval", // hidden-source-map

  resolve: {
    extensions: [".js", ".jsx"],
  }, // 확장자를 적어주면 entry에 확장자를 적지 않아도 된다.
  //중요
  entry: {
    app: ["./client"],
    // ./WordRelay.jsx파일은 client.jsx파일에서 이미 불러오므로 포함하지 않아도 된다.
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/, // 정규표현식
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          //plugin의 모음이 preset
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    //path를 이용하여 __dirname(현재 파일 경로)의 dist폴더를 자동으로 만들어준다.
    filename: "app.js",
  }, //출력
};

// 만드는 명령어 사용법
// 1. package-json에 script 부분에 webpack을 추가한다.
// 2. 콘솔창에 npx webpack
