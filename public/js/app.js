let mymenuchoices = document.querySelector(".menu-choices")
console.log(mymenuchoices);
let mymenu = document.querySelector(".menu-menu")
console.log(mymenu);
let menu = mymenu.children
console.log(menu);
let ciblechoice = mymenuchoices.children
console.log(ciblechoice);
ciblechoice = Array.from(ciblechoice);
console.log(ciblechoice);

let myloginbut = document.querySelector('.login-but')
console.log(myloginbut);
let mysignupbut = document.querySelector('.sign-up-but')
console.log(mysignupbut);
let mylogin = document.querySelector('.Login')
console.log(mylogin);
let mysignup = document.querySelector('.sign-up')
console.log(mysignup);
let modalfooter = document.querySelector('.modal-footer')
myloginbut.addEventListener('click',()=>{
    mylogin.classList.toggle('d-none')
    mysignup.classList.add('d-none')
})
mysignupbut.addEventListener('click',()=>{
    mysignup.classList.toggle('d-none')
    mylogin.classList.add('d-none')
})


ciblechoice.forEach((element, index) => {
    element.addEventListener('click', () => {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add("d-none");
        }
        menu[index].classList.remove("d-none");
    });
});
