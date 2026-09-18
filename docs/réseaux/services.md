# 🔧 Services Réseau

## DNS (Domain Name System)

Résolution de noms d'hôte en adresses IP :

```bash
# Vérifier la résolution DNS
dig @192.168.1.1 example.com
nslookup example.com 192.168.1.1
host example.com

# Configuration DNS sous Linux
cat /etc/resolv.conf
# nameserver 192.168.1.1
# nameserver 8.8.8.8
```

### Enregistrements DNS courants

| Type | Description | Exemple |
|------|-------------|---------|
| A | Adresse IPv4 | `tssr.local → 192.168.1.10` |
| AAAA | Adresse IPv6 | `tssr.local → 2001:db8::1` |
| CNAME | Alias | `www → tssr.local` |
| MX | Serveur de messagerie | `tssr.local → mail.tssr.local` |
| NS | Serveur de noms | `tssr.local → ns1.tssr.local` |
| PTR | Reverse DNS | `1.1.168.192.in-addr.arpa` |
| SOA | Start of Authority | Information de zone |

## DHCP (Dynamic Host Configuration Protocol)

Distribution automatique des adresses IP :

```bash
# Configuration DHCP sur Cisco
Router(config)# ip dhcp pool RESEAU_LAN
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# domain-name tssr.local
Router(dhcp-config)# dns-server 192.168.1.10
Router(dhcp-config)# lease 7

# Exclure des adresses
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.20
```

### DHCP sous Linux (ISC DHCP Server)

```bash
# /etc/dhcp/dhcpd.conf
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 192.168.1.10;
    option domain-name "tssr.local";
    option subnet-mask 255.255.255.0;
    default-lease-time 600;
    max-lease-time 7200;
}
```

## SNMP (Simple Network Management Protocol)

Surveillance et gestion des équipements réseau :

```bash
# Configuration SNMP sur Linux
# /etc/snmp/snmpd.conf
rocommunity public 192.168.1.0/24
syslocation "Salle serveur"
syscontact admin@tssr.local

# Vérification SNMP
snmpwalk -v2c -c public 192.168.1.1
snmpget -v2c -c public 192.168.1.1 sysUpTime.0
```

## NTP (Network Time Protocol)

Synchronisation de l'heure :

```bash
# Configuration NTP sous Linux
timedatectl set-ntp true
chronyc sources -v
# ou
ntpq -p

# Configuration NTP sur Cisco
Router(config)# ntp server 192.168.1.10 prefer
Router(config)# ntp authenticate
Router(config)# ntp authentication-key 1 md5 TSSR_ntp_key
```

---

*Ce contenu sera enrichi au fil des cours.*
