# Correction du TP exemple

> **Donnée fictive** — Cette correction contient des données de démonstration uniquement.

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
  <span class="tssr-breadcrumb__current">Correction</span>
</div>

---

<div class="tssr-breadcrumb" style="margin-top: var(--tssr-spacing-4);">
  <a class="tssr-tp-card__link" href="/travaux-pratiques/cours-exemple/module-01/tp-exemple/enonce/">
    < Retour à l'énoncé
  </a>
</div>

---

## Rappel de l'objectif

Le but de ce TP était d'installer et configurer un serveur web sur un système Linux, puis de vérifier qu'il est accessible depuis une machine cliente du même réseau.

## Démarche

La démarche suit 4 étapes logiques :
1. Installer le logiciel du serveur web
2. Démarrer le service et l'activer au boot
3. Vérifier localement que tout fonctionne
4. Tester l'accès depuis une machine distante

## Solution étape par étape

### Étape 1 — Installation

Sur le serveur Ubuntu fictif, ouvrez un terminal et exécutez :

```bash
sudo apt update
sudo apt install -y nginx
```

`nginx` est un serveur web léger et performant. L'option `-y` confirme automatiquement l'installation.

<div class="tssr-solution">
  <span class="tssr-solution__label">Pourquoi nginx ?</span>
  <p>nginx est recommandé pour les TP de base car il est léger, bien documenté, et facile à configurer. Apache est une alternative valide, mais nginx est plus simple pour un premier contact.</p>
</div>

### Étape 2 — Configuration du service

Une fois installé, démarrez le service et activez-le :

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

- `start` : lance le service maintenant.
- `enable` : assure que le service démarre automatiquement au prochain boot.

Vérifiez que le service est actif :

```bash
systemctl status nginx
```

Vous devez voir `active (running)` dans la sortie.

### Étape 3 — Vérification locale

Confirmez que nginx écoute bien sur le port 80 :

```bash
ss -tlnp | grep :80
```

Vous devriez voir une ligne comme :

```
LISTEN  0  511  0.0.0.0:80  0.0.0.0:*  users:(("nginx",pid=1234,fd=6))
```

Vous pouvez aussi tester localement :

```bash
curl http://localhost
```

Vous devez recevoir la page par défaut de nginx.

### Étape 4 — Test depuis la machine cliente

Depuis la machine Debian cliente (192.168.1.20) :

```bash
curl http://192.168.1.10
```

Si la réponse contient le HTML de la page par défaut de nginx, le TP est réussi.

## Résultat attendu

- Le service `nginx` est actif (`active (running)`).
- Le port 80 est en écoute sur toutes les interfaces.
- `curl http://192.168.1.10` depuis la cliente retourne la page nginx.
- Le service persiste après un redémarrage (`systemctl is-enabled nginx` retourne `enabled`).

## Vérifications supplémentaires

```bash
# Vérifier que le service est activé au boot
systemctl is-enabled nginx

# Vérifier les logs en cas de problème
sudo journalctl -u nginx --no-pager -n 20
```

## Erreurs fréquentes

<div class="tssr-error-common">
  <span class="tssr-error-common__label">Port 80 déjà occupé</span>
  <p>Si nginx ne démarre pas, un autre service (Apache, un autre nginx) utilise peut-être le port 80. Vérifiez avec :<br>
  <code>sudo ss -tlnp | grep :80</code><br>
  Arrêtez le conflit avant de relancer nginx :<br>
  <code>sudo systemctl stop apache2</code></p>
</div>

<div class="tssr-error-common">
  <span class="tssr-error-common__label">Page non accessible depuis le réseau</span>
  <p>Le pare-feu du serveur peut bloquer le port 80. Testez avec :<br>
  <code>sudo ufw allow 80/tcp</code><br>
  Puis réessayez depuis la machine cliente.</p>
</div>

<div class="tssr-error-common">
  <span class="tssr-error-common__label">service ne démarre pas</span>
  <p>Vérifiez la configuration :<br>
  <code>sudo nginx -t</code><br>
  Si la syntaxe est invalide, corrigez le fichier de configuration signalé avant de relancer.</p>
</div>

## Diagnostic

| Symptôme | Cause possible | Solution |
|----------|---------------|----------|
| `curl: Connection refused` | Service non démarré | `sudo systemctl start nginx` |
| Page d'erreur 403 | Permissions de fichier | `sudo ls -la /var/www/html/` |
| Timeout réseau | Pare-feu | `sudo ufw allow 80/tcp` |
| `nginx: [emerg] bind()` | Port déjà utilisé | Identifier et arrêter le conflit |

---

<div class="tssr-breadcrumb" style="margin-top: var(--tssr-spacing-6);">
  <a class="tssr-tp-card__link" href="/travaux-pratiques/cours-exemple/module-01/tp-exemple/">
    < Retour à la présentation
  </a>
  <a class="tssr-tp-card__link" href="/travaux-pratiques/cours-exemple/module-01/tp-exemple/enonce/">
    Voir l'énoncé >
  </a>
</div>
