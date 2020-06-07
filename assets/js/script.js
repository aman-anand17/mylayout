
function myfun(){
	var h = document.getElementById('item');
	h.classList.toggle("hide");
}
function go()
{
	var open = document.getElementById("sidenav");
	open.classList.toggle('hide');
	var arrow = document.getElementById("sidebtn");
	arrow.classList.toggle("hide");
	var hh = document.getElementById("close");
hh.addEventListener("click", close);

}

function cl()
{
	var close = document.getElementById("sidenav");
	close.classList.toggle('hide');
	var arrow = document.getElementById("sidebtn");
	arrow.classList.toggle("hide");

}

