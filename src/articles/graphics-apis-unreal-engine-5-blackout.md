---
title: "DirectX 12 and Vulkan Graphics Systems in Project Blackout"
slug: "graphics-apis-unreal-engine-5-blackout"
excerpt: "Exploring low-level graphics rendering APIs in Unreal Engine 5, contrasting DirectX 12 performance on Windows with Vulkan on Android."
date: "2026-08-04"
category: "Game Development"
tags: ["DirectX 12", "Vulkan", "Unreal Engine 5", "Windows", "Android"]
author: "Dark Web Technologies Editorial Team"
relatedProject: "Project Blackout"
sources:
  - "/projects/project-blackout"
---

## Introduction

Cross-platform game engines must support modern low-level graphics APIs to maximize hardware efficiency across desktop and mobile GPUs. **DirectX 12** on Windows and **Vulkan** on Android ARM64 provide explicit command buffer management, multi-threaded rendering submission, and fine-grained memory management.

In **Project Blackout**—an **upcoming** game by **Dark Web Technologies** built on **Unreal Engine 5**—graphics targets are tailored to leverage DirectX 12 on PC hardware and Vulkan on Android devices.

## Technical Overview

1. **DirectX 12 (Windows Desktop Target)**: Enables UE5 Nanite virtualized geometry and Lumen dynamic illumination features on modern GPU architectures.
2. **Vulkan API (Android ARM64 Target)**: Offers explicit mobile GPU hardware submission, reducing driver overhead and CPU thermal throttling during mobile gameplay sessions.
3. **iOS (Planned Coming Soon Target)**: Planned target using Apple Metal rendering pipelines once mobile pre-production matures.

## Development Status

- **Completed**: UE5 RHI (Render Hardware Interface) target configurations for DX12 and Vulkan.
- **In Development**: Shader permutation optimization and mobile texture compression pipelines (ASTC).
- **Upcoming**: Metal API graphics pipeline configuration for iOS.

## Conclusion

Utilizing DirectX 12 and Vulkan allows Project Blackout to scale high-fidelity graphics across Windows and Android platforms.

Explore the [Project Blackout Page](/projects/project-blackout) or inspect our [Technology Stack](/technology).
