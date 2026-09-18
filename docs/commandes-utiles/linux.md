# 🐧 Commandes Linux

## Réseau

```bash
# Configuration IP
ip addr show
ip route show
ip link show

# Test de connectivité
ping -c 4 google.com
traceroute google.com
mtr google.com

# Ports ouverts
ss -tlnp
netstat -tlnp

# DNS
dig google.com
nslookup google.com 8.8.8.8
host google.com

# Trafic réseau
tcpdump -i eth0 port 80
tcpdump -i eth0 -nn -v
tcpdump -i eth0 -w capture.pcap

# Bandwidth
iftop -i eth0
nethogs eth0
```

## Système

```bash
# Ressources système
top
htop
iotop
nmon

# Mémoire
free -h
cat /proc/meminfo

# CPU
lscpu
nproc
cat /proc/cpuinfo

# Disque
df -h
du -sh /var/*
lsblk
fdisk -l

# Température
sensors
cat /sys/class/thermal/thermal_zone*/temp
```

## Processus

```bash
# Lister
ps aux
ps -ef | grep nginx

# Surveillance
top -p PID
htop

# Tuer
kill PID
kill -9 PID
pkill -f "nom_processus"
pkill -TERM nginx

# Priorité
nice -n 10 ./script.sh
renice 10 -p PID
```

## Fichiers

```bash
# Permissions
chmod 755 fichier
chmod +x script.sh
chown www-data:www-data /var/www/html
chown -R user:group /home/user

# Recherche
find / -name "*.conf" -type f
find /var/log -name "*.log" -mtime -7
grep -rn "error" /etc/
grep -i "failed" /var/log/auth.log

# Compression
tar czf backup.tar.gz /etc/
tar xzf backup.tar.gz
gzip fichier
gunzip fichier.gz
```

## Logs

```bash
# Journalctl
journalctl -u nginx
journalctl -xe
journalctl --since "2026-01-01"
journalctl -f

# Logs classiques
cat /var/log/syslog
cat /var/log/auth.log
cat /var/log/dpkg.log
tail -f /var/log/syslog
```

## Cron et tâches

```bash
# Éditer le crontab
crontab -e

# Exemples
# Tâche toutes les heures
0 * * * * /usr/local/bin/backup.sh

# Tâche tous les jours à 2h
0 2 * * * /usr/local/bin/cleanup.sh

# Tâche le lundi à 6h
0 6 * * 1 /usr/local/bin/weekly-report.sh

# Voir les tâches
crontab -l
```

---

*Ce contenu sera enrichi au fil des cours.*
