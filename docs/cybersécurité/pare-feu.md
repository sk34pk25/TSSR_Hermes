# 🧱 Pare-feu

## Types de pare-feu

| Type | Description |
|------|-------------|
| **Packet Filter** | Filtrage au niveau IP/TCP/UDP |
| **Stateful Inspection** | Suit l'état des connexions |
| **Application Gateway** | Filtrage au niveau applicatif (couche 7) |
| **Next-Generation (NGFW)** | IDS/IPS intégré, filtrage applicatif |

## Pare-feu Linux - UFW

```bash
# Configuration de base
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Règles courantes
sudo ufw allow 22/tcp comment 'SSH'
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'
sudo ufw allow 53/tcp comment 'DNS TCP'
sudo ufw allow 53/udp comment 'DNS UDP'
sudo ufw allow from 192.168.1.0/24 comment 'LAN only'

# Activer
sudo ufw enable

# Vérifier
sudo ufw status verbose
sudo ufw status numbered

# Supprimer une règle
sudo ufw delete <numéro>
```

## Pare-feu Linux - IPTables

```bash
# Règles de base
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -j DROP

# Règles avancées
# Rate limiting SSH
sudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
sudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 4 -j DROP

# NAT
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Sauvegarder
sudo iptables-save > /etc/iptables/rules.v4
```

## Pare-feu Windows

```powershell
# Activer le pare-feu
Set-NetFirewallProfile -Profile Domain,Private,Public -Enabled True

# Créer une règle inbound
New-NetFirewallRule -Name "Allow-HTTP" `
    -DisplayName "HTTP inbound" `
    -Direction Inbound `
    -Protocol TCP `
    -LocalPort 80 `
    -Action Allow

# Créer une règle outbound
New-NetFirewallRule -Name "Block-FTP-Out" `
    -DisplayName "Block FTP outbound" `
    -Direction Outbound `
    -Protocol TCP `
    -LocalPort 21 `
    -Action Block
```

## Monitoring du pare-feu

```bash
# Voir les connexions en temps réel
sudo iptables -L -n -v --line-numbers

# Surveiller avec tcpdump
sudo tcpdump -i eth0 port 80 or port 443

# Logs UFW
sudo grep UFW /var/log/syslog
```

---

*Ce contenu sera enrichi au fil des cours.*
