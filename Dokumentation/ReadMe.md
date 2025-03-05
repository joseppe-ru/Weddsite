Ich will hier alles aufschreiben, was wir besprechen/besprochen haben.
Hier ist alles zu finden.

# Workaround/Technischer Fortschritt
- Raspberry Pi:
> Bash-script pull automatisch (immer 3.00Uhr nachts) die aktuelle Version des Repos
> NGINX Webserver (Docker) greift auf Website zu und kann Dokumentation (Markdown) abrufen
> Repo liegt in Volume von NGINX
> [Weitere Dokumentation in Smarthome-Repo zu finden](https://github.com/joseppe-ru/Smarthome/blob/main/Docs/Raspi/Raspi4B%2B.md#automated-git-pull)

- Rendern der Markdown Dateien:
> **marked.js** used as renderer
> Verbesserungen für Tabellen und Links vorgenommen

- Passwortgeschützt über htuseres und htpasswd

# Workflow
- Arbeiten an der Dokumentation/Website
- Commit in git Repo
- automatisierter Pull vom Raspberry
- Website erreichbar über ReverseProxy
- Zugriff auf Aktuellen Planungsfortschritt (mit Passwort)


# Übersicht:
- [Navigationsbereich](./Hochzeit.md) beinhaltet Link-Liste für Navigationsbereich
- Wir Planen nach der [Metaplanung](Metaplanung). Die Planung über die Planung. Daraus kann man den aktuelle **Planungsfortschritt** und **ToDo-Liste** finden.
- Einzelne Planungspunkte sind in seperaten Dateien aufgeführt