# 🏗️ Projet 01 - Infrastructure Complète

## Contexte

Vous êtes administrateur système dans une entreprise de 150 employés.
L'entreprise souhaite moderniser son infrastructure IT.

## Objectifs

- Déployer un contrôleur de domaine Active Directory
- Mettre en place des serveurs DNS et DHCP
- Configurer un serveur de fichiers avec partage sécurisé
- Mettre en place un serveur web avec HTTPS
- Configurer un pare-feu avec règles de sécurité
- Mettre en place une solution de backup
- Documenter toute l'infrastructure

## Livrables

1. Topologie réseau dessinée (draw.io ou équivalent)
2. Document d'architecture technique
3. Scripts d'automatisation
4. Rapport de tests de validation
5. Documentation utilisateur

## Barème

| Critère | Points |
|---------|--------|
| Topologie et architecture | 15 |
| AD DS et GPO | 20 |
| Services réseau (DNS/DHCP) | 15 |
| Serveur de fichiers | 10 |
| Serveur web HTTPS | 10 |
| Pare-feu et sécurité | 15 |
| Backup | 10 |
| Documentation | 10 |
| **Total** | **100** |

## Étapes

### Phase 1 : Planification (2 jours)

```bash
# Rédiger le cahier des charges
# Dessiner la topologie
# Choisir les technologies
# Planifier l'adressage IP
```

### Phase 2 : Déploiement (5 jours)

```powershell
# Installation du contrôleur de domaine
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName "entreprise.local"

# Installation DNS et DHCP
Install-WindowsFeature -Name DNS -IncludeManagementTools
Install-WindowsFeature -Name DHCP -IncludeManagementTools
```

### Phase 3 : Configuration (3 jours)

```bash
# Configuration des OU
# Création des utilisateurs
# Mise en place des GPO
# Configuration des partages
```

### Phase 4 : Tests et validation (2 jours)

```bash
# Tests de connectivité
# Tests de sécurité
# Tests de performance
# Tests de backup/restore
```

## Ressources

- [Documentation Microsoft AD DS](https://docs.microsoft.com/fr-fr/windows-server/)
- [Guide de bonnes pratiques AD](https://docs.microsoft.com/fr-fr/windows/server/active-directory/manage/admin/windows-server-ad-recommendations)

---

*Ce projet sera enrichi au fil des cours.*
