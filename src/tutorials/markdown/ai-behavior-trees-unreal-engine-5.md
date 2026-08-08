---
title: "Configuring AI Behavior Trees and Blackboard Systems in Unreal Engine 5"
slug: "ai-behavior-trees-unreal-engine-5"
excerpt: "A tutorial on creating artificial intelligence Behavior Trees and Blackboard keys for NPC tactical navigation in Unreal Engine 5."
date: "2026-08-02"
category: "AI"
tags: ["AI", "Unreal Engine 5", "Windows"]
difficulty: "Intermediate"
technologies: ["AI", "Unreal Engine 5", "Windows"]
prerequisites: ["UE5 Editor Basics", "C++ Fundamentals"]
relatedProject: "Project Blackout"
author: "Dark Web Technologies Editorial Team"
sources:
  - "/projects/project-blackout"
---

## Introduction

Game artificial intelligence relies on hierarchical state decision trees to direct non-player character (NPC) behaviors—such as patrolling, detecting targets, seeking cover, and engaging opponents.

In **Project Blackout**—an **upcoming** game by **Dark Web Technologies** built on **Unreal Engine 5**—NPC AI systems use UE5 Behavior Trees and Blackboard keys.

## What You Will Learn

1. Creating a UE5 Blackboard asset to store target keys.
2. Building a Behavior Tree with Selector and Sequence nodes.
3. Attaching AI Controllers to C++ Pawn instances.

## Step-by-Step Implementation

### Step 1: Blackboard Key Setup

In Unreal Editor:
1. Create a Blackboard asset named `BB_BlackoutEnemy`.
2. Add a key named `TargetActor` of type `Object` (Base Class: `Actor`).
3. Add a key named `PatrolLocation` of type `Vector`.

### Step 2: C++ AI Controller Binding

```cpp
#include "AIController.h"
#include "BehaviorTree/BehaviorTree.h"
#include "BehaviorTree/BlackboardComponent.h"
#include "BlackoutAIController.generated.h"

UCLASS()
class PROJECTBLACKOUT_API ABlackoutAIController : public AAIController
{
    GENERATED_BODY()

public:
    UPROPERTY(EditDefaultsOnly, Category = "AI")
    UBehaviorTree* BehaviorTreeAsset;

protected:
    virtual void OnPossess(APawn* InPawn) override
    {
        Super::OnPossess(InPawn);

        if (BehaviorTreeAsset)
        {
            RunBehaviorTree(BehaviorTreeAsset);
        }
    }
};
```

## Project Status Note

Project Blackout is an upcoming title in active pre-production.

## Conclusion

UE5 Behavior Trees and Blackboard keys provide a structured, scalable framework for game AI.

Explore updates on the [Project Blackout Page](/projects/project-blackout).
