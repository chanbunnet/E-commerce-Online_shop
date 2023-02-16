const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');



const close =document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}





var removebtncart =document.getElementsByClassName('fa-times');
console.log(removebtncart)
for(var i=0; i<removebtncart.length; i++)
{
    var button =removebtncart[i]
    button.addEventListener('click',function(event){
        var buttonclick = event.target
            buttonclick.parentElement.parentElement.remove()
        
    })
}  

