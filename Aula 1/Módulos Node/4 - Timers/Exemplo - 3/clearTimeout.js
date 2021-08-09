var a = setTimeout(function(){
	console.log('timer 1' + new Date);
},3000);

var b = setTimeout(function(){
	console.log('timer 2' + new Date);
},3000);

clearTimeout(a);