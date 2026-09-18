# 🔄 Lab 02 - VLAN et Switching

## Objectifs

- Créer des VLANs
- Configurer les trunk links
- Router entre les VLANs
- Appliquer des ACLs

## Topologie

```
[SW-CORE]
  | \
  |  \--Trunk-- [SW-ACCES]
  |              |-- VLAN 10 (Users)
  |              |-- VLAN 20 (Servers)
  |              |-- VLAN 30 (Management)
```

## Étapes

### 1. Création des VLANs

```bash
# Sur le switch
configure terminal
vlan 10
 name USERS
vlan 20
 name SERVERS
vlan 30
 name MGMT

# Assigner les ports
interface range GigabitEthernet0/1-24
 switchport mode access
 switchport access vlan 10

interface range GigabitEthernet0/25-48
 switchport mode access
 switchport access vlan 20
```

### 2. Configuration Trunk

```bash
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
```

### 3. Routing inter-VLAN (Router-on-a-stick)

```bash
# Sur le routeur
interface GigabitEthernet0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0

interface GigabitEthernet0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
```

## Vérifications

```bash
show vlan brief
show interfaces trunk
show ip route
ping 192.168.10.10  # depuis VLAN 20
```

---

*Ce lab sera enrichi au fil des cours.*
