const request=require("request");

const options={//&units=metricを付け加えるだけでよく知っている温度表記になる
  url:"https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=cb5c68c8f40ad585c71d77a71066edd5",
  method:"GET",
  json: true,
};

request(options,(err,res,body)=>{
  console.log(body.main.temp);
});