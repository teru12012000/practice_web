const express=require('express');//expressの読み込み
const app=express();
const sqlite3=require('sqlite3');//sqlite3の読み込み
const dbPath="app/db/database.sqlite3";
const path=require('path');//pathの読み込み
const bodyParser=require('body-parser');
const { resolve } = require('path');
//リクエストのbodyをバースする設定
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
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
const run=(sql,db,res,message)=>{
  return new Promise((resolve,reject)=>{
    db.run(sql,(err)=>{
      if(err)
      {
        res.status(500).send(err);
        return reject();
      }
      else
      {
        res.json({message:message});
        return resolve();
      }
    });
  })
};
app.post('/api/v1/users',async(req,res)=>{
  const db=new sqlite3.Database(dbPath);
  const name=req.body.name;
  const profile=req.body.profile ? req.body.profile:"";
  const dateOfBirth=req.body.date_of_birth ? req.body.date_of_birth:"";
  await run(
    `insert into users (name,profile,date_of_birth) values ("${name}","${profile}","${dateOfBirth}")`,
    db,
    res,
    '新規ユーザを作成をしました'
    );
  db.close();
});

app.put('/api/v1/users/:id',async(req,res)=>{
  const db=new sqlite3.Database(dbPath);
  const id=req.params.id;

  //現在のデータの情報を取得
  db.get(`select * from users where id=${id}`,async(err,row)=>{
    const name=req.body.name ? req.body.name:row.name;
    const profile=req.body.profile ? req.body.profile:row.profile;
    const dateOfBirth=req.body.date_of_birth ? req.body.date_of_birth:row.date_of_birth;
    await run(
      `update users set name="${name}", profile="${profile}", date_of_birth="${dateOfBirth}"where id="${id}"`,
      db,
      res,
      'ユーザー情報を更新しました'
    );
  });
  
  db.close();
});
app.delete('/api/v1/users/:id',async(req,res)=>{
  const db=new sqlite3.Database(dbPath);
  const id=req.params.id;
  await run(
    `delete from users where id="${id}"`,
    db,
    res,
    'ユーザー情報を更新しました'
  );
  
  db.close();
});
const port=process.env.PORT||3000;
app.listen(port);
console.log("listen on port:"+port);//サーバーが立ち上がりましたよっていう確認