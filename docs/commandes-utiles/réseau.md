# 🌐 Commandes Réseau

## Commandes Linux essentielles

### Configuration réseau

```bash
# Voir les interfaces
ip addr show
ip -s link show

# Configuration IP statique
sudo ip addr add 192.168.1.50/24 dev eth0
sudo ip link set eth0 up

# Route par défaut
sudo ip route add default via 192.168.1.1

# DNS
echo "nameserver 8.8.8.8" > /etc/resolv.conf
```

### Diagnostic réseau

```bash
# Ping
ping -c 4 google.com
ping -f 192.168.1.1  # flood ping

# Traceroute
traceroute google.com
tracepath 192.168.1.1

# Test de connectivité
mtr google.com
nmap -sP 192.168.1.0/24

# Ports ouverts
ss -tlnp
netstat -tlnp
lsof -i :80
```

### Outils avancés

```bash
# Wireshark (capture)
sudo tcpdump -i eth0 -nn -v
sudo tcpdump -i eth0 port 80 -w capture.pcap

# Analyse DNS
dig google.com ANY
dig @8.8.8.8 google.com MX
nslookup google.com 1.1.1.1

# Bandwidth
iperf3 -s  # serveur
iperf3 -c 192.168.1.50  # client
```

## Commandes Windows réseau

```powershell
# Configuration IP
Get-NetIPAddress -AddressFamily IPv4
Get-NetAdapter

# Diagnostic
Test-NetConnection -ComputerName google.com -Port 80
Test-Connection -ComputerName 192.168.1.1 -Count 4

# DNS
Resolve-DnsName google.com
Get-DnsClientServerAddress

# Pare-feu réseau
Get-NetFirewallRule | Where-Object {$_.Enabled -eq 'True'}
Get-NetTCPConnection | Where-Object {$_.State -eq 'Listen'}
```

---

*Ce contenu sera enrichi au fil des cours.*
