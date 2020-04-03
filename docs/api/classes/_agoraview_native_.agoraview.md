---
id: "_agoraview_native_.agoraview"
title: "AgoraView"
sidebar_label: "AgoraView"
---

[rn-agora-docs](../globals.md) › ["AgoraView.native"](../modules/_agoraview_native_.md) › [AgoraView](_agoraview_native_.agoraview.md)

AgoraView is the render layer for rendering video stream

This class is used to rendering native sdk stream

**`props`** [AgoraViewProps](../interfaces/_types_.agoraviewprops.md)

**`descrption`** AgoraViewProps has four properties.

**`property`** mode: [AgoraViewMode](../enums/_types_.agoraviewmode.md), this property will setup video render mode. You could see more [details](https://docs.agora.io/en/Interactive%20Broadcast/API%20Reference/java/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#ac08882c4d0ec47b329900df169493673)

**`property`** showLocalVideo: boolean, this property will render local video, NOTICE: IF YOU SET showLocalVideo YOU CANNOT SET remoteUid

**`property`** remoteUid: number, this property will render video with remote uid, NOTICE: IF YOU SET remoteUid YOU CANNOT SET showLocalVideo

**`property`** zOrderMediaOverlay: boolean, this property will working for android side and it likes zIndex behaviour on web side.

**`noinheritdoc`** 

## Hierarchy

* any

  ↳ **AgoraView**

## Index

### Methods

* [getHTMLProps](_agoraview_native_.agoraview.md#private-gethtmlprops)
* [render](_agoraview_native_.agoraview.md#render)

## Methods

### `Private` getHTMLProps

▸ **getHTMLProps**(): *[AgoraViewProps](../interfaces/_types_.agoraviewprops.md)*

Defined in AgoraView.native.tsx:50

getHTMLProps

get agora view props

**Returns:** *[AgoraViewProps](../interfaces/_types_.agoraviewprops.md)*

___

###  render

▸ **render**(): *JSX.Element*

Defined in AgoraView.native.tsx:39

render

It would render view for VideoStream

**Returns:** *JSX.Element*
