# 🛤️ Routage

## Routage Statique

Configuration manuelle des routes dans le routeur :

```bash
# Cisco IOS
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
Router(config)# ip route 10.10.0.0 255.255.255.0 s0/0/0

# Linux
ip route add 192.168.2.0/24 via 10.0.0.2 dev eth0
ip route add default via 10.0.0.1

# Windows (PowerShell)
New-NetRoute -DestinationPrefix "192.168.2.0/24" -NextHop 10.0.0.2
```

### Avantages et inconvénients

| Statique | Dynamique |
|----------|-----------|
| Simple à configurer | Adaptatif aux changements |
| Prévisible | Consomme de la bande passante |
| Faible surcharge CPU | S'adapte aux pannes |
| Non évolutif | Complexité de configuration |

## Routage Dynamique

### RIP (Routing Information Protocol)

- Métrique : nombre de sauts (max 15)
- Timer de mise à jour : 30 secondes
- Versions : RIPv1 (classful, pas de masque), RIPv2 (classless)

```bash
# RIP v2 sur Cisco
Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# no auto-summary
Router(config-router)# network 192.168.1.0
Router(config-router)# network 10.0.0.0
```

### OSPF (Open Shortest Path First)

- Algorithme : Dijkstra (SPF - Shortest Path First)
- Métrique : coût (basé sur la bande passante)
- Zones : Zone 0 (backbone) obligatoire
- Convergence rapide

```bash
# OSPF sur Cisco
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.255 area 0
```

### BGP (Border Gateway Protocol)

- Protocol de routage inter-domaine (IGP vs EGP)
- Utilisé par les FAI et grands réseaux
- Mécanisme de politique de routage avancé
- TCP port 179

## Table de routage Linux

```bash
# Afficher la table de routage
ip route show
# ou
route -n

# Ajouter une route permanente (netplan)
# /etc/netplan/01-netcfg.yaml
network:
  version: 2
  ethernets:
    eth0:
      routes:
        - to: 192.168.2.0/24
          via: 10.0.0.2
```

## VRRP / HSRP (Redondance)

Permet d'avoir un routeur de secours :

```
VRRP Master : 192.168.1.1 (IP virtuelle)
VRRP Backup : 192.168.1.2

Si le Master tombe, le Backup prend la main automatiquement.
```

---

*Ce contenu sera enrichi au fil des cours.*
