# 🌐 DNS & DHCP Windows Server

## Serveur DNS

### Installation

```powershell
Install-WindowsFeature -Name DNS -IncludeManagementTools
```

### Zones DNS

| Type | Description |
|------|-------------|
| **Primaire** | Zone modifiable en lecture-écriture |
| **Secondaire** | Zone en lecture seule, répliquée depuis primaire |
| **Cache-only** | Ne contient aucune zone, fait du cache |
| **Stub** | Contient uniquement les enregistrements NS |

### Création de zone

```powershell
# Zone primaire pour tssr.local
Add-DnsServerPrimaryZone -Name "tssr.local" `
    -DynamicUpdate Secure `
    -ZoneFile "tssr.local.dns"

# Enregistrement A
Add-DnsServerResourceRecordA -Name "SRV-DC01" `
    -ZoneName "tssr.local" `
    -IPv4Address "192.168.1.10"

# Enregistrement CNAME
Add-DnsServerResourceRecordCName -HostNameAlias "SRV-DC01.tssr.local" `
    -Name "DC" `
    -ZoneName "tssr.local"

# Zone de recherche inverse
Add-DnsServerPrimaryZone -NetworkID "192.168.1.0/24" `
    -DynamicUpdate Secure
```

## Serveur DHCP

### Installation

```powershell
Install-WindowsFeature -Name DHCP -IncludeManagementTools
```

### Configuration

```powershell
# Ajouter des privilèges DHCP
Add-DhcpServerInDC -DnsHostName "SRV-DC01.tssr.local"

# Créer un scope
Add-DhcpServerv4Scope `
    -Name "RESEAU_LAN" `
    -StartRange 192.168.1.100 `
    -EndRange 192.168.1.200 `
    -SubnetMask 255.255.255.0 `
    -State Active

# Configurer les options du scope
Set-DhcpServerv4OptionValue `
    -OptionId 003 -Value "192.168.1.1" `      # Routeur par défaut
    -OptionId 006 -Value "192.168.1.10" `     # DNS
    -ScopeId "192.168.1.0"

# Configurer l'exclusion
Add-DhcpServerv4ExclusionRange `
    -ScopeId "192.168.1.0" `
    -StartRange 192.168.1.1 `
    -EndRange 192.168.1.50
```

### Réservation DHCP

```powershell
# Réserver une IP pour une adresse MAC spécifique
Add-DhcpServerv4Reservation `
    -ScopeId "192.168.1.0" `
    -IPAddress 192.168.1.250 `
    -ClientId "00-1A-2B-3C-4D-5E" `
    -Name "SRV-IMPR01"
```

### Réservation et suivi

```powershell
# Voir les baux actifs
Get-DhcpServerv4Lease -ScopeId "192.168.1.0"

# Statistiques du serveur
Get-DhcpServerv4Statistics
```

---

*Ce contenu sera enrichi au fil des cours.*
