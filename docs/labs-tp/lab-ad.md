# 🏢 Lab 03 - Active Directory

## Objectifs

- Installer un contrôleur de domaine
- Créer des utilisateurs et groupes
- Mettre en place des OU
- Appliquer des GPO

## Étapes

### 1. Installation du rôle AD DS

```powershell
# Sur Windows Server
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName "tssr.local" -SafeModeAdministratorPassword (Read-Host -AsSecureString "Password123!")
```

### 2. Création des OU

```powershell
New-ADOrganizationalUnit -Name "Serveurs" -Path "DC=tssr,DC=local"
New-ADOrganizationalUnit -Name "Utilisateurs" -Path "DC=tssr,DC=local"
New-ADOrganizationalUnit -Name "Direction" -Path "OU=Utilisateurs,DC=tssr,DC=local"
New-ADOrganizationalUnit -Name "IT" -Path "OU=Utilisateurs,DC=tssr,DC=local"
```

### 3. Création d'utilisateurs

```powershell
# Import CSV
Import-Csv "C:\Users.csv" | ForEach-Object {
    New-ADUser `
        -Name "$($_.Prenom) $($_.Nom)" `
        -GivenName $_.Prenom `
        -Surname $_.Nom `
        -SamAccountName $_.Login `
        -UserPrincipalName "$($_.Login)@tssr.local" `
        -Path "OU=IT,OU=Utilisateurs,DC=tssr,DC=local" `
        -AccountPassword (ConvertTo-SecureString "Password123!" -AsPlainText -Force) `
        -Enabled $true
}
```

### 4. Création d'une GPO

```powershell
# Créer une GPO de restriction logicielle
New-GPO -Name "Restriction_Software_IT" -Comment "Bloque l'exécution de .exe non signés"

# Lier à l'OU IT
New-GPLink -Name "Restriction_Software_IT" -Target "OU=IT,OU=Utilisateurs,DC=tssr,DC=local"
```

## Vérifications

```powershell
Get-ADDomain
Get-ADUser -Filter * -SearchBase "OU=IT,OU=Utilisateurs,DC=tssr,DC=local"
Get-GPO -All | Where-Object { $_.Path -like "*Restriction*" }
```

---

*Ce lab sera enrichi au fil des cours.*
