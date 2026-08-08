---
title: "Setting Up a C++ Project in Unreal Engine 5"
slug: "getting-started-unreal-engine-5-cplusplus"
excerpt: "A beginner tutorial on creating a C++ game project in Unreal Engine 5 targeting Windows and DirectX 12 graphics APIs."
date: "2026-08-01"
category: "Game Development"
tags: ["Unreal Engine 5", "Windows", "DirectX 12"]
difficulty: "Beginner"
technologies: ["Unreal Engine 5", "Windows", "DirectX 12"]
prerequisites: ["Basic C++", "Visual Studio"]
relatedProject: "Project Blackout"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/project-blackout"
---

## Introduction

Unreal Engine 5 (UE5) provides high-performance C++ class infrastructure combined with Blueprint visual scripting. Writing core gameplay logic in C++ maximizes execution speed and provides full access to memory management and low-level engine RHIs.

**Project Blackout** is an **upcoming, in-development** game project built on **Unreal Engine 5** by **Dark Web Technologies**. This tutorial explains initializing a C++ project targeting Windows and DirectX 12.

## Objective

1. Create a C++ project in Unreal Editor 5.
2. Generate custom C++ Character classes.
3. Compile Visual Studio project files.

## Prerequisites

- Unreal Engine 5 installed via Epic Games Launcher
- Visual Studio 2022 with Desktop Development with C++ and Game Development with C++ workloads installed

## Step 1: Project Initialization

1. Open Unreal Editor 5.
2. Select **Games** > **Blank Template**.
3. Under Project Defaults, select **C++** (not Blueprint) and Target Platform **Desktop**.
4. Set Raytracing/Graphics default to **DirectX 12**.
5. Name the project `BlackoutProject` and click **Create**.

## Step 2: Creating a Custom Character Class

In Unreal Editor, navigate to **Tools** > **New C++ Class...**

1. Select **Character** as the parent class.
2. Name the class `ABlackoutBaseCharacter`.
3. Click **Create Class**.

Visual Studio will open displaying `BlackoutBaseCharacter.h` and `BlackoutBaseCharacter.cpp`:

```cpp
// BlackoutBaseCharacter.h
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "BlackoutBaseCharacter.generated.h"

UCLASS()
class BLACKOUTPROJECT_API ABlackoutBaseCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    ABlackoutBaseCharacter();

protected:
    virtual void BeginPlay() override;

public:
    virtual void Tick(float DeltaTime) override;
    virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
};
```

```cpp
// BlackoutBaseCharacter.cpp
#include "BlackoutBaseCharacter.h"

ABlackoutBaseCharacter::ABlackoutBaseCharacter()
{
    PrimaryActorTick.bCanEverTick = true;
}

void ABlackoutBaseCharacter::BeginPlay()
{
    Super::BeginPlay();
    UE_LOG(LogTemp, Warning, TEXT("Project Blackout Base Character Initialized."));
}

void ABlackoutBaseCharacter::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
}

void ABlackoutBaseCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);
}
```

## Step 3: Compiling and Testing

In Visual Studio, set configuration to **Development Editor** and target platform to **Win64**. Press **Ctrl+Shift+B** to compile.

Switch back to Unreal Editor and drag your compiled Character class into the viewport level.

## Project Status Note

Project Blackout is an upcoming game project in active engine pre-production.

## Conclusion

Initializing Unreal Engine 5 with Visual Studio C++ sets up a robust pipeline for desktop game development.

Follow updates on the [Project Blackout Page](/projects/project-blackout).
