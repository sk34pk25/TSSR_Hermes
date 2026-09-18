# 🤖 Projet 02 - Scripting et Automatisation

## Contexte

Vous devez automatiser les tâches d'administration quotidiennes pour gagner du temps et réduire les erreurs humaines.

## Objectifs

- Créer des scripts de backup automatisés
- Mettre en place une surveillance des services
- Automatiser la création d'utilisateurs
- Créer un rapport d'audit automatique
- Mettre en place un système d'alerte

## Livrables

1. Scripts de backup (Bash/PowerShell)
2. Script de surveillance avec alertes
3. Script de création d'utilisateurs en masse
4. Script de rapport d'audit
5. Documentation des scripts

## Barème

| Critère | Points |
|---------|--------|
| Scripts de backup | 20 |
| Surveillance et alertes | 20 |
| Création d'utilisateurs | 15 |
| Rapport d'audit | 20 |
| Gestion d'erreurs | 15 |
| Documentation | 10 |
| **Total** | **100** |

## Exemple de script de backup

```bash
#!/bin/bash
# backup-quotidien.sh
DATE=$(date +%Y%m%d_%H%M%S)
DEST="/backup/$DATE"
LOG="/var/log/backup.log"

# Créer le répertoire
mkdir -p "$DEST"

# Backup des données
tar czf "$DEST/etc.tar.gz" /etc 2>> "$LOG"
tar czf "$DEST/var.tar.gz" /var/log 2>> "$LOG"

# Backup de la base de données
mysqldump -u root -p'password' --all-databases > "$DEST/database.sql" 2>> "$LOG"

# Cleanup (garder 7 jours)
find /backup -maxdepth 1 -type d -mtime +7 -exec rm -rf {} \;

# Vérifier le backup
if [ $? -eq 0 ]; then
    echo "$(date): Backup réussi - $DEST" >> "$LOG"
    # Envoyer un email de confirmation
    echo "Backup réussi" | mail -s "Backup OK" admin@entreprise.com
else
    echo "$(date): Backup échoué" >> "$LOG"
    # Envoyer une alerte
    echo "ALERTE: Backup échoué" | mail -s "ALERT Backup FAILED" admin@entreprise.com
    exit 1
fi
```

## Exemple de script de surveillance

```powershell
# surveillance.ps1
$SERVICES = @("nginx", "mysql", "ssh", "dhcp")
$LOG = "C:\Logs\surveillance.log"

foreach ($service in $SERVICES) {
    $status = Get-Service -Name $service -ErrorAction SilentlyContinue
    if ($status.Status -ne 'Running') {
        Write-Output "$(Get-Date): $service est inactif" | Out-File -Append $LOG
        # Redémarrer le service
        Start-Service -Name $service -ErrorAction SilentlyContinue
        # Envoyer une alerte
        Send-MailMessage -To "admin@entreprise.com" -From "monitor@entreprise.com" `
            -Subject "ALERTE: $service inactif" -Body "$service a été redémarré" `
            -SmtpServer "smtp.entreprise.com"
    }
}
```

## Exemple de création d'utilisateurs

```bash
#!/bin/bash
# create-users.sh
# Format du CSV:prenom,nom,login,departement
while IFS=',' read -r prenom nom login departement; do
    useradd -m -s /bin/bash -c "$prenom $nom" -d "/home/$login" "$login"
    echo "$login:$(date +%Y%m%d)_${RANDOM}" | chpasswd
    usermod -aG "$departement" "$login"
    echo "Utilisateur $login créé dans $departement"
done < utilisateurs.csv
```

---

*Ce projet sera enrichi au fil des cours.*
