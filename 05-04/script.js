let btn = document.getElementById("myBtn");
let modal = document.getElementById('modal');
let closeButton = document.getElementById('close');
let bodyBackGround = document.getElementById('bodyBackGround');


for (let i = 0; i < modal.length; i++) {
    modal[i].onclick = showModal;
}

modal.classList.add('modal');

btn.onclick = function () {
    modal.style.display = "block";
    bodyBackGround.style.backgroundColor= "#000000c2";
}


closeButton.onclick = function(){
    modal.style.display = "none";

}