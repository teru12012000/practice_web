/*
  特定のイベントが起きたときにJSの処理を追加するためのブラウザAPIの機能
  ターゲット.addEventListener(イベント名,関数)

  データの保存
  localStorage.setItem('キー','値');

  データの取得
  localStorage.getItem('キー');
*/
const $form=document.getElementById('js-form');
const $input=document.getElementById('js-input');
const $ul=document.getElementById('js-ul');
const $todos=JSON.parse(localStorage.getItem('todos'));

const saveData=()=>{
  const $lists =document.querySelectorAll('li');
  let todos=[];
  $lists.forEach(list=>{
    let todo={
      text: list.innerHTML,
      completed: list.classList.contains("text-decoration-line-through")
    };
    todos.push(todo);
  });
  localStorage.setItem('todos',JSON.stringify(todos));
}

const contextmenuHandoler=(e,li)=>{
  e.preventDefault();
  li.remove();
  saveData();
}
const clickHandoler=(li)=>{
  li.classList.toggle("text-decoration-line-through");//toggleは切り替え
  saveData();
}
const add=(todo)=>{
  const $li=document.createElement('li');
  let textValue=$input.value;
  if(todo)
  {
    textValue=todo.text;
  }
  if(todo&&todo.completed)
  {
    $li.classList.add("text-decoration-line-through");
  }
  
  if(textValue)
  {
    $li.innerText=textValue;
    $li.classList.add("list-group-item");
    $ul.appendChild($li);
    $input.value="";
    saveData();
    $li.addEventListener('contextmenu',(e)=>contextmenuHandoler(e,$li));
    $li.addEventListener('click',()=>clickHandoler($li));
  }
}
const submitHandler=(e)=>{
  e.preventDefault();
  add();
}

if($todos)
{
  $todos.forEach(todo=>{
  add(todo);
  });
}

$form.addEventListener('submit', (e)=>submitHandler(e));

