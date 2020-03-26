//var acc = document.getElementsByClassName("accordion");
let acc = document.getElementsByClassName('accordion')

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        
        this.classList.toggle('active')
        
        let panel = this.nextElementSibling
        
        if(panel.style.maxHeight){
            
            panel.style.maxHeight = null
            
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
        
    })
}

/*
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
*/