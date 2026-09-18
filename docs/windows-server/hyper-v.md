# 🖥️ Hyper-V et Virtualisation

## Installation d'Hyper-V

```powershell
# Installation du rôle Hyper-V
Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart

# Vérification
Get-WindowsFeature -Name Hyper-V*
Get-VMHost
```

## Création de VM

```powershell
# Créer une VM
New-VM -Name "VM-TEST01" `
    -MemoryStartupBytes 4GB `
    -NewVHDPath "C:\VMs\VM-TEST01\Virtual Hard Disks\VM-TEST01.vhdx" `
    -NewVHDSizeBytes 60GB `
    -Generation 2 `
    -SwitchName "VM-Switch" `
    -BootDevice VHD

# Configurer les snapshots
Checkpoint-VM -Name "VM-TEST01" -SnapshotName "Avant mise à jour"

# Restaurer un snapshot
Restore-VMSnapshot -Name "Avant mise à jour"
```

## Switch virtuel

| Type | Description |
|------|-------------|
| **External** | Lie la VM au réseau physique |
| **Internal** | Communication VM ↔ Hôte uniquement |
| **Private** | Communication VM ↔ VM uniquement |

```powershell
# Créer un switch externe
New-VMSwitch -Name "VM-Switch" `
    -NetAdapterName "Ethernet" `
    -AllowManagementOS $true
```

## Migration et haute disponibilité

```powershell
# Migration rapide (Live Migration)
Move-VM -Name "VM-TEST01" -DestinationHost "SRV-HV02"

# Configuration HA
Enable-ClusterServer -Name "CLUSTER-HV"
Add-ClusterNode -Cluster "CLUSTER-HV" -Name "SRV-HV02"
```

## PowerShell Hyper-V

```powershell
# Liste des VMs
Get-VM | Select Name, State, CPUUsage, MemoryAssigned

# Démarrer/Arrêter
Start-VM -Name "VM-TEST01"
Stop-VM -Name "VM-TEST01" -TurnOff

# Exporter une VM
Export-VM -Name "VM-TEST01" -Path "D:\Backups\VMs"

# Cloner une VM
Copy-VMFile -SourceVMName "VM-TEMPLATE" `
    -DestinationVMName "VM-NEW01" `
    -SourcePath "C:\Setup" `
    -DestinationPath "C:"
```

---

*Ce contenu sera enrichi au fil des cours.*
