const today= new Date();
days=[
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土"
]

const outputDate=(date)=>{
  let outputText="「"+date.getFullYear() +"年";
  outputText+=(date.getMonth()+1)+"月";
  outputText+=date.getDate()+"日　";
  outputText+=date.getHours()+"時";
  outputText+=date.getMinutes()+"分";
  outputText+=date.getSeconds()+"秒　";
  outputText+=(days[date.getDay()])+"曜日です」";

  return outputText;
}


document.getElementById('date').textContent="今は"+outputDate(today);

const targetDate= new Date(2022, 7-1 ,23);

let second=Math.ceil((targetDate-today)/(1000*60*60*24));


today.setDate(today.getDate()+1);
document.getElementById('tomorrow').textContent="明日の今は"+outputDate(today);
document.getElementById('countDown').textContent="○○まであと"+second+"日";

