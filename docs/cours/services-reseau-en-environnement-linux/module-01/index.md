# Module 1 - Introduction

> **Module : Services réseau en environnement Linux**

## Objectifs

- Définir les besoins en services
- Présenter la maquette

## Public ciblé

Techniciens système et réseaux.

## Des besoins au service

### De l'utilisateur au service

Les utilisateurs utilisent le système d'information de l'entreprise :

- Depuis différents appareils (ordinateur, téléphone, tablette, etc.)
- Depuis différents lieux (bureau, transport, maison, etc.)
- Au final, ils accèdent à des services

Ces services sont gérés :

- Soit par l'équipe système de l'entreprise
- Soit par un sous-traitant

> [!WARNING]
> Les services sont le **cœur du système d'information** de l'entreprise.

### Principaux services d'un SI d'entreprise

- La mise en place du réseau
- Le routage
- Le DNS
- Le DHCP

### Architecture logique

```
Interface → Lieu → Contexte réseau de l'entreprise → Services
```

## Bac à sable

### Principe

Les services seront installés sur des machines virtuelles :

- **OS** : pfSense et Linux Debian 10
- Plusieurs services peuvent être installés sur la même machine virtuelle
- **Solution de virtualisation** : VMware Workstation
- Les réseaux logiques seront isolés grâce à des VMNet distincts

### Réseaux et équipements du bac à sable

| Éléments | Valeurs |
|----------|---------|
| Réseau FAI | `88.44.22.0/24` |
| Segment 2 | `172.30.num_stag.0/24` |
| Segment 3 | `172.18.num_stag.0/24` |
| LAN Clients | `192.168.num_stag.0/24` |
| LAN Serveurs | DHCP DNS |
| Passerelle FAI | `88.44.22.254` |

### Adressage

| Élément | Adresse |
|---------|---------|
| Passerelle FAI | `88.44.22.254` |

> [!NOTE] Adapter l'adressage
>
> **Adapter le réseau** `88.44.22.0/24` au réseau de votre FAI (souvent `192.168.1.0/24`).
>
> **Adapter l'adresse IP** `88.44.22.254` à celle de votre BOX (par exemple `192.168.1.1` ou `192.168.1.254`).

---

## Provenance

| Batch | Fichier | File ID | Description |
|-------|---------|---------|-------------|
| batch-01 | Module 01 - Support de cours.pdf | `1QedZ-aTakzBiscNG1kxep6mnwEyr7B6J` | Support de cours |
