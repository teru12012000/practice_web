/*
httpを読み込む
$ npm install --save-dev http

リロードしたら更新される
$ npm install -g nodemon
*/

const http =require('http');
const PORT=8000;

const html=require("fs").readFileSync("./index.html");
//webサーバーを作る

const server=http.createServer((req,res)=>{
  //ブラウザからアクセスが来た時の処理
  res.writeHead(200,{"Content-Type":"text/html"});//(スタータスコード,ヘッター情報)
  res.write(html);
  res.end();
});

server.listen(PORT,()=>{
  console.log("server running!");
});