---
id: "_types_.audiomixingoption"
title: "AudioMixingOption"
sidebar_label: "AudioMixingOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [AudioMixingOption](_types_.audiomixingoption.md)

Description of AudioMixingOption interface

## Hierarchy

* **AudioMixingOption**

## Index

### Properties

* [cycle](_types_.audiomixingoption.md#cycle)
* [filepath](_types_.audiomixingoption.md#filepath)
* [loopback](_types_.audiomixingoption.md#loopback)
* [replace](_types_.audiomixingoption.md#replace)

## Properties

###  cycle

• **cycle**: *number*

Defined in types.ts:387

Sets the number of playback loops:
- Positive integer: Number of playback loops
- -1: Infinite playback loops

___

###  filepath

• **filepath**: *[String](../modules/_types_.md#string)*

Defined in types.ts:372

Specifies the absolute path of the local or online audio file to be mixed. Supported audio formats: mp3, mp4, m4a, aac, 3gp, mkv and wav. See [Supported Media Formats](https://developer.android.com/guide/topics/media/media-formats) for details.
- If the path begins with /assets/, the audio file is in the /assets/ directory.
- Otherwise, the audio file is in the absolute path.

___

###  loopback

• **loopback**: *boolean*

Defined in types.ts:377

Sets which user can hear the audio mixing:
- true: Only the local user can hear the audio mixing.
- false: Both users can hear the audio mixing.

___

###  replace

• **replace**: *boolean*

Defined in types.ts:382

Sets the audio mixing content:
- true: Only publish the specified audio file; the audio stream from the microphone is not published.
- false: The local audio file is mixed with the audio stream from the microphone.
