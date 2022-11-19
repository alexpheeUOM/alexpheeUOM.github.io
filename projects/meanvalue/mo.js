	var sum=0;
	var plithos=0;
	var bath=0;
window.onload=function(){
	btn=document.querySelector("#submit");
	btn.addEventListener("click",calc);
	msg=document.querySelector("#error");
	msg.innerHTML="";
	mo=document.querySelector("#mean");
	mo.value=0;
	pl=document.querySelector("#count");
	pl.value=0;
	b=document.querySelector("#grade");
	rst=document.querySelector("button");
	rst.addEventListener("click",reset);
	b=document.querySelector("#grade");
	b.addEventListener("keyup",check);
}

function calc(){
	bath=Number(b.value);
	if(bath<0 || bath>10){
	msg.innerHTML="Επιτρέπονται αριθμοί από 0-10"}
	else{
	plithos+=1;
	sum+=bath;
	msg.innerHTML="";
	mo.value=sum/plithos;
	pl.value=plithos;
}}

function reset(){
	sum=0;
	plithos=0;
	bath=0;
	msg.innerHTML="";
	mo.value=0;
	pl.value=0;
	b.value=0;
}

function check(e){
	console.log(e.code);
if(e.code=="Enter"||e.code=="NumpadEnter"){calc();
}}