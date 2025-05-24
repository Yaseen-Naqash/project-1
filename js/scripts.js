let myNav = document.getElementById('my-nav');
let myDiv = document.querySelector('.wierd')
myNav.style.display
myNav.innerText
// myNav.classList.add('navigation2')

let myflag = true;

myDiv.addEventListener("click",function name(params) {
    something();
    myflag = false;

})

function something(){
    myNav.classList.add('navigation2')

}



function change_color(){
    if (!myflag){
        myNav.classList.remove('navigation2')
        myflag = true;
    }
}
