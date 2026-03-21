---
title: "Automated Network Traffic Analyzer"
date: "2026-03-01"
status: "Complete"
type: "Security Script"
description: "A Python-based tool that ingests Wireshark packet captures (converted to CSV via tshark), parses source IP addresses, and flags any host that exceeds a configurable traffic volume threshold — automating a key task in network anomaly detection."
github: "https://github.com/TanishqNikam/Automated-Network-Traffic-Analyzer"
tags: ["Python", "Wireshark", "tshark", "Network Analysis", "Threat Detection"]
tools: ["Python", "tshark", "Wireshark", "Kali Linux", "VMware"]
---

## What It Does

This script automates the process of identifying potential network threats by analyzing traffic volume per source IP in a pcap capture file.

### Workflow
1. A network capture is taken on the target machine using **Wireshark**.
2. The capture is exported to **CSV format using tshark** from the command line.
3. The Python script reads the CSV, groups packets by source IP, and counts total packets sent.
4. Any IP exceeding the **configurable threshold** is flagged as a potential threat in the terminal output.

## How It Was Tested

The script was tested in a controlled **home lab environment**:
- **Kali Linux** (attacker) was used to generate high-volume network traffic toward the **Ubuntu** target machine.
- The script running on Ubuntu successfully identified the Kali machine's IP as exceeding the threshold and flagged it.

## Key Takeaways

- Learned how to use `tshark` for programmatic pcap analysis.
- Reinforced understanding of network traffic patterns and anomaly thresholds.
- End-to-end practice of detection engineering: capture → parse → alert.
