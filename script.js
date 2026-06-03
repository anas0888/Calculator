
let allBtn = document.querySelectorAll(".btn")	
let display = document.getElementById('display')

	let num1 = null;
	let num2 = null;
	let displayValue = "";
        let operation = null;

const add = (a,b) => {
return a + b
};

const sub = (a,b) => {
return a - b;
};

const division = (a,b) => {
return a / b
};

const multiply = (a,b) => {
return a * b
};


let operate = (num1,num2,operation) => {
if(operation === '+'){
return add(num1,num2)
}
else if(operation === '-'){
return sub(num1,num2)
}
else if(operation === '*'){
return multiply(num1,num2)
}
else if(operation === '/'){
return division(num1,num2)
}
};




allBtn.forEach((Btn,index)=> {
Btn.addEventListener('click',() =>{
	let value = Btn.textContent;
	console.log(Btn.textContent)


let clickedValue = Btn.textContent;






if(!isNaN(value)){
displayValue  += value;
	display.textContent = displayValue;
}
else if (value === "+" || value === "-" || value === "*" ||value === "/" ){
num1 = Number(displayValue);
	operation = value;
	displayValue = "";
}
else if (value === "="){
num2 = Number(displayValue);
	const result = operate(num1,num2,operation);
	display.textContent = result;
	displayValue = result.toString();
	
}


})
})



