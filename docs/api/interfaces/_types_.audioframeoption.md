---
id: "_types_.audioframeoption"
title: "AudioFrameOption"
sidebar_label: "AudioFrameOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [AudioFrameOption](_types_.audioframeoption.md)

## Hierarchy

* **AudioFrameOption**

## Index

### Properties

* [channel](_types_.audioframeoption.md#channel)
* [mode](_types_.audioframeoption.md#mode)
* [sampleRate](_types_.audioframeoption.md#samplerate)
* [samplesPerCall](_types_.audioframeoption.md#samplespercall)

## Properties

###  channel

• **channel**: *number*

Defined in types.ts:437

Sets the number of channels (channels) returned in the onPlaybackFrame callback:
- 1: Mono
- 2: Stereo

___

###  mode

• **mode**: *number*

Defined in types.ts:444

Sets the use mode of the onPlaybackFrame callback:
- RAW_AUDIO_FRAME_OP_MODE_READ_ONLY(0): Read-only mode: Users only read the AudioFrame data without modifying anything. For example, when users acquire the data with the Agora SDK then push the RTMP streams.
- RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY(1): Write-only mode: Users replace the AudioFrame data with their own data. For example, users can use this mode when they acquire data by themselves.
- RAW_AUDIO_FRAME_OP_MODE_READ_WRITE(2): Read and write mode: Users read the data from AudioFrame, modify it, and then play it. For example, users can use this mode when they have their own sound-effect processing module, and want to do some voice post-processing, such as a voice change.

___

###  sampleRate

• **sampleRate**: *number*

Defined in types.ts:431

Sets the sample rate (samplesPerSec) returned in the onPlaybackFrame callback, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.

___

###  samplesPerCall

• **samplesPerCall**: *number*

Defined in types.ts:448

Sets the sample points (samples) returned in the onPlaybackFrame callback. samplesPerCall is usually set as 1024 for stream pushing. samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels), where sampleInterval ≥ 0.01 in seconds.
