# 📜 Scripting Bash

## Structure de base

```bash
#!/bin/bash

# Variables
NOM="TSSR"
ANNEE=2026
# Variable issue d'une commande
DATE_ACTUELLE=$(date +%Y-%m-%d)

# Conditions
if [ $ANNEE -ge 2026 ]; then
    echo "Formation à jour"
elif [ $ANNEE -eq 2025 ]; then
    echo "Formation précédente"
else
    echo "Formation obsolète"
fi

# Boucle for
for serveur in SRV-DC01 SRV-WEB01 SRV-DB01; do
    echo "Vérification de $serveur..."
    ping -c 1 $serveur && echo "OK" || echo "HORS LIGNE"
done

# Boucle while
COMPTEUR=0
while [ $COMPTEUR -lt 5 ]; do
    echo "Compteur: $COMPTEUR"
    ((COMPTEUR++))
done

# Fonction
verifier_service() {
    local service=$1
    if systemctl is-active --quiet "$service"; then
        echo "$service est actif"
    else
        echo "$service est inactif"
    fi
}

verifier_service nginx
```

## Gestion des fichiers

```bash
# Lire un fichier ligne par ligne
while IFS= read -r ligne; do
    echo "Ligne: $ligne"
done < /etc/hosts

# Compter les lignes
wc -l /var/log/syslog

# Extraire des colonnes
awk '{print $1}' /etc/passwd | cut -d: -f1

# Rechercher avec grep
grep -i "error" /var/log/syslog
grep -rn "failed" /etc/
```

## Redirections

```bash
# Sortie standard et erreur
commande > sortie.txt 2> erreur.txt
commande >> fichier.txt  # append
commande > fichier.txt 2>&1  # stdout et stderr vers même fichier

# Pipeline
ls -la | grep ".sh" | sort
ps aux | grep nginx | wc -l
```

## Scripts utiles

### Backup automatique

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
DEST="/backup/$DATE"
mkdir -p "$DEST"

tar czf "$DEST/system.tar.gz" /etc
tar czf "$DEST/var.tar.gz" /var/log
echo "Backup terminé: $DATE" >> /var/log/backup.log
```

### Monitoring de services

```bash
#!/bin/bash
SERVICES=("nginx" "mysql" "ssh")

for service in "${SERVICES[@]}"; do
    if ! systemctl is-active --quiet "$service"; then
        echo "$(date): $service est inactif" >> /var/log/monitor.log
        systemctl restart "$service"
    fi
done
```

---

*Ce contenu sera enrichi au fil des cours.*
