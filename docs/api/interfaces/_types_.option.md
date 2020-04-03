---
id: "_types_.option"
title: "Option"
sidebar_label: "Option"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [Option](_types_.option.md)

Option is used to [init](../classes/_rtcengine_native_.rtcengine.md#static-init)

**`member`** [appid](_types_.option.md#appid) Sets the appid

**`member`** [channelProfile](_types_.option.md#channelprofile) Number channelProfile Sets the channel mode. 0 is communication mode, 1 is broadcasting mode

**`member`** [VideoEncoderConfig](_types_.videoencoderconfig.md) sets video encoding config

**`member`** [dualStream](_types_.option.md#dualstream) is optional parameter only for enable for detail see [more](https://docs.agora.io/en/Video/API%20Reference/oc/Classes/AgoraRtcEngineKit.html#//api/name/enableDualStreamMode)

**`member`** [mode](_types_.option.md#mode) is optional sets only enable video / audio, 0 is audio mode, 1 is video mode

**`member`** [clientRole](_types_.option.md#clientrole) is only work in live mode, 1 is host, 2 is audience

**`member`** [audioProfile](_types_.option.md#audioprofile) Sets audio profile to agora rtc sdk See more [details](https://docs.agora.io/en/Video/API%20Reference/oc/Constants/AgoraAudioProfile.html)

**`member`** [audioScenario](_types_.option.md#audioscenario) Sets audio scenario to agora rtc sdk more [details](https://docs.agora.io/en/Video/API%20Reference/oc/Constants/AgoraAudioScenario.html)

**`member`** [beauty](_types_.option.md#optional-beauty) [BeautyOption](_types_.beautyoption.md)

**`member`** [voice](_types_.option.md#optional-voice) [VoiceDecorator](_types_.voicedecorator.md)

## Hierarchy

* **Option**

## Index

### Properties

* [appid](_types_.option.md#appid)
* [audioProfile](_types_.option.md#audioprofile)
* [audioScenario](_types_.option.md#audioscenario)
* [beauty](_types_.option.md#optional-beauty)
* [channelProfile](_types_.option.md#channelprofile)
* [clientRole](_types_.option.md#clientrole)
* [dualStream](_types_.option.md#dualstream)
* [mode](_types_.option.md#mode)
* [videoEncoderConfig](_types_.option.md#videoencoderconfig)
* [voice](_types_.option.md#optional-voice)

## Properties

###  appid

• **appid**: *[String](../modules/_types_.md#string)*

Defined in types.ts:92

___

###  audioProfile

• **audioProfile**: *number*

Defined in types.ts:98

___

###  audioScenario

• **audioScenario**: *number*

Defined in types.ts:99

___

### `Optional` beauty

• **beauty**? : *[BeautyOption](_types_.beautyoption.md)*

Defined in types.ts:100

___

###  channelProfile

• **channelProfile**: *number*

Defined in types.ts:93

___

###  clientRole

• **clientRole**: *number*

Defined in types.ts:97

___

###  dualStream

• **dualStream**: *boolean*

Defined in types.ts:95

___

###  mode

• **mode**: *number*

Defined in types.ts:96

___

###  videoEncoderConfig

• **videoEncoderConfig**: *[VideoEncoderConfig](_types_.videoencoderconfig.md)*

Defined in types.ts:94

___

### `Optional` voice

• **voice**? : *[VoiceDecorator](_types_.voicedecorator.md)*

Defined in types.ts:101
