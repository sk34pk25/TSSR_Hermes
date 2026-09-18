# 🖥️ Lab 06 - Virtualisation Hyper-V

## Objectifs

- Installer et configurer Hyper-V
- Créer des machines virtuelles
- Configurer les switches virtuels
- Mettre en place la haute disponibilité

## Étapes

### 1. Installation d'Hyper-V

```powershell
# Installation du rôle
Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart

# Vérification
Get-WindowsFeature -Name Hyper-V*
Get-VMHost
```

### 2. Création d'un switch virtuel

```powershell
# Switch externe (accès réseau physique)
New-VMSwitch -Name "VM-Switch-External" `
    -NetAdapterName "Ethernet" `
    -AllowManagementOS $true

# Switch interne (communication VM ↔ Hôte)
New-VMSwitch -Name "VM-Switch-Internal" `
    -SwitchType Internal

# Switch privé (communication VM ↔ VM uniquement)
New-VMSwitch -Name "VM-Switch-Private" `
    -SwitchType Private
```

### 3. Création de VM

```powershell
# Créer une VM Ubuntu
New-VM -Name "VM-UBUNTU01" `
    -MemoryStartupBytes 4GB `
    -NewVHDPath "C:\VMs\VM-UBUNTU01\Virtual Hard Disks\VM-UBUNTU01.vhdx" `
    -NewVHDSizeBytes 60GB `
    -Generation 2 `
    -SwitchName "VM-Switch-External" `
    -BootDevice VHD

# Monter l'ISO d'installation
Set-VMDvdDrive -VMName "VM-UBUNTU01" `
    -Path "D:\ISOs\ubuntu-22.04.3-live-server-amd64.iso"

# Démarrer
Start-VM -Name "VM-UBUNTU01"
```

### 4. Snapshots et clones

```powershell
# Créer un snapshot avant installation
Checkpoint-VM -Name "VM-UBUNTU01" -SnapshotName "Avant installation"

# Restaurer un snapshot
Restore-VMSnapshot -Name "Avant installation"

# Exporter une VM
Export-VM -Name "VM-UBUNTU01" -Path "D:\Backups"
```

## Vérifications

```powershell
# Liste des VMs
Get-VM | Select Name, State, CPUUsage, MemoryAssigned

# État des switches
Get-VMSwitch

# État du stockage
Get-VHD -Path "C:\VMs\VM-UBUNTU01\Virtual Hard Disks\VM-UBUNTU01.vhdx"
```

---

*Ce lab sera enrichi au fil des cours.*
