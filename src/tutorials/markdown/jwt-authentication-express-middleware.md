---
title: "Implementing JWT Authentication and Route Protection in Express"
slug: "jwt-authentication-express-middleware"
excerpt: "A step-by-step guide to password hashing with bcryptjs and route protection with JSON Web Tokens (JWT) in Node.js Express."
date: "2026-08-02"
category: "Security"
tags: ["JWT", "bcryptjs", "Express.js", "Node.js"]
difficulty: "Intermediate"
technologies: ["JWT", "bcryptjs", "Express.js", "Node.js"]
prerequisites: ["Express Router", "HTTP Headers"]
relatedProject: "Gringotts Wizarding Bank"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/gringotts-wizarding-bank"
---

## Introduction

Securing API endpoints requires verifying user credentials and enforcing authorization tokens across protected routes.

In **Gringotts Wizarding Bank**—a **portfolio and educational banking simulation**—authentication is managed using **JSON Web Tokens (JWT)** and **bcryptjs**.

## Objective

1. Hash user passwords using `bcryptjs`.
2. Generate JWT authorization tokens upon successful login.
3. Protect Express endpoints with custom middleware.

## Step 1: Password Hashing & Token Generation

```typescript
import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key';
const mockUserDatabase = new Map<string, string>(); // email -> passwordHash

app.post('/api/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

  const hashedPassword = await bcrypt.hash(password, 10);
  mockUserDatabase.set(email, hashedPassword);

  res.json({ message: 'User registered in simulation database' });
});

app.post('/api/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const storedHash = mockUserDatabase.get(email);

  if (!storedHash || !(await bcrypt.compare(password, storedHash))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});
```

## Step 2: Route Protection Middleware

```typescript
import { NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  user?: any;
}

function verifyToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
}

app.get('/api/protected/vault', verifyToken, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: `Access granted to simulated vault for user: ${req.user.email}`,
  });
});
```

## Disclaimer

Gringotts Wizarding Bank is strictly a portfolio project and educational banking simulation.

## Conclusion

JWT authentication and bcryptjs hashing form a fundamental security architecture for Node.js Express backends.

Review the [Gringotts Project Page](/projects/gringotts-wizarding-bank) for details.
