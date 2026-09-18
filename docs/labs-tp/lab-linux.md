# 🐧 Lab 04 - Administration Linux

## Objectifs

- Installer et configurer Ubuntu Server
- Gérer les services systemd
- Configurer le réseau
- Automatiser avec des scripts Bash

## Étapes

### 1. Installation

```bash
# Télécharger Ubuntu Server
wget https://releases.ubuntu.com/22.04/ubuntu-22.04.3-live-server-amd64.iso

# Créer un média bootable
sudo dd if=ubuntu-22.04.3-live-server-amd64.iso of=/dev/sdb bs=4M status=progress

# Installation (sans GUI)
# - Language: English
# - Keyboard: French (azerty)
# - Network: DHCP
# - Storage: Guided - use entire disk
# - Profile: patrik / Password123!
# - Services: OpenSSH server
```

### 2. Configuration réseau

```bash
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

sudo netplan apply
```

### 3. Services

```bash
# Installer un serveur web
sudo apt install nginx -y
sudo systemctl enable --now nginx
sudo systemctl status nginx

# Installer un serveur SSH sécurisé
sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart ssh
```

### 4. Scripting

```bash
#!/bin/bash
# backup.sh - Script de backup quotidien
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/$DATE"
mkdir -p "$BACKUP_DIR"

# Backup des configurations
tar czf "$BACKUP_DIR/etc.tar.gz" /etc
tar czf "$BACKUP_DIR/var.tar.gz" /var/log

# Backup de la base de données
sudo mysqldump -u root -p'Password123!' --all-databases > "$BACKUP_DIR/database.sql"

# Cleanup (garder 7 jours)
find /backup -maxdepth 1 -type d -mtime +7 -exec rm -rf {} \;

echo "Backup terminé: $DATE"
```

## Vérifications

```bash
# Vérifier les services
systemctl is-active nginx
systemctl is-active ssh

# Vérifier le réseau
ip addr show
ip route show
ping -c 4 google.com

# Vérifier le backup
ls -la /backup/
```

---

*Ce lab sera enrichi au fil des cours.*
