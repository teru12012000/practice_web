const express=require('express');//expressの読み込み
const app=express();
const sqlite3=require('sqlite3');//sqlite3の読み込み
const dbPath="app/db/database.sqlite3";
const path=require('path');//pathの読み込み

app.use(express.static(path.join(__dirname,'public')));//サーバーを立ち上げた際のファイル,フォルダを設定


app.get('/api/v1/users',(req,res)=>{
  const db=new sqlite3.Database(dbPath);

  db.all('select * from users',(err,rows)=>{
    res.json(rows);
  });
  db.close();
})

app.get('/api/v1/users/:id',(req,res)=>{
  const db=new sqlite3.Database(dbPath);
  const id=req.params.id;
  //sql のところに$をつけるとjsの処理が書ける！
  //1つのときはdb.get
  db.get(`select * from users where id=${id}`,(err,row)=>{
    res.json(row);
  });
  db.close();
})

app.get('/api/v1/search',(req,res)=>{
  const db=new sqlite3.Database(dbPath);//dbの情報収集
  const keyword=req.query.q;//keywordを抜いてくる
  db.all(`select * from users where name like "%${keyword}%"`,(err,rows)=>{
    res.json(rows);
  });
  db.close();
})

const port=process.env.PORT||3000;

app.listen(port);
console.log("listen on port:"+port);//サーバーが立ち上がりましたよっていう確認