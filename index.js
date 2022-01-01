let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let closeIcon = document.getElementById("closeIcon");

let hiddenCard = document.getElementById('hidden-card')

function openHidden() {
hiddenCard.style.visibility = "visible"
hiddenCard.style.opacity = 1

}
function closeByBtn() {
  hiddenCard.style.visibility = "hidden"
  hiddenCard.style.opacity = 0
}
function closeByIcon() {
  hiddenCard.style.visibility = "hidden"
  hiddenCard.style.opacity = 0
}
closeBtn.onclick = closeByBtn
closeIcon.onclick = closeByIcon
openBtn.onclick = openHidden;
