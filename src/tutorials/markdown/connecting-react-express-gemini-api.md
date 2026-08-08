---
title: "Connecting a React Client to an Express Backend with Google Gemini"
slug: "connecting-react-express-gemini-api"
excerpt: "Learn how to build a secure Express API server in Node.js that interfaces with the Google Gemini SDK and serves a React frontend."
date: "2026-08-02"
category: "AI"
tags: ["React", "Node.js", "Express", "Google Gemini"]
difficulty: "Intermediate"
technologies: ["React", "Node.js", "Express", "Google Gemini"]
prerequisites: ["React Hooks", "Node.js Fundamentals"]
relatedProject: "Aether AI"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/aether-ai"
---

## Introduction

Exposing generative AI model keys directly in client-side code compromises security. Production AI web applications route user requests through an intermediate backend server that validates inputs, manages model configuration, and authenticates API keys safely.

In **Aether AI**, an **Express.js** backend orchestrates requests between the React frontend and **Google Gemini** model APIs.

## Objective

1. Set up a Node.js Express API server with CORS and Helmet protection.
2. Integrate the official `@google/generative-ai` SDK.
3. Expose a secure POST endpoint `/api/completion` for the React client.

## Prerequisites

- Node.js v18+
- Google Gemini API key from Google AI Studio
- Express development experience

## Step 1: Backend Server Setup

Initialize the backend project:

```bash
mkdir aether-server
cd aether-server
npm init -y
npm install express cors helmet dotenv @google/generative-ai
npm install --save-dev typescript @types/node @types/express @types/cors ts-node
```

Create `src/server.ts`:

```typescript
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/api/completion', async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt field is required.' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;

    return res.json({ text: response.text() });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'Failed to generate text completion.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

## Step 2: Environment Configuration

Create `.env` in the server root:

```env
PORT=5000
GEMINI_API_KEY=your_actual_gemini_api_key_here
CLIENT_URL=http://localhost:5173
```

## Step 3: Verifying API Response

Run the server with `npx ts-node src/server.ts` and send a test request:

```bash
curl -X POST http://localhost:5000/api/completion \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Explain RAG architecture in one sentence."}'
```

## Conclusion

Structuring the backend with Express isolates API keys from public client bundles and provides centralized error management.

Read more on the [Aether AI Project Page](/projects/aether-ai).
