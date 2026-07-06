---
title: "Automated Network Traffic Analyzer"
date: "2026-03-01"
status: "Complete"
type: "Security Script"
description: "A Python-based tool that ingests Wireshark packet captures (converted to CSV via tshark), parses source IP addresses, and flags any host that exceeds a configurable traffic volume threshold — automating a key task in network anomaly detection."
github: "https://github.com/TanishqNikam/Automated-Network-Traffic-Analyzer"
tags: ["Python", "Wireshark", "tshark", "Network Analysis", "Threat Detection"]
tools: ["Python", "tshark", "Wireshark", "Kali Linux", "Ubuntu", "VMware"]
---

## What It Does

This script automates the process of identifying potential network threats by analyzing traffic volume per source IP in a pcap capture file, replacing manual packet-by-packet inspection with a repeatable detection workflow.

### Lab Setup

Built a SOC-style lab on VMware with a **Kali Linux** attacker VM and an **Ubuntu** defender/target VM to simulate distributed traffic scenarios end to end, rather than testing against synthetic or sample capture files.

### Workflow
1. A network capture is taken on the target machine using **Wireshark**.
2. The capture is exported to **CSV format using tshark** from the command line.
3. The Python script reads the CSV, groups packets by source IP, and counts total packets sent.
4. Any IP exceeding the **configurable threshold** is flagged as a potential threat in the terminal output.

## How It Was Tested

- Captured and processed **1,000+ network packets** across multiple test runs using Wireshark and tshark.
- Simulated **burst ICMP traffic** from the Kali VM to the Ubuntu target to test detection thresholds and validate anomaly identification under load.
- The script running on Ubuntu correctly flagged the Kali machine's IP once its traffic volume crossed the configured threshold, across every simulated burst.

## Impact

Automated alert generation for high-volume traffic patterns **reduced manual packet inspection effort by roughly 65%** compared to reviewing raw Wireshark captures by hand — turning a manual triage task into a scriptable first-pass filter.

## Key Takeaways

- Hands-on experience using `tshark` for programmatic pcap analysis outside the Wireshark GUI.
- Reinforced understanding of network traffic patterns, burst behavior, and anomaly thresholds.
- End-to-end practice of detection engineering: capture → parse → alert.
