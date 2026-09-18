# 🏷️ Adressage IP et Subnetting

## Adressage IPv4

Un adressage IPv4 est composé de **32 bits**, divisés en 4 octets :
- Format décimal pointé : `192.168.1.1`
- Format binaire : `11000000.10101000.00000001.00000001`

### Classes d'adresses (historique)

| Classe | Plage | Masque par défaut | Usage |
|--------|-------|-------------------|-------|
| A | 1.0.0.0 – 126.255.255.255 | /8 | Très grands réseaux |
| B | 128.0.0.0 – 191.255.0.0 | /16 | Grands réseaux |
| C | 192.0.0.0 – 223.255.255.0 | /24 | Petits réseaux |

> **Note** : Le CIDR (Classless Inter-Domain Routing) a rendu les classes obsolètes en production.

### Adresses spéciales

| Adresse | Nom | Usage |
|---------|-----|-------|
| 127.0.0.1 | Loopback | Test local |
| 0.0.0.0 | Toute la source | Route par défaut |
| 255.255.255.255 | Broadcast limité | Broadcast LAN |
| 169.254.0.0/16 | APIPA | Adressage automatique échoué |

### Adresses privées (RFC 1918)

| Réseau | Masque | Nombre d'hôtes |
|--------|--------|----------------|
| 10.0.0.0/8 | 255.0.0.0 | ~16 millions |
| 172.16.0.0/12 | 255.240.0.0 | ~1 million |
| 192.168.0.0/16 | 255.255.0.0 | 65 534 |

## Subnetting

### Calcul du nombre de sous-réseaux et d'hôtes

```
Nombre de sous-réseaux = 2^n (n = bits empruntés)
Nombre d'hôtes = 2^h - 2 (h = bits restants)
```

### Exemple : découper 192.168.1.0/24 en 4 sous-réseaux

```
Réseau :   192.168.1.0/24
Bit emprunté: /26 (2 bits = 4 sous-réseaux)
Masque :    255.255.255.192

Sous-réseau 1: 192.168.1.0/26   - .0 à .63   - .63 broadcast
Sous-réseau 2: 192.168.1.64/26 - .64 à .127 - .127 broadcast
Sous-réseau 3: 192.168.1.128/26 - .128 à .191 - .191 broadcast
Sous-réseau 4: 192.168.1.192/26 - .192 à .255 - .255 broadcast
```

### VLSM (Variable Length Subnet Mask)

Permet d'utiliser des masques différents selon les besoins :

```
Réseau base : 192.168.1.0/24

1. Département A (100 hôtes)    → /25  (126 hôtes)
2. Département B (50 hôtes)     → /26  (62 hôtes)
3. Département C (20 hôtes)     → /27  (30 hôtes)
4. Liaison WAN 1                → /30  (2 hôtes)
5. Liaison WAN 2                → /30  (2 hôtes)
```

## Adressage IPv6

- 128 bits (8 groupes de 4 chiffres hexadécimaux)
- Format : `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Compression des zéros : `2001:db8:85a3::8a2e:370:7334`

### Types d'adresses IPv6

| Type | Préfixe | Usage |
|------|---------|-------|
| Loopback | `::1` | Test local |
| Unicast global | `2001::/16` | Routable sur Internet |
| Link-local | `fe80::/10` | Communication locale uniquement |
| Unique local | `fc00::/7` | Équivalent privé IPv4 |
| Multicast | `ff00::/8` | Diffusion groupée |

---

*Ce contenu sera enrichi au fil des cours.*
