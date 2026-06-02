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

let num,nextNum, operation;


let operate = document.querySelectorAll('operations')

operate = (num1,num2,operation) => {
if(operation == '+'){
return add(num1,num2)
}
else if(operation == '-'){
return sub(num1,num2)
}
else if(operation == '*'){
return multiply(num1,num2)
}
else if(operation == '/'){
return division(num1,num2)
}
};



let allBtn = document.querySelectorAll(".btn")	

allBtn.forEach((Btn,index)=> {
Btn.addEventListener('click',() =>{
	console.log(Btn.textContent);

let display = document.getElementById('display')

let clickedValue = Btn.textContent;
display.textContent = display.textContent + clickedValue;

})
})
