const allBtn = document.querySelectorAll(".btn")	

allBtn.forEach((allBtn,index)=> {
allBtn.addEventListener('click',() =>{
	console.log(allBtn.textContent);
})
})
