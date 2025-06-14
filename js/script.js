//to top of the page
function btn(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
//to bottom
function btn2(){
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    })
}