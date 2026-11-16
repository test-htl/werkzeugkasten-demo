// Beispiel-Werkzeug: ein Zähler, der nie unter 0 fällt.
// Die Logik steht in einer eigenen Funktion, damit man sie leicht prüfen kann.

function neuerStand(stand, aenderung) {
  const ergebnis = stand + aenderung;
  return ergebnis < 0 ? 0 : ergebnis;
}

let stand = 0;
const anzeige = document.getElementById("stand");

function zeigeStand() {
  // textContent statt innerHTML: Text wird nie als HTML ausgeführt.
  anzeige.textContent = String(stand);
}

document.getElementById("plus").addEventListener("click", () => {
  stand = neuerStand(stand, 1);
  zeigeStand();
});

document.getElementById("minus").addEventListener("click", () => {
  stand = neuerStand(stand, -1);
  zeigeStand();
});

document.getElementById("reset").addEventListener("click", () => {
  stand = 0;
  zeigeStand();
});

zeigeStand();
