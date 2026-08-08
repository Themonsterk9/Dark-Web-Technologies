---
title: "Real-Time Communication in Flutter using Socket.IO"
slug: "realtime-messaging-socket-io-flutter"
excerpt: "Learn how to connect a Flutter mobile client to a Node.js Socket.IO server for bi-directional real-time messaging."
date: "2026-08-02"
category: "Mobile Development"
tags: ["Flutter", "Socket.IO", "Node.js", "Express.js"]
difficulty: "Intermediate"
technologies: ["Flutter", "Socket.IO", "Node.js", "Express.js"]
prerequisites: ["Flutter State Management", "WebSockets"]
relatedProject: "Voyager Chat"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/voyager-chat"
---

## Introduction

Real-time chat interfaces rely on persistent WebSocket connections for low-latency bi-directional message streaming. **Socket.IO** provides automatic fallback transport, heartbeat reconnection, and event-driven messaging.

In **Voyager Chat**—a cross-platform communication app **currently in development**—Socket.IO powers online message delivery between Flutter clients and Node.js servers.

## Objective

1. Install `socket_io_client` in Flutter.
2. Initialize WebSocket connections with custom headers.
3. Emit and receive event streams in Dart.

## Step 1: Dependencies

Add `socket_io_client` to `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  socket_io_client: ^2.0.3
```

## Step 2: Client Connection Class

Create `lib/services/socket_service.dart`:

```dart
import 'package:socket_io_client/socket_io_client.dart' as IO;

class SocketService {
  late IO.Socket _socket;

  void initSocket(String serverUrl, String userToken) {
    _socket = IO.io(
      serverUrl,
      IO.OptionBuilder()
          .setTransports(['websocket'])
          .disableAutoConnect()
          .setExtraHeaders({'authorization': 'Bearer $userToken'})
          .build(),
    );

    _socket.connect();

    _socket.onConnect((_) {
      print('Socket.IO connection established.');
    });

    _socket.on('message_received', (data) {
      print('Incoming message payload: $data');
    });

    _socket.onDisconnect((_) {
      print('Socket.IO connection closed.');
    });
  }

  void sendMessage(String channelId, String text) {
    _socket.emit('send_message', {
      'channelId': channelId,
      'text': text,
      'sentAt': DateTime.now().toIso8601String(),
    });
  }

  void dispose() {
    _socket.dispose();
  }
}
```

## Step 3: Node.js Express Socket.IO Server Listener

In your Node.js backend:

```typescript
import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('send_message', (data) => {
    // Broadcast message to channel subscribers
    io.emit('message_received', data);
  });
});

server.listen(4000, () => console.log('Socket.IO server running on port 4000'));
```

## Development Status Note

Voyager Chat is in active development. Online messaging via Socket.IO is prototyped, while offline mesh features remain in experimental phase.

## Conclusion

Combining Flutter with Socket.IO provides responsive real-time streaming capabilities for multi-platform applications.

Check the [Voyager Chat Project Page](/projects/voyager-chat).
