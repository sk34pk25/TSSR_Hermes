# TSSR 2026-2027 — Technicien Supérieur Systèmes & Réseaux

Documentation officielle de la formation **TSSR** pour l'année 2026-2027.

## 📖 À propos

Ce dépôt contient la documentation complète de la formation TSSR, générée avec **MkDocs Material**. Il couvre :

- **Administration réseau** : OSI, TCP/IP, routage, VLAN, services
- **Windows Server** : Active Directory, GPO, DNS, DHCP, Hyper-V
- **Linux** : Administration, services, scripting Bash, sécurité
- **Cybersécurité** : Fondamentaux, hardening, pare-feu, pentest
- **Labs & TP** : Travaux pratiques commentés
- **Commandes utiles** : Références rapides Linux, Windows, réseau
- **Projets** : Infrastructure, audit, automatisation

## 🚀 Démarrage rapide

### Prérequis

- Python 3.10+
- pip

### Installation

```bash
pip install mkdocs-material
```

### Lancer le serveur de développement

```bash
mkdocs serve
```

Le site sera disponible sur http://localhost:8000

### Générer le site statique

```bash
mkdocs build
```

Le site sera généré dans le dossier `site/`.

## 📁 Structure du projet

```
tssr-site/
├── mkdocs.yml              # Configuration MkDocs
├── README.md               # Ce fichier
├── docs/                   # Contenu source (Markdown)
│   ├── index.md            # Page d'accueil
│   ├── réseaux/            # Module réseaux
│   ├── windows-server/     # Module Windows Server
│   ├── linux/              # Module Linux
│   ├── cybersécurité/      # Module Cybersécurité
│   ├── labs-tp/            # Labs et TP
│   ├── commandes-utiles/   # Références de commandes
│   ├── projets/            # Projets
│   ├── ressources/          # Ressources externes
│   └── _static/            # CSS personnalisé
└── site/                   # Site généré (ignore par .gitignore)
```

## 📝 Ajouter du contenu

Chaque module est un dossier dans `docs/`. Pour ajouter une nouvelle page :

1. Crée un fichier `.md` dans le dossier approprié
2. Ajoute l'entrée dans la section `nav:` de `mkdocs.yml`
3. Relance `mkdocs serve` pour prévisualiser

## 🛠️ Outils

- [MkDocs](https://www.mkdocs.org/) — Générateur de site statique
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) — Thème
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/) — Extensions Markdown

## 📄 Licence

Ce projet est personnel et réservé à la formation.

---

**Formation TSSR** — 2026-2027
