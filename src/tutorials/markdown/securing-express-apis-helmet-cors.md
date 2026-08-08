---
title: "Securing Express REST APIs with Helmet and CORS Middleware"
slug: "securing-express-apis-helmet-cors"
excerpt: "A tutorial on configuring security response headers with Helmet and restricting cross-origin access with CORS middleware."
date: "2026-08-02"
category: "Security"
tags: ["Helmet", "CORS", "Express.js", "Node.js"]
difficulty: "Beginner"
technologies: ["Helmet", "CORS", "Express.js", "Node.js"]
prerequisites: ["Express Server Setup"]
relatedProject: "Aether AI"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/aether-ai"
---

## Introduction

Default Express.js server responses expose HTTP headers (such as `X-Powered-By: Express`) that inform attackers of backend technology choices. Additionally, open cross-origin access without domain restrictions exposes endpoints to unauthorized client origins.

In **Aether AI** and **Gringotts Wizarding Bank**, backend servers utilize **Helmet** and **CORS** middleware to enforce browser security policies.

## What You Will Learn

1. Hiding server signature headers with `helmet()`.
2. Setting strict Content-Security-Policy (CSP) headers.
3. Restricting cross-origin API requests to authorized origins.

## Step-by-Step Implementation

### Step 1: Installing Middleware

```bash
npm install helmet cors
npm install --save-dev @types/cors
```

### Step 2: Configuring Middleware in Express

```typescript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

// Set security HTTP headers
app.use(helmet());

// Restrict CORS origins
const allowedOrigins = [
  'https://aether-ai.vercel.app',
  'http://localhost:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl) or allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Cross-Origin Request Blocked by CORS Policy'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(express.json());
```

## Security Considerations

- Helmet automatically sets headers like `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Strict-Transport-Security`.
- Never use `cors({ origin: '*' })` on production endpoints requiring authenticated cookie sessions.

## Conclusion

Combining Helmet and CORS middleware establishes fundamental security protection for Express REST APIs.

Read more on the [Aether AI Project Page](/projects/aether-ai).
