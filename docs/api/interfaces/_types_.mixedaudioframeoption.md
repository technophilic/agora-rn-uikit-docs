---
id: "_types_.mixedaudioframeoption"
title: "MixedAudioFrameOption"
sidebar_label: "MixedAudioFrameOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [MixedAudioFrameOption](_types_.mixedaudioframeoption.md)

## Hierarchy

* **MixedAudioFrameOption**

## Index

### Properties

* [sampleRate](_types_.mixedaudioframeoption.md#samplerate)
* [samplesPerCall](_types_.mixedaudioframeoption.md#samplespercall)

## Properties

###  sampleRate

• **sampleRate**: *number*

Defined in types.ts:455

Sets the sample rate (samplesPerSec) returned in the onMixedAudioFrame callback, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.

___

###  samplesPerCall

• **samplesPerCall**: *number*

Defined in types.ts:459

Sets the sample points (samples) returned in the onMixedAudioFrame callback. samplesPerCall is usually set as 1024 for stream pushing. samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels), where sampleInterval ≥ 0.01 in seconds.
