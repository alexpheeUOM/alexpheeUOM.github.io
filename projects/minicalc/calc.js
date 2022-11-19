var total=0;
var praxi="";
var temp=0;
b1=document.querySelector("#r1#");
b1.addEventListener("click",calc);
function calc(x){
  
  switch (x){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: synolo(x); 
            break;
    case 'C':total=0;
              temp=0;
              break;
    
    case '+':  praxi="+";
            temp=temp+total;
            total=0; 
            break;
	case '=': energia(praxi);
              break;
	case '-':praxi="-";
            temp=temp+total;
            total=0; 
            break;
   case '=': energia(praxi);
              break;
	case '*':praxi="*";
            temp=temp+total;
            total=0; 
            break;
   case '=': energia(praxi);
              break;
	case '/':praxi="/";
            temp=temp+total;
            total=0; 
            break;
   case '=': energia(praxi);
              break;   
  }
  document.querySelector('#result').value=total;
  
}
function synolo(x){
  if (total==0){ total=x;}
   else {total=total*10+x;}
}

function energia(pr){
  switch (pr){
    case '+': temp+=total;
    break;
	case '-':temp-=total;
	break;
	case '*':temp*=total;
	break;
	case '/':temp/=total;
	break;
      }
  total=temp;
  temp=0;
}