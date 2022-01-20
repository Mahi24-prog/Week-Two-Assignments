var drawerBtn = document.querySelector(".drawer-btn")
var sidebar = document.querySelector(".sidebar")
var sidebarItems = document.querySelector(".sidebar-items")

drawerBtn.addEventListener("click", ()=>{
    if(sidebar.style.display === "none"){
        sidebar.style.display = "block"
    }else{
        sidebar.style.display = "none"
    }
})
