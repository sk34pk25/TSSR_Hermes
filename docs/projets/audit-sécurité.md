# 🔍 Projet 03 - Audit de Sécurité

## Contexte

L'entreprise souhaite réaliser un audit complet de sa sécurité informatique avant une certification ISO 27001.

## Objectifs

- Réaliser un audit des postes de travail
- Auditer les serveurs et leurs configurations
- Analyser la sécurité réseau
- Vérifier les politiques de mot de passe
- Tester les sauvegardes
- Rédiger un rapport de conformité

## Livrables

1. Rapport d'audit technique complet
2. Tableau de conformité ISO 27001
3. Plan d'actions correctives
4. Preuves de tests (captures, logs)

## Barème

| Critère | Points |
|---------|--------|
| Audit postes de travail | 15 |
| Audit serveurs | 20 |
| Audit réseau | 20 |
| Tests de sécurité | 15 |
| Rapport de conformité | 15 |
| Plan d'actions | 15 |
| **Total** | **100** |

## Checklist d'audit

### Postes de travail

```bash
# Vérifier les mises à jour
wusa /quiet /norestart /kb:*  # Windows Update

# Vérifier le pare-feu
Get-NetFirewallProfile | Select-Object Name, Enabled

# Vérifier les antivirus
Get-WmiObject -Namespace "root\SecurityCenter2" -Query "SELECT * FROM AntiVirusProduct"

# Vérifier les partages
net share
```

### Serveurs

```bash
# Vérifier les services inutiles
systemctl list-units --type=service --state=running

# Vérifier les ports ouverts
ss -tlnp

# Vérifier les utilisateurs
cat /etc/passwd | grep -v nologin

# Vérifier les permissions
find / -perm -4000 -type f  # SUID
find / -perm -2000 -type f  # SGID
```

### Réseau

```bash
# Scanner le réseau
nmap -sS 192.168.1.0/24

# Vérifier les règles du pare-feu
sudo iptables -L -n -v
sudo ufw status verbose

# Analyser le trafic
tcpdump -i eth0 -nn -v
```

## Rapport type

```markdown
# Rapport d'Audit de Sécurité

## 1. Résumé exécutif
[Bilan global]

## 2. Constats
### 2.1 Points forts
- [Liste des points forts]

### 2.2 Points faibles
- [Liste des points faibles avec niveaux de criticité]

## 3. Plan d'actions
| Action | Priorité | Responsable | Délai | Statut |
|--------|----------|-------------|-------|--------|
| [Action 1] | Critique | [Nom] | [Date] | En cours |

## 4. Conclusion
[Bilan et recommandations]
```

---

*Ce projet sera enrichi au fil des cours.*
