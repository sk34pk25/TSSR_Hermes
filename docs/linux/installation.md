# 📥 Installation Linux

## Préparation

1. Télécharger l'ISO depuis le site officiel
2. Créer un média bootable (USB) avec Rufus, BalenaEtcher ou dd
3. Configurer le BIOS/UEFI (Secure Boot désactivé si nécessaire)

## Partitionnement

### Schéma standard pour serveur

| Point de montage | Taille | Format | Description |
|-----------------|--------|--------|-------------|
| /boot/efi | 512 Mo | FAT32 | EFI System Partition |
| /boot | 1 Go | ext4 | Kernel et initramfs |
| / | 30 Go | ext4 | Système racine |
| swap | 4 Go | swap | Mémoire swap |
| /var | 20 Go | ext4 | Logs, caches |
| /home | Restant | ext4 | Données utilisateurs |

### Installation avec LVM

```bash
# Création d'un groupe de stockage
pvcreate /dev/sdb
vgcreate vg_data /dev/sdb
lvcreate -L 50G -n lv_root vg_data
lvcreate -l 100%FREE -n lv_home vg_data
```

## Installation Ubuntu Server

```bash
# Démarrage sur l'ISO
# Sélectionner "Install Ubuntu Server"
# Choisir la langue, disposition clavier
# Réseau : DHCP ou configuration statique
# Proxy : laisser vide si non utilisé
# Mirror : choisir le plus proche
# Partitionnement : Guided - use entire disk
# LVM : oui
# SSH : installer le serveur OpenSSH
# Snapshots : non (pour un serveur)
# Packages à installer :
#   [ ] OpenSSH server
#   [ ] LAMP server
#   [ ] Docker
```

## GRUB

```bash
# Mettre à jour GRUB
sudo update-grub

# Modifier /etc/default/grub
GRUB_DEFAULT=0
GRUB_TIMEOUT=5
GRUB_TIMEOUT_STYLE=hidden
GRUB_DISTRIBUTOR="Ubuntu Server"
GRUB_CMDLINE_LINUX="quiet splash"

# Appliquer
sudo update-grub
```

## Post-installation

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Création d'un utilisateur sudo
sudo adduser patrik
sudo usermod -aG sudo patrik

# Configuration SSH
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
# Modifier :
#   PermitRootLogin no
#   PasswordAuthentication no
#   Port 22
sudo systemctl restart ssh
```

---

*Ce contenu sera enrichi au fil des cours.*
