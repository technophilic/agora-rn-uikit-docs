---
id: "_types_.transcodinguser"
title: "TranscodingUser"
sidebar_label: "TranscodingUser"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [TranscodingUser](_types_.transcodinguser.md)

## Hierarchy

* **TranscodingUser**

## Index

### Properties

* [alpha](_types_.transcodinguser.md#alpha)
* [audioChannel](_types_.transcodinguser.md#audiochannel)
* [height](_types_.transcodinguser.md#height)
* [uid](_types_.transcodinguser.md#uid)
* [width](_types_.transcodinguser.md#width)
* [x](_types_.transcodinguser.md#x)
* [y](_types_.transcodinguser.md#y)
* [zOrder](_types_.transcodinguser.md#zorder)

## Properties

###  alpha

• **alpha**: *number*

Defined in types.ts:174

The transparency of the video frame of the user in the CDN live stream that ranges between 0.0 and 1.0. 0.0 means that the video frame is completely transparent and 1.0 means opaque. The default value is 1.0.

___

###  audioChannel

• **audioChannel**: *number*

Defined in types.ts:192

The audio channel ranging between 0 and 5. The default value is 0.
- 0: (default) Supports dual channels. Depends on the upstream of the broadcaster.
- 1: The audio stream of the broadcaster uses the FL audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
- 2: The audio stream of the broadcaster uses the FC audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
- 3: The audio stream of the broadcaster uses the FR audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
- 4: The audio stream of the broadcaster uses the BL audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
- 5: The audio stream of the broadcaster uses the BR audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
Note: Special players are needed if audioChannel is not set as 0.

___

###  height

• **height**: *number*

Defined in types.ts:172

Height of the video frame of the user on the CDN live streaming. The default value is 640.

___

###  uid

• **uid**: *number*

Defined in types.ts:164

ID of the user in the CDN live streaming.

___

###  width

• **width**: *number*

Defined in types.ts:170

Width of the video frame of the user on the CDN live streaming. The default value is 360.

___

###  x

• **x**: *number*

Defined in types.ts:166

Horizontal position of the video frame of the user from the top left corner of the CDN live streaming.

___

###  y

• **y**: *number*

Defined in types.ts:168

Vertical position of the video frame of the user from the top left corner of the CDN live streaming.

___

###  zOrder

• **zOrder**: *number*

Defined in types.ts:181

Layer position of video frame of the user on the CDN live streaming. The value ranges between 0 and 100. From v2.3.0, Agora SDK supports setting zOrder as 0.
- The smallest value is 0 (default value), which means that the video frame is at the bottom layer.
- The biggest value is 100, which means that the video frame is at the top layer.
Note: If the value is set lower than 0 or higher than 100, the ERR_INVALID_ARGUMENT error is reported.
