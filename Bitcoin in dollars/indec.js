//prompt using
const prompt = require('prompt-sync')();

var xmlhttp = new XMLHttpRequest();
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

xmlhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    var json = JSON.parse(this.responseText);
    parsejson(json);
  }
}
xmlhttp.open("GET" , url , true);
xmlhttp.send(); 
function parsejson(json){
  var time = "<b> Last update : " + json["time"]["updated"] + "</b>";
  var usdValue = "1 BTC equals to $" + json["bpi"]["USD"]["rate"];
  
  let gg =Number(prompt("Enter the amount of Bitcoin "));
  if(gg > 0  && gg<10000){
    var dolar =json["bpi"]["USD"]["rate_float"];
    console.log(gg);
    console.log(parseInt(dolar) * gg);
  }else{
    console.log(gg);
    console.log("Input is not a number")
  }


  document.getElementById("data").innerHTML = 
  time + "<br /><br />" + usdValue;
}