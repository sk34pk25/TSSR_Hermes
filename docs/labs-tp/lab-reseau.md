# 🌐 Lab 01 - Configuration Réseau de Base

## Objectifs

- Configurer une adresse IP statique
- Tester la connectivité
- Configurer un serveur DHCP
- Résoudre les noms DNS

## Topologie

```
[PC-CLIENT] --eth0-- [SRV-DC01] --eth1-- [INTERNET]
                       |
                       +--eth2-- [SW-LAN]
```

## Étapes

### 1. Configuration IP statique

```bash
# Sur le serveur
sudo ip addr add 192.168.1.10/24 dev eth0
sudo ip route add default via 192.168.1.1
sudo echo "nameserver 192.168.1.10" > /etc/resolv.conf
```

### 2. Vérification

```bash
ping -c 4 192.168.1.1
ping -c 4 google.com
traceroute 8.8.8.8
```

### 3. Configuration DHCP

```bash
# Installer et configurer ISC DHCP
sudo apt install isc-dhcp-server -y

# /etc/dhcp/dhcpd.conf
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 192.168.1.10;
    option subnet-mask 255.255.255.0;
    option broadcast-address 192.168.1.255;
    default-lease-time 600;
    max-lease-time 7200;
}
```

## Questions de synthèse

1. Quelle est la différence entre DHCP et IP statique ?
2. Comment vérifier les baux DHCP attribués ?
3. Que se passe-t-il si le serveur DHCP est inaccessible ?

---

*Ce lab sera enrichi au fil des cours.*
