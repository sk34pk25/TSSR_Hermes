# 🪟 Commandes Windows

## PowerShell essentiel

### Gestion des services

```powershell
# Lister tous les services
Get-Service | Sort-Object Status

# Services en cours d'exécution
Get-Service | Where-Object { $_.Status -eq 'Running' }

# Redémarrer un service
Restart-Service -Name "w3svc" -Force

# Activer un service au démarrage
Set-Service -Name "w3svc" -StartupType Automatic
```

### Gestion des processus

```powershell
# Lister les processus
Get-Process | Sort-Object CPU -Descending | Select-Object Name, CPU, WorkingSet64 -First 10

# Tuer un processus
Stop-Process -Name "notepad" -Force

# Surveiller en temps réel
Get-Process | Wait-Event
```

### Gestion des disques

```powershell
# Disques et partitions
Get-Disk | Get-Partition | Get-Volume

# Espace disque
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" |
    Select-Object DeviceID, @{N='Taille(GB)';E={[math]::Round($_.Size/1GB,1)}},
    @{N='Libre(GB)';E={[math]::Round($_.FreeSpace/1GB,1)}}

# Formater un disque
Format-Volume -DriveLetter E -FileSystem NTFS -Force
```

### Réseau

```powershell
# Configuration IP
Get-NetIPAddress -AddressFamily IPv4
Get-NetRoute | Where-Object { $_.DestinationPrefix -eq '0.0.0.0/0' }

# DNS
Resolve-DnsName google.com
Get-DnsClientServerAddress

# Pare-feu
Get-NetFirewallRule | Where-Object { $_.Enabled -eq 'True' }
Get-NetTCPConnection | Where-Object { $_.State -eq 'Listen' }

# Test de connectivité
Test-NetConnection -ComputerName google.com -Port 80
```

## CMD utile

```cmd
ipconfig /all
ipconfig /flushdns
ipconfig /release
ipconfig /renew

netstat -ano | findstr :80
netstat -anob

ping -t 192.168.1.1
tracert google.com

nslookup google.com 8.8.8.8

sfc /scannow
chkdsk C: /f /r

diskpart
  list disk
  select disk 0
  clean
  create partition primary
  format fs=ntfs quick
  assign

shutdown /r /t 0
```

## Netsh

```cmd
# Voir les règles du pare-feu
netsh advfirewall firewall show rule name=all

# Autoriser un port
netsh advfirewall firewall add rule name="HTTP" dir=in action=allow protocol=TCP localport=80

# Configuration DHCP
netsh dhcp server show scope
netsh dhcp server scope 192.168.1.0 show clients
```

---

*Ce contenu sera enrichi au fil des cours.*
