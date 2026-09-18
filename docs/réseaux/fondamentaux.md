# 📡 Fondamentaux des Réseaux

## Le Modèle OSI

Le modèle OSI (Open Systems Interconnection) définit 7 couches :

| Couche | Nom | Fonction | Exemples |
|--------|-----|----------|----------|
| 7 | Application | Interface utilisateur | HTTP, FTP, SMTP |
| 6 | Présentation | Encodage, chiffrement | SSL/TLS, JPEG |
| 5 | Session | Gestion des sessions | NetBIOS, RPC |
| 4 | Transport | Communication bout-à-bout | TCP, UDP |
| 3 | Réseau | Routage, adressage | IP, ICMP, ARP |
| 2 | Liaison | Accès au support, adressage MAC | Ethernet, Wi-Fi |
| 1 | Physique | Signal électrique, physique | Câbles, hubs |

### TCP vs UDP

```python
# TCP : orienté connexion, fiable
# - Handshake 3 voies
# - Acquittements et retransmissions
# - Contrôle de flux
# - Exemple : HTTP, SSH, FTP

# UDP : non orienté connexion, rapide
# - Pas de handshake
# - Pas de garantie de livraison
# - Exemple : DNS, VoIP, streaming
```

## Le Modèle TCP/IP

| Couche TCP/IP | Équivalent OSI | Protocoles |
|---------------|----------------|------------|
| Application | 5-7 | HTTP, DNS, DHCP, SSH |
| Transport | 4 | TCP, UDP |
| Internet | 3 | IP, ICMP, ARP |
| Accès réseau | 1-2 | Ethernet, Wi-Fi, PPP |

## Adressage MAC

- Adresse physique sur 48 bits (6 octets)
- Format : `00:1A:2B:3C:4D:5E` ou `00-1A-2B-3C-4D-5E`
- OUI (3 premiers octets) = identifiant fabricant
- Adresse unicast, multicast, broadcast

## Trame Ethernet

```
| Preamble (7) | SFD (1) | Dest MAC (6) | Src MAC (6) | Type (2) | Data (46-1500) | FCS (4) |
              1 byte           6 bytes         6 bytes       2 bytes        bytes     bytes
```

---

*Ce contenu sera enrichi au fil des cours.*
