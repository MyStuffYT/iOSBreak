// commented cuz slow
// import './output.css'
import TypeIt from "typeit";
document.addEventListener('DOMContentLoaded', () => {
function toggle() {
  document.getElementById("hamgry").classList.toggle("rotate-90")
}
});
if (document.getElementById("typewriter")) {
  new TypeIt("#typewriter", {
    strings: ["unleash", "set free", "jailbreak", "root", "break free", "escape"],
    breakLines: false,
    loop: true,
    deleteSpeed: 50,
    nextStringDelay: 2000
  }).go();
}