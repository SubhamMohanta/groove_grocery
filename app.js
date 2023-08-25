var block = document.body
var button2= document.getElementById("butter")
console.log(button2);
button2.onclick=()=>{
  block.style.display="none";
  button2.style.backgroundColor="";
  button2.style.color="black";
  button2.innerHTML="Thank you for shopping with us";
  button2.style.fontSize="24px";
  button2.style.width= "410px";
}