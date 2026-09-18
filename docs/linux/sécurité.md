# 🔒 Sécurité Linux

## SSH Sécurisé

```bash
# Configuration /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
Port 2222  # Changer le port standard
AllowUsers patrik admin
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2

# Générer des clés SSH
ssh-keygen -t ed25519 -C "admin@tssr.local"

# Copier la clé publique
ssh-copy-id -p 2222 patrik@192.168.1.50
```

## Pare-feu avec UFW

```bash
# Installer UFW
sudo apt install ufw -y

# Règles de base
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 2222/tcp comment 'SSH'
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'
sudo ufw allow 53/tcp comment 'DNS'
sudo ufw allow 53/udp comment 'DNS'
sudo ufw enable

# Vérifier
sudo ufw status verbose
sudo ufw status numbered
```

## IPtables avancé

```bash
# Voir les règles
sudo iptables -L -n -v

# Règles de base
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -j DROP

# Sauvegarder
sudo iptables-save > /etc/iptables/rules.v4
```

## SELinux / AppArmor

```bash
# Vérifier le statut
sestatus  # SELinux
aa-status  # AppArmor

# Mode de SELinux
# Enforcing: applique les règles
# Permissive: logue sans bloquer
# Disabled: désactivé

# Changer le mode
sudo setenforce 0  # Permissive
sudo setenforce 1  # Enforcing
```

## Hardening système

```bash
# Désactiver les services inutiles
sudo systemctl disable bluetooth
sudo systemctl disable cups

# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Configurer les limites de fichiers
# /etc/security/limits.conf
* soft nofile 65536
* hard nofile 65536

# Configurer les modules noyau
# /etc/sysctl.conf
net.ipv4.ip_forward = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.all.rp_filter = 1

# Appliquer
sudo sysctl -p
```

## Audit et surveillance

```bash
# Installer auditd
sudo apt install auditd -y

# Règles d'audit
sudo auditctl -w /etc/passwd -p wa -k passwd_changes
sudo auditctl -w /etc/shadow -p wa -k shadow_changes

# Voir les logs
sudo ausearch -k passwd_changes
```

---

*Ce contenu sera enrichi au fil des cours.*
