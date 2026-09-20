# Énoncé du TP exemple

> **Donnée fictive** — Ce TP contient des données de démonstration uniquement.

---

## Navigation

<div class="tssr-breadcrumb">
  <a class="tssr-breadcrumb__link" href="/">Accueil</a>
  <span class="tssr-breadcrumb__separator">></span>
  <a class="tssr-breadcrumb__link" href="/travaux-pratiques/">Travaux pratiques</a>
  <span class="tssr-breadcrumb__separator">></span>
  <a class="tssr-breadcrumb__link" href="/cours/cours-exemple/">Cours exemple</a>
  <span class="tssr-breadcrumb__separator">></span>
  <a class="tssr-breadcrumb__link" href="/cours/cours-exemple/module-01/">Module 01 — Exemple</a>
  <span class="tssr-breadcrumb__separator">></span>
  <span class="tssr-breadcrumb__current">Énoncé</span>
</div>

---

<div class="tssr-breadcrumb" style="margin-top: var(--tssr-spacing-4);">
  <a class="tssr-tp-card__link" href="/travaux-pratiques/cours-exemple/module-01/tp-exemple/">
    < Retour à la présentation
  </a>
</div>

---

## Contexte

Dans cet environnement fictif, vous administration un serveur Ubuntu 24.04 LTS connecté à un réseau local. Une machine cliente Debian 12 doit pouvoir accéder à un service web hébergé sur le serveur.

<div class="tssr-hint">
  <span class="tssr-hint__label">Indice</span>
  <p>Le service cible est un serveur web HTTP standard. Pensez à vérifier les composants nécessaires avant de commencer.</p>
</div>

## Objectif

Installer et configurer un serveur web sur le serveur fictif, puis vérifier qu'il est accessible depuis la machine cliente.

## Prérequis

- Connaissances de base sur les commandes Linux (`apt`, `systemctl`)
- Accès terminal à la machine serveur
- Connaissances basiques sur les services réseau

## Environnement

| Élément | Valeur fictive |
|---------|---------------|
| Serveur | Ubuntu 24.04 LTS — IP : 192.168.1.10 |
| Client | Debian 12 — IP : 192.168.1.20 |
| Réseau | 192.168.1.0/24 |
| Port | 80 (HTTP standard) |

## Consignes

1. Installez le serveur web sur la machine serveur.
2. Démarrez le service et assurez-vous qu'il soit actif au démarrage.
3. Vérifiez qu'aucun autre service n'utilise le port 80.
4. Testez l'accès depuis la machine cliente.

## Étapes

1. **Installation** — Installez le package du serveur web via le gestionnaire de paquets.
2. **Configuration du service** — Démarrez le service et activez-le au boot.
3. **Vérification locale** — Confirmez que le service écoute sur le bon port.
4. **Test distant** — Depuis la machine cliente, effectuez une requête vers le serveur.

## Résultat attendu

- Le service web est actif et tourne sur le port 80.
- Une requête HTTP depuis la machine cliente retourne la page par défaut du serveur.
- Le service se redémarre automatiquement au boot.

## Vérification

Exécutez les commandes suivantes sur le serveur :

```bash
systemctl status <nom-du-service>
ss -tlnp | grep :80
```

Et depuis la machine cliente :

```bash
curl http://192.168.1.10
```

## Aide

<div class="tssr-hint">
  <span class="tssr-hint__label">Indice</span>
  <p>Le gestionnaire de paquets `apt` est votre point de départ. Consultez la documentation officielle du package pour les commandes de base.</p>
</div>

<div class="tssr-hint">
  <span class="tssr-hint__label">Indice</span>
  <p>Utilisez `systemctl enable` pour qu'un service démarre automatiquement.</p>
</div>

---

<div class="tssr-tp-card__actions" style="margin-top: var(--tssr-spacing-6);">
  <a class="tssr-tp-card__link" href="/travaux-pratiques/cours-exemple/module-01/tp-exemple/">
    < Retour à la présentation
  </a>
  <a class="tssr-tp-card__action tssr-tp-card__action--secondary" href="/travaux-pratiques/cours-exemple/module-01/tp-exemple/correction/">
    Correction du TP
  </a>
</div>
