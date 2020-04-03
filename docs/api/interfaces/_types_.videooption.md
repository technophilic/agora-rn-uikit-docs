---
id: "_types_.videooption"
title: "VideoOption"
sidebar_label: "VideoOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [VideoOption](_types_.videooption.md)

## Hierarchy

* **VideoOption**

## Index

### Properties

* [reactTag](_types_.videooption.md#reacttag)
* [renderMode](_types_.videooption.md#rendermode)
* [uid](_types_.videooption.md#uid)

## Properties

###  reactTag

• **reactTag**: *number*

Defined in types.ts:300

___

###  renderMode

• **renderMode**: *number*

Defined in types.ts:299

- 1: RENDER_MODE_HIDDEN (Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have clipped contents).
- 2: RENDER_MODE_FIT (Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due to the disparity in the aspect ratio are filled with black).
- 3: This mode is **deprecated** and Agora does not recommend using this mode.

___

###  uid

• **uid**: *number*

Defined in types.ts:293

User ID of the remote user.
