---
title: "Deploying Aether AI Across Vercel and Render"
slug: "deploying-aether-ai-vercel-render"
excerpt: "A practical guide to deploying Aether AI's React frontend on Vercel and Node.js Express backend on Render with MongoDB Atlas integration."
date: "2026-08-03"
category: "Web Development"
tags: ["Vercel", "Render", "React", "Express", "MongoDB Atlas", "Vite"]
author: "Dark Web Technologies Editorial Team"
relatedProject: "Aether AI"
sources:
  - "/projects/aether-ai"
---

## Introduction

Modern web architecture frequently splits user interface static assets from dynamic backend web services. Placing static frontend builds on Global Edge Networks (CDN) while running dynamic API services on dedicated container hosts achieves low latency, high availability, and optimal resource consumption.

This article details how **Aether AI** was prepared and deployed across **Vercel** (for the React and Vite frontend) and **Render** (for the Node.js and Express backend).

## Project Context

Aether AI requires two distinct hosting environments:
- **Vercel**: Distributes pre-rendered static HTML, CSS, JavaScript, and asset bundles worldwide via edge edge-caching.
- **Render**: Executes the long-running Express server responsible for CORS validation, Brevo email sending, and Google Gemini SDK calls.
- **MongoDB Atlas**: Serves as the cloud database cluster shared by backend instances.

## Deployment Topology

```
[ User Browser ]
  ├──► Static HTML/JS Assets  ──► [ Vercel Edge Network ]
  └──► REST API Requests     ──► [ Render Express Instance ]
                                       │
                                       ▼
                                 [ MongoDB Atlas ]
```

## Technical Configuration

### Client CORS & API Target Configuration

To ensure secure cross-origin communication between Vercel (`https://aether-ai.vercel.app`) and Render (`https://aether-ai-api.onrender.com`), the Express server implements environment-driven CORS headers using Helmet and CORS middleware:

```typescript
// Express Server Setup in Aether AI backend
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'https://aether-ai.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Aether AI server running on port ${PORT}`);
});
```

### Client API Environment Variable

In the Vite React frontend, backend API URLs are configured via environment variables:

```typescript
// Client-side API fetch utility
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://aether-ai-api.onrender.com';

export async function sendPromptToAether(prompt: string) {
  const response = await fetch(`${API_BASE_URL}/api/completion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) {
    throw new Error('API completion request failed');
  }
  return response.json();
}
```

## Problems Encountered & Solutions

### Problem: Cold Start Delays
Free-tier container services can introduce delay on initial request spin-up.

### Solution: Health Check Keep-Alive Pings
A lightweight GET endpoint `/health` was configured on Render to return HTTP 200 OK immediately for uptime monitor verification.

## Conclusion

Distributing Aether AI across Vercel and Render provides global static edge delivery alongside secure, isolated backend execution. 

Read more about [Aether AI](/projects/aether-ai) or inspect our [Technology Stack](/technology).
