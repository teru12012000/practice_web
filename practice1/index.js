//変数
let unko='Hello World!';

//配列
let inoki=['いーち','にーい','さーん','ダーー！'];

//ループ
/*let index=0;
while(index < inoki.length)//=4
{
  console.log(inoki[index]);
  index++;//=5
}*/

//if-else この辺はいいや上もぶっちゃけ分かってます

//関数
const test=(arg)=>{
  //ここに処理を書く
  if(inoki.length>arg)
  {
    console.log('ボンバイエ！！');
  }
  else
  {
    console.log('ボンバ．．．！');
  }
};
//色々書き方はあるのだがアロー関数を書くのがいいらしい

//オブジェクト

const unko2={
  color:'pink',
  size:'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello World!');
  }
};

//console.log(window.innerWidth);
//documentについて
/*表示しているページ全体のオブジェクト*/

//windowについて
/*ブラウザ全体のオブジェクト*/

document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  window.alert('Hello!');
});

//event
/*ユーザーがアクションしたタイミングで何かの処理をする*/
