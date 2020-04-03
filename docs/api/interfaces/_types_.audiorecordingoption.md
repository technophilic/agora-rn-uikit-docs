---
id: "_types_.audiorecordingoption"
title: "AudioRecordingOption"
sidebar_label: "AudioRecordingOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [AudioRecordingOption](_types_.audiorecordingoption.md)

## Hierarchy

* **AudioRecordingOption**

## Index

### Properties

* [filepath](_types_.audiorecordingoption.md#filepath)
* [quality](_types_.audiorecordingoption.md#quality)
* [sampleRate](_types_.audiorecordingoption.md#samplerate)

## Properties

###  filepath

• **filepath**: *[String](../modules/_types_.md#string)*

Defined in types.ts:305

Absolute file path of the recording file. The string of the file name is in UTF-8.

___

###  quality

• **quality**: *number*

Defined in types.ts:319

The audio recording quality:
- AUDIO_RECORDING_QUALITY_LOW(0): Low audio-recording quality.
- AUDIO_RECORDING_QUALITY_MEDIUM(1): Medium audio-recording quality.
- AUDIO_RECORDING_QUALITY_HIGH(2): High audio-recording quality.

___

###  sampleRate

• **sampleRate**: *number*

Defined in types.ts:312

Sample rate (kHz) of the recording file. Supported values are as follows:
- 16
- (Default) 32
- 44.1
- 48
