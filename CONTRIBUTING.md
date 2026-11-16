# So arbeiten wir

## Eine Story in zehn Schritten

1. **Nehmen.** Story im Board auf dich zuweisen und auf „In Arbeit“ ziehen.
2. **Aktualisieren.** `git switch main` und `git pull`.
3. **Branch anlegen.** `git switch -c feature/3-wuerfel` (Nummer und Name deiner Story).
4. **Bauen.** In kleinen Schritten, nach jedem Schritt committen: `git commit -m "feat: Würfel zeigt Zahl an (#3)"`.
5. **Pushen.** `git push -u origin feature/3-wuerfel`, auf GitHub einen Draft-PR öffnen, `Closes #3` in die Beschreibung.
6. **Abgleichen.** Zu Beginn jeder Einheit: `git fetch origin` und `git merge origin/main`.
7. **Fertig melden.** PR-Vorlage ausfüllen, „Ready for review“, Reviewer eintragen, Karte auf „Im Review“.
8. **Nachbessern.** Kommentare beantworten, Änderungen auf demselben Branch pushen.
9. **Mergen.** Wenn ein Approval vorliegt: „Squash and merge“.
10. **Aufräumen.** `git switch main`, `git pull`, `git branch -d feature/3-wuerfel`.

## Fertig heißt

- Alle Akzeptanzkriterien sind erfüllt und vorgeführt.
- Der Pull Request ist reviewt und gemergt.
- Die Seite läuft im Browser, die Konsole zeigt keine Fehler.
- Du kannst jede Zeile deines Pull Requests erklären.

## Mit KI arbeiten

1. Du bist verantwortlich für den Code, nicht das Werkzeug.
2. Vor jedem Agentenlauf committen, danach die Änderungen lesen.
3. Keine Passwörter und keine Daten über Personen in Prompts.
4. Keine fremden Bibliotheken.
5. Im Pull Request angeben, wofür du KI genutzt hast.
