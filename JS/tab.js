const allTabs = document.querySelectorAll(".tab-wrapper .tab-header .tab")
const tabContent = document.querySelectorAll(".tab-wrapper .tab-contents .tab-content")

const showtabContent = (evt,tab) => {
    allTabs.forEach(Item => {
        Item.classList.remove("active-tab")
    });
    
    tabContent.forEach(content => {
        content.style.display = "none"
        content.classList.remove("active-content")
    });
    document.getElementById(tab).style.display = "block";
    document.getElementById(tab).className += " active-content";

    evt.currentTarget.className += " active-tab";
}