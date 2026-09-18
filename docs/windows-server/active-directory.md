# 🏢 Active Directory Domain Services (AD DS)

## Concepts fondamentaux

| Concept | Description |
|---------|-------------|
| **Forêt** | Ensemble d'un ou plusieurs domaines |
| **Domaine** | Groupe d'objets gérés de manière cohérente |
| **Arbre** | Domaines liés par un nom hiérarchique |
| **OU** | Unité Organisationnelle, conteneur pour organiser les objets |
| **DC** | Contrôleur de Domaine |
| **GC** | Global Catalog, index complet de la forêt |

## Architecture AD

```
Forêt : tssr.local
├── Domaine : tssr.local
│   ├── OU : Serveurs
│   │   ├── OU : Production
│   │   └── OU : Développement
│   ├── OU : Utilisateurs
│   │   ├── OU : Direction
│   │   ├── OU : IT
│   │   └── OU : RH
│   └── OU : Postes
│       ├── OU : Bureau
│       └── OU : Mobile
└── Domaine : lab.tssr.local
    └── OU : VMs
```

## Installation du rôle AD DS

```powershell
# Installation du rôle
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools

# Promotion en contrôleur de domaine
Install-ADDSForest `
    -DomainName "tssr.local" `
    -DomainNetBIOSName "TSSR" `
    -SafeModeAdministratorPassword (Read-Host -AsSecureString "DSRM Password") `
    -InstallDns:$true

# Vérification
Get-ADDomain
Get-ADForest
Get-ADDomainController
```

## Gestion des objets

```powershell
# Créer un utilisateur
New-ADUser -Name "Jean Dupont" `
    -GivenName "Jean" `
    -Surname "Dupont" `
    -SamAccountName "jdupont" `
    -UserPrincipalName "jdupont@tssr.local" `
    -Path "OU=IT,OU=Utilisateurs,DC=tssr,DC=local" `
    -AccountPassword (Read-Host -AsSecureString "Password") `
    -Enabled $true

# Créer un groupe
New-ADGroup -Name "GROUPE_IT" `
    -GroupScope Global `
    -Path "OU=IT,OU=Utilisateurs,DC=tssr,DC=local" `
    -Description "Groupe des administrateurs IT"

# Ajouter un membre à un groupe
Add-ADGroupMember -Identity "GROUPE_IT" -Members "jdupont"

# Rechercher des utilisateurs
Get-ADUser -Filter * -SearchBase "OU=IT,OU=Utilisateurs,DC=tssr,DC=local"
```

## Services essentiels

- **Kerberos** : Protocole d'authentification
- **LDAP** : Protocole d'accès à l'annuaire (port 389/636)
- **DNS** : Résolution des noms (port 53)
- **NTP** : Synchronisation de l'heure

---

*Ce contenu sera enrichi au fil des cours.*
