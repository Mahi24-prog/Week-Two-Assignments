var drawerBtn = document.querySelector(".drawer-btn")
var dismissableSidebar = document.querySelector(".dismissible-sidebar")
var sidebarItems = document.querySelector(".sidebar-items")

drawerBtn.addEventListener("click", ()=>{
    if(dismissableSidebar.style.display === "none"){
        dismissableSidebar.style.display = "flex"
    }else{
        dismissableSidebar.style.display = "none"
    }
})
