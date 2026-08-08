---
title: "Designing Modular REST APIs with Express.js and Node.js"
slug: "building-express-rest-api-architecture"
excerpt: "A practical backend tutorial on structuring modular Express.js routes, controllers, and middleware in TypeScript."
date: "2026-08-01"
category: "Backend"
tags: ["Node.js", "Express.js", "TypeScript"]
difficulty: "Beginner"
technologies: ["Node.js", "Express.js", "TypeScript"]
prerequisites: ["Node.js Fundamentals", "HTTP Verbs"]
relatedProject: "Aether AI"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/aether-ai"
---

## Introduction

Modular server architecture isolates routing, controller logic, and data access into separate software layers. This pattern improves code readability, simplifies unit testing, and allows scaling Express applications seamlessly.

In **Aether AI** and **Gringotts Wizarding Bank**, backend services rely on modular Express router layers in Node.js.

## What You Will Learn

1. Structuring an Express backend project with TypeScript.
2. Separating route definitions from controller business logic.
3. Managing global error handling middleware.

## Step-by-Step Implementation

### Step 1: Controller Module

Create `src/controllers/healthController.ts`:

```typescript
import { Request, Response } from 'express';

export const getHealthStatus = (req: Request, res: Response) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
```

### Step 2: Route Module

Create `src/routes/healthRoutes.ts`:

```typescript
import { Router } from 'express';
import { getHealthStatus } from '../controllers/healthController';

const router = Router();
router.get('/health', getHealthStatus);

export default router;
```

### Step 3: Central Server Assembly

In `src/app.ts`:

```typescript
import express from 'express';
import healthRoutes from './routes/healthRoutes';

const app = express();
app.use(express.json());

// Register API routes
app.use('/api', healthRoutes);

export default app;
```

## Conclusion

Structuring Express applications into decoupled routes and controllers improves backend code maintainability.

Read more on the [Aether AI Page](/projects/aether-ai).
