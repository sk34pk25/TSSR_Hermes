# 🔒 Hardening des Systèmes

## Principes de base

- **Principe du moindre privilège** : donner le minimum nécessaire
- **Défense en profondeur** : multiples couches de sécurité
- **Minimisation des surfaces d'attaque** : désactiver l'inutile
- **Veille continue** : maintenir à jour

## Hardening Windows Server

```powershell
# Désactiver les services inutiles
Stop-Service -Name "print Spooler" -WarningAction SilentlyContinue
Set-Service -Name "print Spooler" -StartupType Disabled

# Activer le pare-feu Windows
Set-NetFirewallProfile -Profile Domain,Private,Public -Enabled True

# Configurer les politiques de mot de passe
secpol.msc

# Désactiver SMBv1
Set-SmbServerConfiguration -EnableSMB1Protocol $false -Force

# Audit de sécurité
AuditPol /set /subcategory:"Logon" /success:enable /failure:enable
```

## Hardening Linux

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Désactiver les services inutiles
sudo systemctl disable --now bluetooth cups avahi-daemon

# Configurer SSH sécurisé
sudo sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

# Configurer les permissions critiques
sudo chmod 640 /etc/shadow
sudo chmod 644 /etc/passwd
sudo chmod 700 /root

# Configurer les limites de connexion
# /etc/security/limits.conf
* hard maxlogins 5
```

## Hardening Réseau

```
- Désactiver le routage IP si non nécessaire
- Désactiver IP forwarding
- Configurer les ACL sur les équipements
- Masquer les interfaces non utilisées
- Changer les mots de passe par défaut
- Désactiver les services inutiles (telnet, ftp, etc.)
```

## Checklist de hardening

```bash
# Vérifier les services écoutants
sudo ss -tlnp
# ou
sudo netstat -tlnp

# Vérifier les paquets installés
dpkg -l | grep -i "telnet\|ftp\|rsh"

# Vérifier les permissions des fichiers sensibles
ls -la /etc/shadow /etc/passwd /etc/sudoers
```

---

*Ce contenu sera enrichi au fil des cours.*
