---
title: "Dual-Database Strategy: PostgreSQL and SQLite in Voyager Chat"
slug: "dual-database-strategy-voyager-chat"
excerpt: "Examining the hybrid storage architecture of Voyager Chat, utilizing PostgreSQL for cloud server storage and SQLite for local mobile device persistence."
date: "2026-08-03"
category: "Databases"
tags: ["PostgreSQL", "SQLite", "Flutter", "Node.js", "Express.js"]
author: "Dark Web Technologies Editorial Team"
relatedProject: "Voyager Chat"
sources:
  - "/projects/voyager-chat"
---

## Introduction

Cross-platform messaging applications require distinct data storage solutions on the server and client. Server databases must handle high-concurrency writes and relational queries, while local mobile databases must provide instant offline access and low-footprint persistence.

In **Voyager Chat**—currently **in development**—a **dual-database strategy** uses **PostgreSQL** on the backend server and **SQLite** locally on Flutter client devices (Android, iOS, and Windows).

## Architectural Breakdown

1. **PostgreSQL Server Database**: Stores user registration profiles, channel metadata, server-side message history, and public key registries.
2. **SQLite Embedded Database**: Resides on the user's mobile device, caching conversation logs, offline outgoing message queues, and local cryptographic keys.

```
[ Client Device ] ──(SQLite Local Cache)
       │
       ▼ (HTTPS / Socket.IO)
[ Node.js Express Server ] ──► [ PostgreSQL Server Database ]
```

## Development Status

- **Completed**: PostgreSQL relational schema design for users and channels; SQLite local table initialization scripts in Flutter (`sqflite`).
- **In Development**: Bi-directional delta synchronization between SQLite local stores and PostgreSQL server instances upon network reconnect.

## Conclusion

Utilizing PostgreSQL for server scalability and SQLite for client-side offline persistence provides Voyager Chat with dynamic performance across online and offline states.

Read more on the [Voyager Chat Project Page](/projects/voyager-chat).
