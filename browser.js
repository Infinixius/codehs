const title = document.getElementsByClassName("__abacus_editor-label")[0].innerText;
const code = document.getElementsByClassName("ace_scroller")[0].innerText;

var data = {
	title: title,
	code: btoa(code),
	unit: title.split(".")[0],
	lesson: title.split(".")[0] + "." + title.split(".")[1],
};

alert(JSON.stringify(data));

// Bookmarklet: javascript:(function()%7Bconst%20title%20%3D%20document.getElementsByClassName(%22__abacus_editor-label%22)%5B0%5D.innerText%3Bconst%20code%20%3D%20document.getElementsByClassName(%22ace_scroller%22)%5B0%5D.innerText%3Bvar%20data%20%3D%20%7Btitle%3A%20title%2Ccode%3A%20btoa(code)%2Cunit%3A%20title.split(%22.%22)%5B0%5D%2Clesson%3A%20title.split(%22.%22)%5B0%5D%20%2B%20%22.%22%20%2B%20title.split(%22.%22)%5B1%5D%2C%7D%3Balert(JSON.stringify(data))%7D)()