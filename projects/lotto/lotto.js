b=document.querySelector("button");
b.addEventListener("click",klirosi);
k=document.querySelector("#results");
p=document.querySelector("#past");

function klirosi(){
e=1;
k.innerHTML="";
	let n,pinakas=[];
	for (var i=1;i<=6;i++){
		do{
		n=Math.floor(Math.random()*49+1);}
		while(pinakas.indexOf(n)!=-1);
	pinakas.push(n);
	k.innerHTML+=i+"ος αριθμός: "+n+"</br>";
	}
	pinakas.sort(function(a,b){return a-b});
	k.innerHTML+="</br>"+pinakas;
	p.innerHTML+="&otimes;  :"+pinakas+"</br>";

}