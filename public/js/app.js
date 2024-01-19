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
ciblechoice.forEach((element, index) => {
    element.addEventListener('click', () => {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add("d-none");
        }
        menu[index].classList.remove("d-none");
    });
});
