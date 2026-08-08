// src/buildLogs/buildLogsData.ts
import type { BuildLog } from "./types";

export const buildLogs: BuildLog[] = [
  // ── Aether AI Build Logs ──────────────────────────────────────────────────
  {
    slug: "aether-ai-initial-setup-rag-architecture",
    title: "Aether AI Milestone 1: Initial System Architecture & RAG Pipeline Setup",
    project: "Aether AI",
    date: "2026-07-05",
    status: "Completed",
    excerpt: "Initial project setup establishing React + Vite frontend, Express backend, and RAG architectural pipeline.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["React", "Vite", "Node.js", "Express", "Google Gemini", "RAG"],
    technologies: ["React", "Vite", "Node.js", "Express", "Google Gemini", "RAG"],
    relatedTutorials: ["building-react-vite-ai-interface", "implementing-rag-document-pipeline"],
    content: `
## Overview

This milestone established the core repository structure and architectural decouplings for **Aether AI**.

## What Was Implemented

1. **Frontend Foundation**: Initialized React application with Vite, set up dark cyber layout styles, and integrated client routing.
2. **Backend Server**: Configured Node.js and Express backend server with security headers via Helmet and CORS origin validation.
3. **RAG Pipeline Blueprint**: Designed the document ingestion workflow to split user uploads into semantic chunks before database indexing.

## Current Status

Completed baseline setup and client-server communication channels.
`,
  },
  {
    slug: "aether-ai-gemini-integration-express-backend",
    title: "Aether AI Milestone 2: Express Backend & Google Gemini SDK Integration",
    project: "Aether AI",
    date: "2026-07-18",
    status: "Completed",
    excerpt: "Integrating Google Gemini generative APIs securely into Node.js Express controllers with MongoDB Atlas persistence.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "5 min",
    tags: ["Google Gemini", "Node.js", "Express", "MongoDB Atlas"],
    technologies: ["Node.js", "Express", "Google Gemini", "MongoDB", "MongoDB Atlas"],
    relatedTutorials: ["connecting-react-express-gemini-api"],
    previousSlug: "aether-ai-initial-setup-rag-architecture",
    nextSlug: "aether-ai-vercel-render-deployment",
    content: `
## Overview

Milestone 2 focused on connecting backend Express services to the **Google Gemini** generative SDK and persisting document metadata in **MongoDB Atlas**.

## What Was Implemented

1. **Gemini SDK Controller**: Built backend routes using \`@google/generative-ai\` to process context-augmented prompts securely without exposing API keys.
2. **MongoDB Atlas Connection**: Integrated Mongoose schemas for document metadata and user preferences.
3. **Error & Rate Handling**: Implemented request validation and fallback response formatting.

## Current Status

Completed model integration and database persistence testing.
`,
  },
  {
    slug: "aether-ai-vercel-render-deployment",
    title: "Aether AI Milestone 3: Production Deployment on Vercel & Render",
    project: "Aether AI",
    date: "2026-07-29",
    status: "Production",
    excerpt: "Deploying the React client to Vercel edge networks and the Express backend API container to Render.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["Vercel", "Render", "React", "Express", "Brevo"],
    technologies: ["Vercel", "Render", "React", "Express", "Brevo"],
    relatedTutorials: ["deploying-ai-apps-vercel-render"],
    previousSlug: "aether-ai-gemini-integration-express-backend",
    content: `
## Overview

Milestone 3 finalized cloud infrastructure configuration and deployment pipelines for **Aether AI**.

## What Was Implemented

1. **Vercel Edge Deployment**: Deployed static React client build with single-page app fallback rewrite rules.
2. **Render Web Service**: Deployed Node.js Express container on Render with environment secret protection.
3. **Brevo Email Alerts**: Configured transactional email notifications via Brevo API.

## Current Status

Live in production.
`,
  },

  // ── Gringotts Wizarding Bank Build Logs ─────────────────────────────────
  {
    slug: "gringotts-bank-simulation-setup-frontend",
    title: "Gringotts Simulation Entry 1: React & Vite Frontend Setup",
    project: "Gringotts Wizarding Bank",
    date: "2026-06-10",
    status: "Completed",
    excerpt: "Setting up the full-stack architecture for Gringotts Wizarding Bank, a portfolio and educational banking simulation.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["React", "Vite", "Educational Simulation"],
    technologies: ["React", "Vite", "React Router DOM", "Axios"],
    relatedTutorials: ["building-react-express-banking-simulation"],
    content: `
## Overview

This entry logs the initial development of **Gringotts Wizarding Bank**, an **educational portfolio banking simulation**. It is not a real financial institution.

## What Was Implemented

1. **Frontend Architecture**: Configured React with Vite and Framer Motion for stateful user interfaces.
2. **API Layer Setup**: Configured Axios client instances with baseURL configuration.

## Current Status

Completed baseline simulation frontend.
`,
  },
  {
    slug: "gringotts-jwt-auth-mongoose-models",
    title: "Gringotts Simulation Entry 2: Mongoose Schemas & JWT Authentication",
    project: "Gringotts Wizarding Bank",
    date: "2026-06-22",
    status: "Completed",
    excerpt: "Building user vault schemas in MongoDB with Mongoose and establishing JWT token authentication.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "5 min",
    tags: ["JWT", "bcryptjs", "Express.js", "MongoDB", "Mongoose"],
    technologies: ["Node.js", "Express.js", "Mongoose", "MongoDB", "JWT", "bcryptjs"],
    relatedTutorials: ["jwt-authentication-express-middleware", "mongodb-mongoose-schema-design-simulation"],
    previousSlug: "gringotts-bank-simulation-setup-frontend",
    nextSlug: "gringotts-pdf-statement-generation-qr",
    content: `
## Overview

Configured authentication mechanisms and vault data models for the Gringotts educational banking simulation.

## What Was Implemented

1. **User Vault Schemas**: Defined Mongoose models for simulated user vaults and transactions.
2. **Password Hashing**: Implemented \`bcryptjs\` password hashing and JWT token signing.
3. **Protected Middleware**: Built authorization checks for simulation account endpoints.

## Current Status

Completed authentication and user data modeling.
`,
  },
  {
    slug: "gringotts-pdf-statement-generation-qr",
    title: "Gringotts Simulation Entry 3: PDF Statement Generation & Verification QR Codes",
    project: "Gringotts Wizarding Bank",
    date: "2026-07-12",
    status: "Completed",
    excerpt: "Implementing PDFKit document rendering and QRCode verification signatures for simulated account downloads.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["PDFKit", "QRCode", "Express.js", "Node.js"],
    technologies: ["PDFKit", "QRCode", "Node.js", "Express.js", "Helmet", "CORS"],
    relatedTutorials: ["generating-pdf-statements-node"],
    previousSlug: "gringotts-jwt-auth-mongoose-models",
    content: `
## Overview

Added server-side PDF document generation to enhance the educational simulation experience.

## What Was Implemented

1. **PDF Rendering**: Utilized \`PDFKit\` to build dynamic simulated transaction statements.
2. **QR Code Embedding**: Utilized \`QRCode\` to embed verification Data URIs inside generated PDFs.

## Current Status

Completed statement rendering feature.
`,
  },

  // ── Voyager Chat Build Logs ───────────────────────────────────────────────
  {
    slug: "voyager-chat-flutter-prototype-socketio",
    title: "Voyager Chat Entry 1: Multi-Platform Flutter Prototype & Socket.IO Integration",
    project: "Voyager Chat",
    date: "2026-06-15",
    status: "Completed",
    excerpt: "Initial multi-platform Flutter UI setup targeting Android, iOS, and Windows with Node.js Socket.IO server.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["Flutter", "Socket.IO", "Node.js", "Express.js"],
    technologies: ["Flutter", "Socket.IO", "Node.js", "Express.js", "Android", "iOS", "Windows"],
    relatedTutorials: ["flutter-crossplatform-ui-setup", "realtime-messaging-socket-io-flutter"],
    nextSlug: "voyager-chat-dual-database-postgresql-sqlite",
    content: `
## Overview

Log entry for **Voyager Chat**, a cross-platform messaging application currently **in development**.

## What Was Implemented

1. **Flutter Layout**: Built responsive chat list and conversation view targeting mobile and desktop.
2. **Socket.IO Prototype**: Connected Flutter socket listeners to Node.js backend handlers.

## Current Status

Completed baseline online messaging prototype.
`,
  },
  {
    slug: "voyager-chat-dual-database-postgresql-sqlite",
    title: "Voyager Chat Entry 2: PostgreSQL Server & SQLite Client Caching Design",
    project: "Voyager Chat",
    date: "2026-07-02",
    status: "In Development",
    excerpt: "Designing PostgreSQL relational tables for cloud servers and SQLite local storage for mobile client offline caching.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "5 min",
    tags: ["PostgreSQL", "SQLite", "Flutter", "Node.js"],
    technologies: ["PostgreSQL", "SQLite", "Flutter", "Node.js", "Express.js"],
    relatedTutorials: ["sqlite-local-caching-flutter"],
    previousSlug: "voyager-chat-flutter-prototype-socketio",
    nextSlug: "voyager-chat-ble-mesh-offline-research",
    content: `
## Overview

Designing hybrid storage layers for cloud synchronization and offline client caching.

## Progress & Implementation

1. **PostgreSQL Relational Schema**: Designed tables for user profiles, channel memberships, and server message stores.
2. **SQLite Integration**: Built local database helper classes in Flutter using \`sqflite\`.

## Current Status

In active development.
`,
  },
  {
    slug: "voyager-chat-ble-mesh-offline-research",
    title: "Voyager Chat Entry 3: Bluetooth Low Energy (BLE) Mesh Research & Hardware Testing",
    project: "Voyager Chat",
    date: "2026-07-24",
    status: "In Development",
    excerpt: "Testing Bluetooth Low Energy advertising and peer discovery for zero-connectivity offline mesh messaging.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["Bluetooth Low Energy", "BLE Mesh", "Flutter", "Android"],
    technologies: ["Bluetooth Low Energy", "BLE Mesh", "Flutter", "Android", "GPS"],
    relatedTutorials: ["ble-device-discovery-flutter-concepts"],
    previousSlug: "voyager-chat-dual-database-postgresql-sqlite",
    content: `
## Overview

Investigating offline communication mechanisms for limited-connectivity environments.

## Progress & Implementation

1. **BLE Advertising Tests**: Conducted peer hardware discovery tests using Bluetooth Low Energy protocols on Android test devices.
2. **Packet Routing Research**: Evaluating hop routing algorithms for offline mesh message relaying.

## Current Status

In active development / experimental research.
`,
  },

  // ── Project Blackout Build Logs ───────────────────────────────────────────
  {
    slug: "project-blackout-ue5-setup-cplusplus",
    title: "Project Blackout Log 1: Unreal Engine 5 Environment Setup & C++ Base Classes",
    project: "Project Blackout",
    date: "2026-06-01",
    status: "Completed",
    excerpt: "Initial project setup in Unreal Engine 5 establishing base C++ character classes and DirectX 12 render targets.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["Unreal Engine 5", "Windows", "DirectX 12"],
    technologies: ["Unreal Engine 5", "Windows", "DirectX 12"],
    relatedTutorials: ["getting-started-unreal-engine-5-cplusplus"],
    nextSlug: "project-blackout-dedicated-server-replication",
    content: `
## Overview

Log entry for **Project Blackout**, an **upcoming** multiplayer action game built on **Unreal Engine 5**.

## What Was Implemented

1. **UE5 Project Setup**: Created initial C++ game module targeting Windows desktop with DirectX 12 rendering.
2. **Base Character Class**: Configured character movement component and camera rigs in C++.

## Current Status

Completed baseline engine initialization.
`,
  },
  {
    slug: "project-blackout-dedicated-server-replication",
    title: "Project Blackout Log 2: Dedicated Server Targets & Actor Replication",
    project: "Project Blackout",
    date: "2026-06-28",
    status: "In Development",
    excerpt: "Configuring Unreal Engine 5 dedicated server target builds and testing C++ property replication over UDP.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "5 min",
    tags: ["Networking", "Multiplayer", "Unreal Engine 5"],
    technologies: ["Unreal Engine 5", "Networking", "Multiplayer", "Windows"],
    relatedTutorials: ["unreal-engine-5-actor-replication"],
    previousSlug: "project-blackout-ue5-setup-cplusplus",
    nextSlug: "project-blackout-chaos-vehicles-vulkan-android",
    content: `
## Overview

Configuring server-authoritative multiplayer networking in Unreal Engine 5.

## Progress & Implementation

1. **Dedicated Server Target**: Configured C++ build targets for headless dedicated server compilation.
2. **Actor Replication**: Marked key character properties with \`UPROPERTY(Replicated)\` for client-server UDP sync.

## Current Status

In active development.
`,
  },
  {
    slug: "project-blackout-chaos-vehicles-vulkan-android",
    title: "Project Blackout Log 3: Chaos Vehicle Systems & Android Vulkan Preparation",
    project: "Project Blackout",
    date: "2026-07-20",
    status: "Upcoming",
    excerpt: "Pre-production testing of Chaos vehicle physics and Vulkan API rendering preparation for Android ARM64 hardware.",
    author: "Dark Web Technologies Editorial Team",
    readingTime: "4 min",
    tags: ["Vehicles", "AI", "Vulkan", "Android", "Unreal Engine 5"],
    technologies: ["Unreal Engine 5", "Vehicles", "AI", "Vulkan", "Android", "iOS (Coming Soon)"],
    relatedTutorials: ["building-vehicle-physics-chaos-ue5", "crossplatform-graphics-dx12-vulkan-ue5"],
    previousSlug: "project-blackout-dedicated-server-replication",
    content: `
## Overview

Pre-production exploration of vehicular systems and mobile graphics pipelines.

## Progress & Planned Work

1. **Chaos Vehicle Physics**: Testing multi-wheel suspension and torque curve blueprints in test levels.
2. **Android Vulkan Target**: Configuring Vulkan hardware target profiles for Android ARM64 (iOS coming soon).

## Current Status

Upcoming / Planned feature development.
`,
  },
];

export const getBuildLogBySlug = (slug: string): BuildLog | undefined =>
  buildLogs.find((log) => log.slug === slug);
