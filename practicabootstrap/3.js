const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

console.log(a.value);
console.log(b.value);
console.log(c.value);


if ((a.hasAttribute("selected") || b.hasAttribute("selected") || c.hasAttribute("selected")) === false) {
    alert("No has seleccionado ningúna infusión.");
}