/*
function hamburguer(x){
	x.classList.toggle("change");
	var c = document.querySelector(".content");
	c.style.opacity = "1";
}
*/
let menuIcon = document.getElementsByClassName('menu-icon')

for(let i = 0; i < menuIcon.length; i++){
    
    menuIcon[i].addEventListener('click', function(){
       // console.log('click')
        
        this.classList.toggle('change')
        
        let content = this.nextElementSibling
        
        if(content.style.maxHeight){
            
            content.style.maxHeight = null
        }else{
            content.style.maxHeight = content.scrollHeight + 'px'
        }

    })
}


