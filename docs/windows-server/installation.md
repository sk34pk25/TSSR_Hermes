# 📥 Installation Windows Server

## Editions de Windows Server

| Edition | Usage |
|---------|-------|
| Standard | PME, virtualisation limitée (2 VMs) |
| Datacenter | Grande entreprise, virtualisation illimitée |
| Essentials | PME jusqu'à 50 utilisateurs |

## Installation depuis ISO

1. Démarrer sur l'ISO ou monté
2. Sélectionner la langue
3. Cliquer **Installer maintenant**
4. Sélectionner l'édition
5. Accepter les conditions
6. Choix d'installation : **Personnalisée**
7. Sélectionner le disque
8. Configuration post-installation (nom, mot de passe, réseau)

## Configuration post-installation

```powershell
# Renommer le serveur
Rename-Computer -NewName "SRV-WEB01" -Restart

# Joindre un domaine
Add-Computer -DomainName "tssr.local" -Restart

# Installer un rôle
Install-WindowsFeature -Name Web-Server -IncludeManagementTools

# Mettre à jour le serveur
Install-WindowsUpdate -AcceptEula
```

## Gestion à distance

```powershell
# Activer la gestion à distance
Enable-PSRemoting -Force
Set-Service -Name WinRM -StartupType Automatic

# Se connecter à distance
Enter-PSSession -ComputerName SRV-DC01 -Credential (Get-Credential)
```

---

*Ce contenu sera enrichi au fil des cours.*
