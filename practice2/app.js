const quiz =[
  {
    question:'ゲーム市場、最も売れたゲーム機は次のうちどれ?',
    answers:[
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  },
  {
    question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば?',
    answers:[
      'MOTHERS2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィー'
    ],
    correct:'MOTHERS2'
  },
  {
    question:'ファイナルファンタジーⅣの主人公の名前は?',
    answers:[
      'フリオニール',
      'クラウド',
      'ディーダ',
      'セシル'
    ],
    correct:'セシル'
  },

]
const quizLength=quiz.length;
let quizindex=0;
let score=0;

//問題と解答欄設定
const $button=document.getElementsByTagName('button');
const setupQuiz=()=>{
  document.getElementById('js-question').textContent=quiz[quizindex].question;
  for(i=0;i<quiz[quizindex].answers.length;i++)$button[i].textContent=quiz[quizindex].answers[i];
}
setupQuiz();
//クリック時の処理
const clickHandler =(e) =>{
  if(quiz[quizindex].correct==e.target.textContent)
  {
    score++;
    window.alert('正解です');
  }
  else
  {
    window.alert('不正解です');
  }

  quizindex++;

  if(quizLength>quizindex)
  {
    setupQuiz();
  }
  else
  {
    window.alert('終了!\nあなたの正解数は'+score+'/'+quizLength+'です.');
  }
}
let buttonLength=$button.length;
for(i=0;i<buttonLength;i++)
{
  $button[i].addEventListener('click',(e)=>{
    clickHandler(e);
  });
}
