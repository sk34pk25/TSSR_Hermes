# ⚙️ Administration Linux

## Gestion des fichiers

### Permissions

```bash
# Afficher les permissions
ls -la

# Changer les permissions
chmod 755 /var/www/html
chmod 644 /etc/nginx/nginx.conf
chmod +x script.sh

# Changer le propriétaire
chown www-data:www-data /var/www/html
chown -R patrik:users /home/patrik

# Permissions spéciales (setuid, setgid, sticky)
chmod 4755 /usr/bin/passwd  # setuid
chmod 2755 /shared/dir      # setgid
chmod 1777 /tmp             # sticky bit
```

### Liens

```bash
# Lien symbolique
ln -s /etc/nginx/nginx.conf /etc/nginx.conf

# Lien dur (hard link)
ln /etc/hostname /tmp/hostname
```

## Gestion des paquets

### Debian/Ubuntu (APT)

```bash
# Mettre à jour la liste des paquets
sudo apt update

# Mettre à jour les paquets installés
sudo apt upgrade -y
sudo apt full-upgrade -y

# Installer un paquet
sudo apt install nginx curl wget

# Désinstaller
sudo apt remove nginx
sudo apt autoremove

# Recherche
apt search nginx
apt-cache policy nginx

# Réparer les dépendances
sudo apt --fix-broken install
```

### RHEL/Rocky (DNF)

```bash
# Mettre à jour
sudo dnf update -y

# Installer
sudo dnf install nginx curl wget

# Recherche
dnf search nginx

# Repository
sudo dnf config-manager --set-enabled epel
```

## Gestion des processus

```bash
# Voir les processus
ps aux
ps -ef | grep nginx

# Surveillance en temps réel
top
htop  # si installé
pgrep nginx

# Tuer un processus
kill -9 PID
pkill nginx

# Lancer en arrière-plan
nohup ./script.sh &
```

## Utilisateurs et groupes

```bash
# Créer un utilisateur
sudo useradd -m -s /bin/bash patrik
sudo passwd patrik

# Modifier
usermod -aG sudo patrik
usermod -s /bin/zsh patrik

# Supprimer
sudo userdel -r patrik

# Groupes
sudo groupadd developpeurs
sudo usermod -aG developpeurs patrik
sudo groups patrik
```

## Système de fichiers

```bash
# Monter/démonter
sudo mount /dev/sdb1 /mnt/data
sudo umount /mnt/data

# Tableau des disques
lsblk
df -h

# Espace disque
du -sh /var/log/*
```

---

*Ce contenu sera enrichi au fil des cours.*
