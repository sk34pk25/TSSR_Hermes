# 🧱 Lab 05 - Pare-feu et Sécurité

## Objectifs

- Configurer UFW sur Linux
- Configurer IPTables avancé
- Configurer le pare-feu Windows
- Mettre en place IDS/IPS

## Étapes

### 1. Configuration UFW

```bash
# Configuration de base
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Règles de service
sudo ufw allow 22/tcp comment 'SSH'
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'
sudo ufw allow 53/tcp comment 'DNS'
sudo ufw allow 53/udp comment 'DNS'

# Restrictions IP
sudo ufw allow from 192.168.1.0/24 comment 'LAN'
sudo ufw deny from 10.0.0.0/8 comment 'Bloquer WAN'

# Rate limiting SSH
sudo ufw limit 22/tcp comment 'Rate limit SSH'

# Activer
sudo ufw enable

# Vérifier
sudo ufw status verbose
```

### 2. IPTables avancé

```bash
# Créer un script firewall
cat > /etc/network/if-up.d/firewall << 'EOF'
#!/bin/bash
# Règles de base
iptables -F
iptables -X
iptables -Z

# Loopback
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# État des connexions
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Services
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Rate limiting
iptables -A INPUT -p tcp --dport 22 -m recent --set
iptables -A INPUT -p tcp --dport 22 -m recent --update --seconds 60 --hitcount 4 -j DROP

# Logging
iptables -A INPUT -j LOG --log-prefix "iptables-dropped: " --log-level 4
iptables -A INPUT -j DROP

# NAT
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
EOF

sudo chmod +x /etc/network/if-up.d/firewall
```

### 3. Pare-feu Windows

```powershell
# Configuration PowerShell
Set-NetFirewallProfile -Profile Domain,Private,Public -Enabled True

# Créer des règles
New-NetFirewallRule -Name "Allow-HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
New-NetFirewallRule -Name "Allow-HTTPS" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow
New-NetFirewallRule -Name "Block-ICMP" -Direction Inbound -Protocol ICMPv4 -Action Block

# Vérifier
Get-NetFirewallRule | Where-Object { $_.Enabled -eq 'True' } | Select DisplayName,Direction,Action
```

## Vérifications

```bash
# Test de connectivité
nmap -sS 192.168.1.50

# Voir les règles actives
sudo iptables -L -n -v

# Logs
sudo grep -i "iptables-dropped" /var/log/syslog
```

---

*Ce lab sera enrichi au fil des cours.*
