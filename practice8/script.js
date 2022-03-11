//JSで属性を設定・取得・確認

// 設定　setAttribute(属性名,値)
// 取得　getAttribute(属性名)
// 確認　hasAttribute(属性名)

document.querySelectorAll('ul li a').forEach(element=>{
  if(element.getAttribute('href')!='/')
  {
    element.setAttribute('target','_blank');
  }
});
