---
title: "VeriFIR — Blockchain-Based FIR & Evidence Integrity System"
date: "2026-04-01"
status: "Complete"
type: "Blockchain Security"
description: "A tamper-proof First Information Report (FIR) platform that anchors every FIR's cryptographic fingerprint on an Ethereum smart contract, making unauthorized modification mathematically detectable without trusting any central authority."
github: "https://github.com/TanishqNikam/VeriFIR-Blockchain-FIR-System"
tags: ["Blockchain", "Solidity", "Next.js", "IPFS", "MongoDB", "TypeScript"]
tools: ["Next.js", "TypeScript", "Solidity", "Hardhat", "Ethers.js", "MongoDB", "IPFS / Pinata"]
---

## What It Does

India's traditional FIR (First Information Report) system is paper-based and vulnerable to tampering, suppression, and loss. **VeriFIR** digitizes the entire lifecycle of a FIR — from citizen filing to police verification — using blockchain technology to guarantee tamper-evidence and transparency.

## How Integrity Works

Every FIR's core fields are hashed with **SHA-256**. That hash is:
- Stored in **MongoDB** as the primary record,
- Uploaded to **IPFS** (via Pinata) alongside evidence files, and
- Anchored on an **Ethereum smart contract** deployed to the Sepolia testnet — immutable once written.

Anyone can independently verify a FIR's authenticity by recomputing its hash and comparing it against the on-chain record, without needing to trust the platform itself.

## Key Features

- **Role-based dashboards** for citizens, police officers, and administrators, each with scoped access and secure backend APIs.
- **Jurisdiction routing** — FIRs are automatically filtered by pincode so officers only see cases in their area.
- **Three-level verification** — database integrity check, on-chain hash comparison, and deep IPFS verification.
- **Evidence integrity** — images, PDFs, and videos are hashed and pinned to IPFS alongside the FIR record.
- **Immutable audit trail** — every action in the system is logged to an append-only audit log that cannot be modified at the schema level.

## Security Implementation

- Custom **HMAC-SHA256** session tokens over HTTP-only cookies — no third-party JWT library.
- **PBKDF2-SHA512** password hashing with 100,000 iterations and a unique salt per user.
- Server-side role enforcement on every API route — the client is never trusted for authorization.
- Magic-byte file validation to prevent MIME-type spoofing on evidence uploads.
- Rate limiting on login, FIR filing, and evidence upload endpoints.

## Key Takeaways

- End-to-end experience combining a full-stack Next.js application with smart contract development and deployment (Solidity, Hardhat, Sepolia testnet).
- Practical application of cryptographic integrity guarantees (SHA-256 anchoring) to a real-world record-keeping problem.
- Designed and implemented secure-by-default patterns (RBAC, immutable audit logging, rate limiting) across a multi-role system rather than a single-user app.
