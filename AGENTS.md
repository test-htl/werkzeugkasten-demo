# Team-Werkzeugkasten: Anweisungen für KI-Werkzeuge

## Projekt
Eine statische Website mit kleinen Werkzeugen. Nur HTML, CSS und JavaScript.
Es gibt kein Framework, keinen Build-Schritt und keine npm-Pakete.

## Regeln
- Jedes Werkzeug liegt in einem eigenen Ordner `tools/<name>/` mit `index.html` und `script.js`.
- Ändere nur Dateien im Ordner des Werkzeugs, an dem gerade gearbeitet wird.
- `index.html` und `style.css` im Hauptordner nur ändern, wenn es ausdrücklich verlangt wird.
- Keine externen Bibliotheken, keine Skripte oder Schriften von fremden Servern.
- Text nie mit `innerHTML` einfügen, immer mit `textContent`.
- Eingaben prüfen: leer, zu lang, keine Zahl, negative Zahl.
- Nichts an fremde Server senden. Keine personenbezogenen Daten speichern.

## Arbeitsweise
- Kleine Änderungen, eine Story pro Branch.
- Die Logik in eigene Funktionen schreiben, getrennt vom Zugriff auf die Seite.
- Das gemeinsame Aussehen aus `style.css` verwenden (Klasse `ausgabe`, Farbe `--akzent`).
- Als Vorbild dient `tools/zaehler/`.
- Kommentare auf Deutsch, Bezeichner dürfen deutsch sein.
