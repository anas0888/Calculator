let allBtn = document.querySelectorAll(".btn")	

allBtn.forEach((Btn,index)=> {
Btn.addEventListener('click',() =>{
	console.log(Btn.textContent);

let display = document.getElementById('display')

let clickedValue = Btn.textContent;
display.textContent = display.textContent + clickedValue;

})
})
