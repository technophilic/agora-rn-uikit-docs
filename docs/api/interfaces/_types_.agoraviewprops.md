---
id: "_types_.agoraviewprops"
title: "AgoraViewProps"
sidebar_label: "AgoraViewProps"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [AgoraViewProps](_types_.agoraviewprops.md)

**An AgoraViewProps object is passed into every [AgoraView](../classes/_agoraview_native_.agoraview.md) as props to render video streams**.

## Hierarchy

* any

  ↳ **AgoraViewProps**

## Indexable

* \[ **key**: *string*\]: any

ListItem Key. Look [here](https://reactjs.org/docs/lists-and-keys.html#keys) for more info.

## Index

### Properties

* [mode](_types_.agoraviewprops.md#mode)
* [remoteUid](_types_.agoraviewprops.md#remoteuid)
* [showLocalVideo](_types_.agoraviewprops.md#showlocalvideo)
* [zOrderMediaOverlay](_types_.agoraviewprops.md#zordermediaoverlay)

## Properties

###  mode

• **mode**: *number*

Defined in types.ts:338

- 1: RENDER_MODE_HIDDEN (Uniformly scale the video until it fills the visible boundaries. One dimension of the video may have clipped contents).
- 2: RENDER_MODE_FIT (Uniformly scale the video until one of its dimension fits the boundary. Areas that are not filled due to the disparity in the aspect ratio are filled with black).
Look at [AgoraViewMode](../enums/_types_.agoraviewmode.md) for more info.

___

###  remoteUid

• **remoteUid**: *number*

Defined in types.ts:342

uid of the remote user

___

###  showLocalVideo

• **showLocalVideo**: *boolean*

Defined in types.ts:340

True if the View has to display Local Video. Defaults to false

___

###  zOrderMediaOverlay

• **zOrderMediaOverlay**: *boolean*

Defined in types.ts:344

Set to True to overlay an AgoraView on top of another
