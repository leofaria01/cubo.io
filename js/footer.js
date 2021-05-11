var data = new Date()
var ano = data.getFullYear()
var rodape = window.document.getElementById('footer')

rodape.innerHTML = `<span id="textfoot">&copy;</span> ${ano} | Do <span id="textfoote">+</span> Developer`

var text1 = document.getElementById('textfoot');
text1.addEventListener("load", init(), false);

function changeColor1() {
    text1.style.color = "#4a9acc";
}
function init() {
    setTimeout(changeColor1, 3000);
}

var text = document.getElementById('textfoote');
text.addEventListener("load", init(), false);

function changeColor() {
    text.style.color = "#51CBEE";
}
function init() {
    setTimeout(changeColor, 3000);
}