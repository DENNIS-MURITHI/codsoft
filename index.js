let tablinks = document.getElementsByClassName('sub-links')
let tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname) {
// Remove the 'active-link' cl a ss from all tab links
for (tablink of tablinks) {
    tablink.classList.remove("active-link");
}

// Hide all tab contents
for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab");
}


// this is code for sidemenu
let sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}