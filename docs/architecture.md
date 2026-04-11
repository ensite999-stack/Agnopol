# Agnopol Architecture

## Overview

Agnopol is a modular protocol for **privacy-preserving settlement with embedded compliance**.

The system is designed as a set of interoperable layers:

```
+------------------------+
|     Identity Layer     |
+------------------------+
| Transaction Privacy    |
|        Layer           |
+------------------------+
|  Liquidity / Channel   |
|        Layer           |
+------------------------+
```

Each layer is independently replaceable but cryptographically linked.

---

## Design Principles

1. **Privacy by Default**
   No transaction metadata is publicly visible.

2. **Validity Without Disclosure**
   All state transitions are verified via zero-knowledge proofs.

3. **Separation of Identity and Execution**
   Identity is proven, never revealed.

4. **Compliance as a Constraint, Not a Feature**
   The system must support enforceable disclosure without weakening baseline privacy.

---

## 1. Identity Layer

### Purpose

To prove that a user is compliant **without revealing identity**.

---

### Mechanism

Users obtain a credential via:

* Centralized KYC provider
* Decentralized identity network

Credential formats:

* Verifiable Credential (VC)
* On-chain credential NFT
* ZK-compatible identity proof

---

### Transaction Flow

Instead of submitting identity:

User generates a zero-knowledge proof:

```
Proof: "I possess a valid credential issued by an approved authority"
```

Smart contract verifies:

* Credential validity
* Non-revocation

Without learning:

* Who the user is
* Any personal data

---

### Key Property

> Identity is a boolean constraint, not a data field.

---

## 2. Transaction Privacy Layer

This is the core of the protocol.

---

### 2.1 Data Model

Instead of balances, the system uses commitments:

```
C = Hash(amount, blinding_factor)
```

Stored in a Merkle Tree.

---

### 2.2 State Representation

* Global Merkle Root represents system state
* Nullifiers prevent double-spending
* Commitments represent spendable notes

---

### 2.3 Deposit

Input:

* Public asset (ETH / USDC)

Process:

1. Generate commitment C
2. Insert into Merkle Tree
3. Emit commitment event

Output:

* Private note (off-chain secret)

---

### 2.4 Transfer

Sender proves:

* Knowledge of a valid commitment
* Commitment not yet spent
* New commitments are valid

Proof system enforces:

* Conservation of value
* Valid state transition

Outputs:

* New commitments (receiver + change)
* Nullifier for spent commitment

---

### 2.5 Withdraw

User reveals:

* Secret corresponding to commitment

Contract verifies:

* Inclusion proof
* Nullifier unused

Funds are released to a fresh address.

---

### 2.6 Privacy Properties

* No linkage between input and output
* No public balance tracking
* No transaction graph

---

## 3. Liquidity / Channel Layer

### Purpose

To maximize anonymity set and enable composability.

---

### 3.1 Unified Privacy Pool

All assets share a unified logical pool:

* ETH
* USDC
* Wrapped BTC (zBTC)

Benefits:

* Larger anonymity set
* Reduced fragmentation

---

### 3.2 Internal Operations

Inside the pool:

* Transfers
* Swaps (future)
* Cross-chain instructions

All executed as:

> State transitions on commitments

---

### 3.3 Anti-Analysis Mechanisms

To mitigate correlation attacks:

* **Batching** — multiple transactions grouped
* **Delayed settlement** — randomized execution timing
* **Denomination buckets** — standardized amounts

---

### 3.4 MEV Considerations

* Transactions may be routed via private relayers
* Avoid public mempool exposure

---

## 4. Compliance Layer (Overlay)

This layer is logically orthogonal but cryptographically embedded.

---

### 4.1 Privacy Pools Model

Users must prove:

```
Commitment originates from a clean source set
```

Mechanism:

* Association Set Providers (ASP)
* Merkle root of approved addresses
* ZK membership proof

---

### 4.2 Multi-ASP Design

To avoid centralization:

* Multiple independent ASPs
* N-of-M validation model

---

### 4.3 Selective Disclosure

Each transaction includes optional metadata:

* Encrypted payload
* Bound to transaction commitment

---

### 4.4 Conditional Decryption

Decryption requires:

1. Valid trigger (external input)
2. Multi-party approval
3. Time delay

---

### 4.5 Design Goal

> Enable auditability without global transparency.

---

## 5. Cross-Chain Architecture

### 5.1 Ethereum (via CCTP)

Flow:

1. Burn commitment on Base
2. Emit cross-chain message
3. Mint equivalent commitment on Ethereum

---

### 5.2 Bitcoin (via TSS Bridge)

Flow:

1. Lock BTC in threshold-controlled address
2. Mint zBTC on Base
3. Use within privacy pool
4. Burn zBTC → release BTC

---

### 5.3 Security Assumptions

* Honest majority in TSS network
* Correct message relay
* No key compromise

---

## 6. Cryptographic Stack

* ZK Circuit: Noir
* Proof System: UltraPlonk
* Commitment Scheme: Hash-based
* Merkle Trees: Incremental

---

## 7. State Transition Summary

Each transaction enforces:

* Valid input commitments
* Valid output commitments
* No double spend (nullifier)
* Optional compliance constraints

All verified via zero-knowledge proof.

---

## 8. Trust Model

Agnopol minimizes trust but does not eliminate it.

Trust assumptions:

* ZK system soundness
* ASP honesty (bounded via multi-source)
* Bridge security (for cross-chain)

---

## 9. Open Design Questions

* Verifiable legal trigger system
* Decentralized ASP governance
* Fully private MEV resistance
* Cross-chain proof portability

---

## Conclusion

Agnopol is not a single contract.

It is a system that attempts to reconcile:

* Privacy
* Verifiability
* Compliance

At the protocol level.

This architecture is an initial step toward that goal.
