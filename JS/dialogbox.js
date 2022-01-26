const dialogboxBtn = document.querySelectorAll(".dialogbox-btn")
const dialogbox = document.querySelectorAll(".dialogbox")
const btnInDialogbox = document.querySelectorAll(".btn-in-dialogbox")

const showDialogbox = (evt,id)=>{
    document.getElementById(id).style.display = "block"
    console.log(id)
}

window.onclick = function(event) {
    dialogbox.forEach(box => {
        if (event.target == box) {
            dialogbox.style.display = "none";
          }
          console.log(box)
    });
}

const closeDialog = ()=>{
    dialogbox.forEach(box => {
        box.style.display = "none";
    });
}

