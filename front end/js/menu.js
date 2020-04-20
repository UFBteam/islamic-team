/* Variables */
var side_menu = document.getElementsByClassName("menu")[0];
var m_menu_b = document.getElementsByClassName("m-menu-b")[0];
var menu_bars = document.getElementsByClassName("menu-bars");
var m_menu = document.getElementsByClassName("m-menu")[0];
var menu_status = false;

/* Fixed Menu */
window.onscroll = function () {
    if (document.documentElement.scrollTop > 160) {
        side_menu.style.position = "fixed";
        side_menu.style.top = "0";
    } else {
        side_menu.style.position = "absolute";
    }
}

/* Open & Close Menu */
m_menu_b.onclick = function () {
    if (menu_status == false) {
        menu_bars[0].style.transform = "rotate(45deg)";
        menu_bars[1].style.transform = "rotate(-45deg)";
        menu_bars[1].style.marginTop = "-7px";
        menu_bars[2].style.display = "none";
        m_menu.style.height = "300px";
        menu_status = true;
    } else if(menu_status == true) {
        menu_bars[0].style.transform = "rotate(0deg)";
        menu_bars[1].style.transform = "rotate(0deg)";
        menu_bars[1].style.marginTop = "0px";
        menu_bars[2].style.display = "block";
        m_menu.style.height = "0px";
        menu_status = false;
    }
}