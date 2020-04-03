---
id: "_types_.cameracapturerconfiguration"
title: "CameraCapturerConfiguration"
sidebar_label: "CameraCapturerConfiguration"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [CameraCapturerConfiguration](_types_.cameracapturerconfiguration.md)

CameraCapturerConfiguration is setCameraCapturerConfiguration's config parameter

**`property`** preference: number | The Camera capture preference and the value range is [0 is "(default) self-adapts the camera output parameters to the system performance and network conditions to balance CPU consumption and video preview quality.", 1 is "prioritizes the system performance. The SDK chooses the dimension and frame rate of the local camera capture closest to those set by setVideoEncoderConfiguration.", 2 is "prioritizes the local preview quality. The SDK chooses higher camera output parameters to improve the local video preview quality. This option requires extra CPU and RAM usage for video pre-processing."]

## Hierarchy

* **CameraCapturerConfiguration**

## Index

### Properties

* [cameraDirection](_types_.cameracapturerconfiguration.md#cameradirection)
* [preference](_types_.cameracapturerconfiguration.md#preference)

## Properties

###  cameraDirection

• **cameraDirection**: *number*

Defined in types.ts:614

___

###  preference

• **preference**: *number*

Defined in types.ts:613
