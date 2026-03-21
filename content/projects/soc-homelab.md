---
title: "SOC Home Lab"
date: "2026-03-01"
status: "Active"
type: "Home Lab"
description: "A personal virtualized security operations environment built on VMware, featuring a Kali Linux attacker machine and an Ubuntu defender/target machine — used to practice real-world network attack and detection scenarios."
github: ""
tags: ["VMware", "Kali Linux", "Ubuntu", "Home Lab", "Network Security"]
tools: ["VMware Fusion", "Kali Linux", "Ubuntu", "Wireshark", "Python"]
---

## Lab Architecture

| Component | Role | OS |
|---|---|---|
| Host Machine | Hypervisor | macOS |
| VM 1 | Attacker | Kali Linux |
| VM 2 | Target / Defender | Ubuntu |

The two VMs are connected over a **VMware internal network**, allowing isolated, controlled attack simulation without any risk to the external network.

## What's Been Practiced

- **Network Traffic Generation**: Used Kali Linux to send controlled high-volume traffic to the Ubuntu machine to test the Automated Network Traffic Analyzer script.
- **Live Packet Capture**: Ran Wireshark on Ubuntu to capture incoming traffic from Kali in real time.
- **Threshold Alerting**: Validated the Python analyzer correctly flagged Kali's IP as an anomalous traffic source.

## What's Next

- Set up **Wazuh** agent on Ubuntu for centralized SIEM log ingestion.
- Practice **brute-force attacks** from Kali and detect them via Wazuh dashboards.
- Configure **Fail2Ban** to auto-block flagged IPs.
- Run **Nmap scans** from Kali and build custom detection rules.
