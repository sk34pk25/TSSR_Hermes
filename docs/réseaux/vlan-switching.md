# 🔀 VLAN et Switching

## VLAN (Virtual LAN)

Un VLAN permet de segmenter un réseau物理 en plusieurs réseaux logiques :

### Avantages des VLAN

- **Sécurité** : isolation des segments
- **Performance** : réduction des domaines de broadcast
- **Flexibilité** : regrouper par fonction, pas par emplacement
- **Simplification** : gestion logique des groupes

### Configuration VLAN Cisco

```bash
# Création des VLAN
Switch(config)# vlan 10
Switch(config-vlan)# name DEPT_VENTE
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name DEPT_RH

# Assignation des ports
Switch(config)# interface range fa0/1-12
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# exit

Switch(config)# interface range fa0/13-24
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 20
```

## Trunk 802.1Q

Le trunk permet de transporter plusieurs VLAN sur un seul lien :

```bash
# Configuration trunk
Switch(config)# interface gi0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
Switch(config-if)# switchport trunk native vlan 99
```

### Trunk native VLAN

- VLAN par défaut sur le trunk (non taggé)
- **Sécurité** : changer le VLAN 99 pour isoler le native VLAN
- **VLAN hopping** : attaque exploitant le native VLAN

## STP (Spanning Tree Protocol)

Empêche les boucles réseau :

| Protocole | Convergence | Type |
|-----------|-------------|------|
| STP (802.1D) | ~30-50s | Standard |
| RSTP (802.1w) | ~1-2s | Rapide |
| MSTP (802.1s) | Rapide | Multi-instance |

```bash
# RSTP sur Cisco
Switch(config)# spanning-tree mode rapid-pvst
Switch(config)# spanning-tree vlan 10 priority 4096
```

## LACP (Link Aggregation)

Regroupe plusieurs liens physiques en un seul lien logique :

```bash
# LACP sur Cisco
Switch(config)# interface range gi0/1-2
Switch(config-if-range)# channel-group 1 mode active
Switch(config-if-range)# exit
Switch(config)# interface port-channel 1
Switch(config-if)# description LACP_LIEN_CORE
```

---

*Ce contenu sera enrichi au fil des cours.*
