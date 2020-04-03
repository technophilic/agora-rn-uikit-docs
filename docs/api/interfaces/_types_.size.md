---
id: "_types_.size"
title: "Size"
sidebar_label: "Size"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [Size](_types_.size.md)

## Hierarchy

* **Size**

## Index

### Properties

* [height](_types_.size.md#height)
* [width](_types_.size.md#width)

## Properties

###  height

• **height**: *number*

Defined in types.ts:159

Height (pixel) of the video. The default value is 640.
- If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
- If you push audio streams to the CDN, set the value of width × height to 0 × 0.

___

###  width

• **width**: *number*

Defined in types.ts:153

Width (pixel) of the video. The default value is 360.
- If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
- If you push audio streams to the CDN, set the value of width × height to 0 × 0.
