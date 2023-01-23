let length=parseInt(prompt("enter sqaure length"));
var a="";

for(i=0;i<length;i++){
	for(j=0;j<length;j++){
		a+="*";
	}
	a+="\n";
}
console.log(a);