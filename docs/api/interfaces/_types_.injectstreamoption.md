---
id: "_types_.injectstreamoption"
title: "InjectStreamOption"
sidebar_label: "InjectStreamOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [InjectStreamOption](_types_.injectstreamoption.md)

## Hierarchy

* **InjectStreamOption**

## Index

### Properties

* [config](_types_.injectstreamoption.md#config)
* [url](_types_.injectstreamoption.md#url)

## Properties

###  config

• **config**: *object*

Defined in types.ts:519

#### Type declaration:

* **audioBitrate**: *number*

* **audioChannels**: *number*

* **audioSampleRate**: *number*

* **size**(): *object*

  * **height**: *number*

  * **width**: *number*

* **videoBitrate**: *number*

* **videoFramerate**: *number*

* **videoGop**: *number*

___

###  url

• **url**: *[String](../modules/_types_.md#string)*

Defined in types.ts:518

The URL address to be added to the ongoing live broadcast. Valid protocols are RTMP, HLS, and HTTP-FLV.
- Supported audio codec type: AAC.
- Supported video codec type: H264(AVC).
