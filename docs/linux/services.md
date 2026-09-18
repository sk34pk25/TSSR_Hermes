# 🔧 Services et systemd

## systemd

systemd est le système d'init et le gestionnaire de services sous Linux moderne.

### Gestion des services

```bash
# Démarrer un service
sudo systemctl start nginx

# Arrêter un service
sudo systemctl stop nginx

# Redémarrer
sudo systemctl restart nginx

# Recharger la configuration (sans redémarrer)
sudo systemctl reload nginx

# Activer au démarrage
sudo systemctl enable nginx

# Désactiver au démarrage
sudo systemctl disable nginx

# Vérifier le statut
systemctl status nginx
```

### Créer un service personnalisé

```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=Mon Application
After=network.target

[Service]
Type=simple
User=patrik
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/python3 /opt/myapp/app.py
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
# Recharger systemd
sudo systemctl daemon-reload

# Activer et démarrer
sudo systemctl enable myapp
sudo systemctl start myapp
```

## Configuration réseau

```bash
# Netplan (Ubuntu)
# /etc/netplan/01-netcfg.yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.50/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses:
          - 192.168.1.10
          - 8.8.8.8

# Appliquer
sudo netplan apply
```

## Logs et journalisation

```bash
# Journalctl
sudo journalctl -u nginx
sudo journalctl -xe
sudo journalctl --since "2026-01-01"
sudo journalctl -f  # suivi en temps réel

# Logs classiques
cat /var/log/syslog
cat /var/log/auth.log
cat /var/log/dpkg.log
```

## Cron et planification

```bash
# Éditer le crontab
crontab -e

# Exemples
# Tâche toutes les heures
0 * * * * /usr/local/bin/backup.sh

# Tâche tous les jours à 2h
0 2 * * * /usr/local/bin/cleanup.sh

# Tâche le lundi à 6h
0 6 * * 1 /usr/local/bin/weekly-report.sh
```

---

*Ce contenu sera enrichi au fil des cours.*
