window.addEventListener("scroll",function(){
  let $scroll=this.document.documentElement.scrollTop;
  document.getElementById("scrollvalue").textContent=$scroll;

  if($scroll>=300)
  {
    document.querySelector("main").classList.add("test");
  }
  else
  {
    document.querySelector("main").classList.remove("test");
  }
})