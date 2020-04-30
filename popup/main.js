const btn = document.querySelector('.btn')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.close')

//console.log(popup)
btn.addEventListener('click', () =>{
	//console.log('click')
	//popup.style.display = 'block'
	popup.classList.add('showpopup')

})

close.addEventListener('click', () =>{
	popup.classList.toggle('showpopup')	
})

popup.addEventListener('click', () => {
	popup.classList.remove('showpopup')
})
