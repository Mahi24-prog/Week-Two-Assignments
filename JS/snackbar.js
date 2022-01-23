var snackBtn = document.querySelector(".snack-btn")
var snackMsg = document.querySelector(".snack-msg")
const msgCancle = document.querySelector(".msg-cancle")

snackBtn.addEventListener("click",()=>{
    snackMsg.style.display = "flex"
    setTimeout(function myGreeting(){snackMsg.style.display = "none"}, 3000);
})

msgCancle.addEventListener("click",()=>{
    snackMsg.style.display = "none";
})