---
id: "_types_.livetranscodingoption"
title: "LiveTranscodingOption"
sidebar_label: "LiveTranscodingOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [LiveTranscodingOption](_types_.livetranscodingoption.md)

**`member`** [size](_types_.livetranscodingoption.md#size) [Size](_types_.size.md)

**`member`** [videoBitrate](_types_.livetranscodingoption.md#videobitrate) integer number

**`member`** [videoFramerate](_types_.livetranscodingoption.md#videoframerate) integer number

**`member`** [lowLatency](_types_.livetranscodingoption.md#lowlatency) boolean

**`member`** [videoGop](_types_.livetranscodingoption.md#videogop) number

**`member`** [videoCodecProfile](_types_.livetranscodingoption.md#videocodecprofile) [VideoCodecProfile](../enums/_types_.videocodecprofile.md)

**`member`** [audioCodecProfile](_types_.livetranscodingoption.md#audiocodecprofile) [AudioCodecProfile](../enums/_types_.audiocodecprofile.md)

**`member`** [audioSampleRate](_types_.livetranscodingoption.md#audiosamplerate) [AudioSampleRate](../enums/_types_.audiosamplerate.md)

**`member`** [watermark](_types_.livetranscodingoption.md#watermark) [BackgroundImage](_types_.backgroundimage.md)

**`member`** [backgroundImage](_types_.livetranscodingoption.md#backgroundimage) [BackgroundImage](_types_.backgroundimage.md)

**`member`** [backgroundColor](_types_.livetranscodingoption.md#backgroundcolor) Standard RGB hex number: e.g. 0xffffff

**`member`** [audioBitrate](_types_.livetranscodingoption.md#audiobitrate) number

**`member`** [audioChannels](_types_.livetranscodingoption.md#audiochannels) [AudioChannelStereo](../enums/_types_.audiochannelstereo.md)

**`member`** [transcodingUsers](_types_.livetranscodingoption.md#transcodingusers) Array,[TranscodingUser](_types_.transcodinguser.md)>,

**`member`** [transcodingExtraInfo](_types_.livetranscodingoption.md#transcodingextrainfo) string

## Hierarchy

* **LiveTranscodingOption**

## Index

### Properties

* [audioBitrate](_types_.livetranscodingoption.md#audiobitrate)
* [audioChannels](_types_.livetranscodingoption.md#audiochannels)
* [audioCodecProfile](_types_.livetranscodingoption.md#audiocodecprofile)
* [audioSampleRate](_types_.livetranscodingoption.md#audiosamplerate)
* [backgroundColor](_types_.livetranscodingoption.md#backgroundcolor)
* [backgroundImage](_types_.livetranscodingoption.md#backgroundimage)
* [lowLatency](_types_.livetranscodingoption.md#lowlatency)
* [size](_types_.livetranscodingoption.md#size)
* [transcodingExtraInfo](_types_.livetranscodingoption.md#transcodingextrainfo)
* [transcodingUsers](_types_.livetranscodingoption.md#transcodingusers)
* [videoBitrate](_types_.livetranscodingoption.md#videobitrate)
* [videoCodecProfile](_types_.livetranscodingoption.md#videocodecprofile)
* [videoFramerate](_types_.livetranscodingoption.md#videoframerate)
* [videoGop](_types_.livetranscodingoption.md#videogop)
* [watermark](_types_.livetranscodingoption.md#watermark)

## Properties

###  audioBitrate

• **audioBitrate**: *number*

Defined in types.ts:282

Bitrate (Kbps) of the CDN live audio output stream. The default value is 48 and the highest value is 128.

___

###  audioChannels

• **audioChannels**: *[AudioChannelStereo](../enums/_types_.audiochannelstereo.md)*

Defined in types.ts:284

Bitrate (Kbps) of the CDN live audio output stream. The default value is 48 and the highest value is 128.

___

###  audioCodecProfile

• **audioCodecProfile**: *[AudioCodecProfile](../enums/_types_.audiocodecprofile.md)*

Defined in types.ts:272

Audio codec profile type {@link AudioCodecProfileType}. Set it as LC-AAC or HE-AAC. The default value is LC-AAC.

___

###  audioSampleRate

• **audioSampleRate**: *[AudioSampleRate](../enums/_types_.audiosamplerate.md)*

Defined in types.ts:274

Look at [AudioSampleRate](../enums/_types_.audiosamplerate.md) for more info.

___

###  backgroundColor

• **backgroundColor**: *number*

Defined in types.ts:280

### [Deprecated]

___

###  backgroundImage

• **backgroundImage**: *[BackgroundImage](_types_.backgroundimage.md)*

Defined in types.ts:278

The background image added to the CDN live publishing stream. Once a background image is added, the audience of the CDN live publishing stream can see it.

___

###  lowLatency

• **lowLatency**: *boolean*

Defined in types.ts:266

### [Deprecated]

___

###  size

• **size**: *[Size](_types_.size.md)*

Defined in types.ts:260

`{width: number,height: number}`

Height (pixel) of the video. The default value is 640.
- If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
- If you push audio streams to the CDN, set the value of width × height to 0 × 0.

Width (pixel) of the video. The default value is 360.
- If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
- If you push audio streams to the CDN, set the value of width × height to 0 × 0.

___

###  transcodingExtraInfo

• **transcodingExtraInfo**: *string*

Defined in types.ts:288

Reserved property. Extra user-defined information to send the Supplemental Enhancement Information (SEI) for the H.264/H.265 video stream to the CDN live client. Maximum length: 4096 Bytes. For more information on SEI frames, see SEI-related questions.

___

###  transcodingUsers

• **transcodingUsers**: *Array‹[TranscodingUser](_types_.transcodinguser.md)›*

Defined in types.ts:286

An array of Transcoding users. Look at [TranscodingUser](_types_.transcodinguser.md) for more info.

___

###  videoBitrate

• **videoBitrate**: *number*

Defined in types.ts:262

Bitrate (Kbps) of the CDN live output video stream. The default value is 400. Set this parameter according to the Video Bitrate Table. If you set a bitrate beyond the proper range, the SDK automatically adapts it to a value within the range.

___

###  videoCodecProfile

• **videoCodecProfile**: *[VideoCodecProfile](../enums/_types_.videocodecprofile.md)*

Defined in types.ts:270

Video codec profile type: [VideoCodecProfile](../enums/_types_.videocodecprofile.md). Set it as BASELINE, MAIN, or HIGH (default). If you set this parameter to other values, Agora adjusts it to the default value HIGH.

___

###  videoFramerate

• **videoFramerate**: *number*

Defined in types.ts:264

Frame rate (fps) of the CDN live output video stream. The value range is [0, 30]. The default value is 15. Agora adjusts all values over 30 to 30.

___

###  videoGop

• **videoGop**: *number*

Defined in types.ts:268

Gop of the video frames in the CDN live stream. The default value is 30 fps.

___

###  watermark

• **watermark**: *[BackgroundImage](_types_.backgroundimage.md)*

Defined in types.ts:276

The watermark image added to the CDN live publishing stream. Ensure that the format of the image is PNG. Once a watermark image is added, the audience of the CDN live publishing stream can see it.
