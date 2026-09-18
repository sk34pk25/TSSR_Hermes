# 📋 Group Policy Objects (GPO)

## Structure de décision GPO

```
Forêt → Domaine → Site → OU
              ↓           ↓
          Sous-domaines  OU filles
```

L'héritage suit cette hiérarchie : **LMDU**
- **L**ocal
- **S**ite
- **D**omaine
- **U**nités d'Organisation

## Types de GPO

| Type | Usage |
|------|-------|
| **Computer Configuration** | Appliqué aux machines (démarrage) |
| **User Configuration** | Appliqué aux utilisateurs (connexion) |

## Exemples de GPO courantes

### Verrouillage du compte

```
Computer Configuration → Policies → Windows Settings → Security Settings
→ Account Policies → Account Lockout Policy

- Seuil de verrouillage : 5 échecs
- Durée de verrouillage : 30 minutes
- Réinitialiser après : 30 minutes
```

### Politique de mot de passe

```
Computer Configuration → Policies → Windows Settings → Security Settings
→ Account Policies → Password Policy

- Longueur minimale : 12 caractères
- Complexité activée
- Historique : 24 mots de passe
- Durée de vie maximale : 90 jours
```

### Restriction de logiciels

```
Computer Configuration → Policies → Software Settings → Software Restriction Policies
→ Additional Rules → Certificate Rules

Bloquer l'exécution de fichiers .exe non signés
```

### Déploiement de lecteurs réseau

```
User Configuration → Preferences → Windows Settings → Drive Maps

Action : Mettre à jour
Lettre : Z:
Emplacement : \SRV-FILES\Partage
Reconnecter à chaque connexion
```

## Modélisation des GPO

```powershell
# Afficher les GPO appliquées à un utilisateur
Get-GPOReport -All -ReportType HTML -Path "C:\GPO_Report.html"

# Modélisation
Test-GPOReport -All -User "jdupont" -Domain "tssr.local"
```

## Bonnes pratiques

- Utiliser des **noms explicites** pour les GPO
- **Filtrer par sécurité** plutôt que par WMI quand c'est possible
- **Décomposer** les GPO (une GPO = un objectif)
- **Tester** dans un environnement de lab avant déploiement
- **Documenter** les modifications

---

*Ce contenu sera enrichi au fil des cours.*
