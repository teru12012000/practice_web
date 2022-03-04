(()=>{
  const $doc=document;
  const $tab=$doc.getElementById('js-tab');
  const $nav=$tab.querySelectorAll('[data-nav]');//データ属性をとる
  const $content=$tab.querySelectorAll('[data-content]');
  const navLength=$nav.length;
  const ACTIVE_CLASS='is-active';
  //初期化
  const init=()=>{
    $content[0].style.display='block';
  };
  init();

  //クリックしたらおこるイベント
  const handleClick=(e)=>{
    e.preventDefault();//リンク要素を無効化させる
    //クリックされたnavとそのdetaを取得
    const $this=e.target;
    const targetVal=$this.dataset.nav;
    
    //console.log('Clicked!');

    //対象外のnav,contentsを一旦全てリセットする
    for(i=0;i<navLength;i++)
    {
      $content[i].style.display='none';
      $nav[i].classList.remove(ACTIVE_CLASS);    
    }
    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="'+targetVal+'"]')[0].style.display='block';//動的にコンテンツを取得する
    $nav[targetVal].classList.add(ACTIVE_CLASS);
    
    

  };

  //全nav要素に対して関数を適応
  
  for(i=0;i<navLength;i++)$nav[i].addEventListener('click',(e)=>handleClick(e));

  



})();//グローバル変数の汚染を防ぐ
//point
/*
htmlにおいてdeta-○○ってすると勝手にデータ属性が作れてしまう.
idとかclass使いたくないときに使える
*/