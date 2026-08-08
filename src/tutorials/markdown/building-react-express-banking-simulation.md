---
title: "Building a Full-Stack Web Application with React and Express"
slug: "building-react-express-banking-simulation"
excerpt: "Learn how to structure a full-stack web application with React, Vite, Express, and Node.js using Gringotts Wizarding Bank simulation as a case study."
date: "2026-08-01"
category: "Web Development"
tags: ["React", "Vite", "Express.js", "Node.js"]
difficulty: "Beginner"
technologies: ["React", "Vite", "Express.js", "Node.js"]
prerequisites: ["JavaScript ES6", "HTTP Basics"]
relatedProject: "Gringotts Wizarding Bank"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/gringotts-wizarding-bank"
---

## Introduction

Full-stack applications combine a client UI with a server API to process workflows, validate data, and manage application state.

**Gringotts Wizarding Bank** is a **portfolio and educational banking simulation** built by **Dark Web Technologies**. It is not a real financial institution. This tutorial demonstrates how to connect a React client to an Express API server using standard JavaScript tools.

## Objective

1. Set up a monorepo or dual-folder project structure for React and Express.
2. Build an Express route returning simulated vault data.
3. Fetch and display data in React using `Axios`.

## Step 1: Express Server API Endpoint

In your Express server, create a route to return simulated vault data:

```typescript
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/vault/summary', (req: Request, res: Response) => {
  res.json({
    vaultNumber: 'Vault-711',
    simulatedGalleons: 500,
    simulatedSickles: 120,
    simulatedKnuts: 45,
    status: 'Active Simulation',
  });
});

app.listen(5000, () => console.log('Gringotts backend running on port 5000'));
```

## Step 2: React Component Fetching Vault Data

In the React frontend, fetch the data with `axios`:

```tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface VaultSummary {
  vaultNumber: string;
  simulatedGalleons: number;
  simulatedSickles: number;
  simulatedKnuts: number;
  status: string;
}

export const VaultCard: React.FC = () => {
  const [vault, setVault] = useState<VaultSummary | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/vault/summary')
      .then((res) => setVault(res.data))
      .catch((err) => console.error('Failed to load simulation data', err));
  }, []);

  if (!vault) return <div>Loading simulated vault data...</div>;

  return (
    <div className="vault-card">
      <h2>{vault.vaultNumber} (Educational Simulation)</h2>
      <p>Simulated Galleons: {vault.simulatedGalleons}</p>
      <p>Simulated Sickles: {vault.simulatedSickles}</p>
      <p>Simulated Knuts: {vault.simulatedKnuts}</p>
    </div>
  );
};
```

## Disclaimer

Gringotts Wizarding Bank is strictly a portfolio project and educational banking simulation.

## Conclusion

Combining React and Express provides a flexible framework for building interactive full-stack web applications.

Learn more on the [Gringotts Project Page](/projects/gringotts-wizarding-bank).
