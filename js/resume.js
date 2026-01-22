//const ShowQRcode = document.getElementById("ShowQRcode");
//const QRcode = document.getElementById("QRcode");

//ShowQRcode.addEventListener("click", function(e){
  //e.stopPropagation();  //cause step<1> 这里也要阻止冒泡到window 如果不阻止，点击其它处就会关闭QRCode
  //QRcode.style.display = "block"
//})

//点击空白处，QRCode关闭 -- step<1>
//document.addEventListener('click',function(){
  //QRcode.style.display = 'none';
//})

const showBtn = document.getElementById("showQRCode");
const QRCode = document.querySelector(".QRCode");
const CloseBtn = document.querySelector(".CloseQRCode");

showBtn.addEventListener("click", function(e){
  e.preventDefault(); //阻止<a href="#"...跳动
  QRCode.style.display = "block";
})

CloseBtn.addEventListener("click", function(){
  QRCode.style.display = "none";
})