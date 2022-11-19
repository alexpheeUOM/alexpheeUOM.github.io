const btn=document.querySelector("#add-button");
btn.addEventListener("click",energia);
const it=document.querySelector("#item");

it.addEventListener("keyup",(e)=>{if (e.code=="Enter"){energia();}});
const lista=document.querySelector("#shopping-list");

function energia(){
	let proion=it.value;
	if (proion.length>0){
		let newli=document.createElement("li");
		newli.textContent=proion;
		let itbtn=document.createElement("button");
		itbtn.textContent="Διαγραφή";
		itbtn.addEventListener("click",diagrafi);
		newli.appendChild(itbtn);
		lista.appendChild(newli);
		it.value="";
		}}
function diagrafi(){
	this.parentNode.style.textDecoration="line-through";
}
	
