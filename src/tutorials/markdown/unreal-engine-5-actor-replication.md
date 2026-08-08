---
title: "Multiplayer Networking Concepts: Actor Replication in UE5"
slug: "unreal-engine-5-actor-replication"
excerpt: "Learn how C++ actor property replication works in Unreal Engine 5 for multiplayer game state synchronization over UDP."
date: "2026-08-02"
category: "Game Development"
tags: ["Networking", "Multiplayer", "Unreal Engine 5"]
difficulty: "Intermediate"
technologies: ["Networking", "Multiplayer", "Unreal Engine 5"]
prerequisites: ["UE5 Fundamentals", "C++ Macros"]
relatedProject: "Project Blackout"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/project-blackout"
---

## Introduction

In client-server game architecture, the dedicated server holds authoritative control over game state. To ensure players see identical character health, transforms, and actions, C++ actor variables must replicate from the server to connected clients.

In **Project Blackout**—an **upcoming** game by **Dark Web Technologies** built on **Unreal Engine 5**—multiplayer synchronization uses UE5's native replication framework.

## Objective

1. Enable replication on a C++ Actor class in UE5.
2. Replicate variables using `UPROPERTY(ReplicatedUsing = ...)`.
3. Implement `GetLifetimeReplicatedProps`.

## Step 1: Configuring Replicated Properties

In your character header file:

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "Net/UnrealNetwork.h"
#include "BlackoutReplicatedCharacter.generated.h"

UCLASS()
class BLACKOUTPROJECT_API ABlackoutReplicatedCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    ABlackoutReplicatedCharacter();

    // Replicated Health property with Notify function
    UPROPERTY(ReplicatedUsing = OnRep_Health, BlueprintReadOnly, Category = "Health")
    float Health;

    UFUNCTION()
    void OnRep_Health();

    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;
};
```

## Step 2: Implementation & Lifetime Replication

In the CPP implementation file:

```cpp
#include "BlackoutReplicatedCharacter.h"

ABlackoutReplicatedCharacter::ABlackoutReplicatedCharacter()
{
    // Enable actor network replication
    bReplicates = true;
    Health = 100.0f;
}

void ABlackoutReplicatedCharacter::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);

    // Register property for network replication
    DODEPRIGHTTIME(ABlackoutReplicatedCharacter, Health);
}

void ABlackoutReplicatedCharacter::OnRep_Health()
{
    // Executes on client when Health variable is updated from server
    UE_LOG(LogTemp, Log, TEXT("Client Health updated to: %f"), Health);
}
```

## Project Status Note

Project Blackout is an upcoming game project. Dedicated server multiplayer replication is under active development.

## Conclusion

Actor property replication in Unreal Engine 5 provides low-overhead network synchronization for multiplayer titles.

Read more on the [Project Blackout Page](/projects/project-blackout).
