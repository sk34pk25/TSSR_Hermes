# M01-TP02 - Interconnexion

> **Module : Base des réseaux → Module 1 - Le modèle OSI**

## Titre

Interconnexion

## Description

Ce TP complet propose d'interconnecter les différents périphériques d'un réseau et de configurer les paramètres Wi-Fi d'un point d'accès.

## Instructions

1. Interconnecter les différents périphériques
2. Reproduire le schéma suivant
3. Se reporter au tableau ci-dessous pour connaître les différents ports utilisés
4. Utiliser le câble adapté pour :
   - Connecter les ordinateurs aux switchs
   - Connecter les switchs aux routeurs
   - Connecter le point d'accès au Routeur2
5. Paramètres WIFI du point d'accès :
   - SSID : TssrBDRWifi
   - Canal : 6
   - WPA2-PSK : TssrBDRWifi
6. Connecter les routeurs entre eux en utilisant la fibre optique

## Topologie du réseau

```mermaid
flowchart LR
    %% Routeurs (nœuds centraux)
    R1["Routeur1\n2901"]
    R2["Routeur2\n2901"]
    R3["Routeur3\n2901"]

    %% Switchs
    SW1["Switch1\n2960-24TT"]
    SW3["Switch3\n2960-24TT"]

    %% Réseau PC
    PC1["PC1\nPC-PT"]
    PC2["PC2\nPC-PT"]

    %% Réseau Serveurs
    DNS["DNS\nServer-PT"]
    DHCP["DHCP\nServer-PT"]
    WEB["WEB\nServer-PT"]

    %% Réseau Wi-Fi
    AP["Point d'accès0\nAccessPoint-PT"]
    LP1["Portable1\nLaptop-PT"]
    LP2["Portable2\nLaptop-PT"]

    %% Cuivre : Routeur ↔ Switch
    R1 --- SW1
    R3 --- SW3
    R2 --- AP

    %% Cuivre : PC ↔ Switch
    PC1 --- SW1
    PC2 --- SW1

    %% Cuivre : Serveurs ↔ Switch
    DNS --- SW3
    DHCP --- SW3
    WEB --- SW3

    %% Fibre : interconnexions routeurs
    R1 -.-> R2
    R1 -.-> R3
    R2 -.-> R3

    %% Sans fil : AP ↔ Portables
    AP ..> LP1
    AP ..> LP2
```

> Vue simplifiée de la topologie. Les tableaux ci-dessous conservent les ports et les 14 connexions exactes issues de la source.

## Dispositifs (14)

| Nom | Modèle | Type |
|-----|--------|------|
| WEB | Server-PT | Serveur |
| Power Distribution Device0 | Power Distribution Device | Alimentation |
| DNS | Server-PT | Serveur |
| Switch 3 | 2960-24TT | Switch |
| PC2 | PC-PT | PC |
| PC1 | PC-PT | PC |
| Switch 1 | 2960-24TT | Switch |
| Portable1 | Laptop-PT | Portable |
| Portable2 | Laptop-PT | Portable |
| Point d'accès0 | AccessPoint-PT | Point d'accès WiFi |
| DHCP | Server-PT | Serveur |
| Routeur1 | 2901 | Routeur |
| Routeur2 | 2901 | Routeur |
| Routeur3 | 2901 | Routeur |

## Tableau de ports / Connexions (14)

### Réseau PC (Switch1)

| De | Port | Vers | Port | Type |
|----|------|------|------|------|
| PC1 | FastEthernet0 | Switch1 | FastEthernet0/1 | Cuivre |
| PC2 | FastEthernet0 | Switch1 | FastEthernet0/2 | Cuivre |
| Switch1 | FastEthernet0/24 | Routeur1 | GigabitEthernet0/0 | Cuivre |

### Interconnexions routeurs (Fibre optique)

| De | Port | Vers | Port | Type |
|----|------|------|------|------|
| Routeur1 | GigabitEthernet0/2/0 | Routeur2 | GigabitEthernet0/1/0 | Fibre |
| Routeur1 | GigabitEthernet0/3/0 | Routeur3 | GigabitEthernet0/1/0 | Fibre |
| Routeur2 | GigabitEthernet0/3/0 | Routeur3 | GigabitEthernet0/2/0 | Fibre |
| Routeur2 | GigabitEthernet0/1/0 | Routeur1 | GigabitEthernet0/2/0 | Fibre |

### Réseau Point d'accès

| De | Port | Vers | Port | Type |
|----|------|------|------|------|
| Point d'accès0 | Port 0 | Routeur2 | GigabitEthernet0/0 | Cuivre |
| Portable1 | Wireless0 | Point d'accès0 | Port 1 | Sans fil |
| Portable2 | Wireless0 | Point d'accès0 | Port 1 | Sans fil |

### Réseau Serveurs (Switch3)

| De | Port | Vers | Port | Type |
|----|------|------|------|------|
| DNS | FastEthernet0 | Switch3 | FastEthernet0/1 | Cuivre |
| DHCP | FastEthernet0 | Switch3 | FastEthernet0/2 | Cuivre |
| WEB | FastEthernet0 | Switch3 | FastEthernet0/3 | Cuivre |
| Switch3 | FastEthernet0/24 | Routeur3 | GigabitEthernet0/0 | Cuivre |

## Paramètres Wi-Fi

| Paramètre | Valeur |
|-----------|--------|
| SSID | TssrBDRWifi |
| Canal | 6 |
| Sécurité | WPA2-PSK |
| Phrase secrète | TssrBDRWifi |

## Segments réseau

1. **Réseau PC** : PC1, PC2 → Switch1
2. **Réseau Portables** : Portable1, Portable2 → Point d'accès0
3. **Réseau Serveurs** : DNS, DHCP, WEB → Switch3

## Scoring / Évaluation

**Objectif** : 100 % d'achèvement

**Bouton** : "Vérifier les résultats"

> *Si vous avez suivi les consignes, le pourcentage d'achèvement doit être égal à 100%. En cliquant sur le bouton Vérifier les résultats, puis en sélectionnant le 2ième onglet, vous avez la liste des éléments qui sont évalués.*

---

## Provenance

- **Fichier** : M01_TP02 - Ressource - Connexion matériels dans Packet Tracer.pka
- **File ID Drive** : `1cwEv9ZMhOc0ux4FWRLy9WiH6XsWDVz1e`
- **Batch** : batch-03
