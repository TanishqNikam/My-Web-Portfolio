---
title: "Distributed SSH Brute-Force Campaign Detected"
date: "2026-02-15"
severity: "Critical"
tags: ["SSH", "Brute-Force", "Fail2Ban", "SIEM"]
description: "Analysis of a distributed SSH credential stuffing attack originating from multiple IPs across different ASNs."
toolsUsed: ["Wazuh", "Splunk", "Fail2Ban", "Wireshark"]
---

## Executive Summary
On February 15, 2026, the SOC detected anomalous spikes in authentication failures targeting external-facing secure shell (SSH) servers. 

### Initial Detection
Alerts triggered from Wazuh indicating rapid succession of failed logins. Log analysis revealed attackers rotating combinations of common user accounts.

### Investigation & Tools Used
1. **Wazuh Dashboards**: Identified source IP addresses.
2. **Wireshark PCAP Analysis**: Verified no successful connections occurred prior to block.
3. **Fail2Ban Analysis**: Modified jail rules to dynamically increase ban times for repeat offenders.

## Threat Intelligence
The IP addresses involved correlate with a known botnet acting out of compromised IoT devices. 

## Mitigation Steps
- Configured key-based authentication only.
- Disabled root login on all affected outward-facing servers.
- Whitelisted specific administrative subnets and hardened IPtables.
