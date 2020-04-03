---
id: "_types_.playeffectoption"
title: "PlayEffectOption"
sidebar_label: "PlayEffectOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [PlayEffectOption](_types_.playeffectoption.md)

## Hierarchy

* **PlayEffectOption**

## Index

### Properties

* [filepath](_types_.playeffectoption.md#filepath)
* [gain](_types_.playeffectoption.md#gain)
* [loopcount](_types_.playeffectoption.md#loopcount)
* [pan](_types_.playeffectoption.md#pan)
* [pitch](_types_.playeffectoption.md#pitch)
* [publish](_types_.playeffectoption.md#publish)
* [soundId](_types_.playeffectoption.md#soundid)

## Properties

###  filepath

• **filepath**: *[String](../modules/_types_.md#string)*

Defined in types.ts:398

Absolute file path of the audio effect file.

___

###  gain

• **gain**: *number*

Defined in types.ts:420

Volume of the audio effect. The value ranges betwwen 0.0 and 100,0. The default value is 100.0. The lower the value, the lower the volume of the audio effect.

___

###  loopcount

• **loopcount**: *number*

Defined in types.ts:405

Sets the number of times the audio effect loops:
- 0: Plays the audio effect once.
- 1: Plays the audio effect twice.
- -1: Plays the audio effect in an indefinite loop until you call the stopEffect or stopAllEffects method.

___

###  pan

• **pan**: *number*

Defined in types.ts:416

Spatial position of the audio effect. The value ranges between -1.0 and 1.0.
- 0.0: The audio effect displays ahead.
- 1.0: The audio effect displays to the right.
- -1.0: The audio effect displays to the left.

___

###  pitch

• **pitch**: *number*

Defined in types.ts:409

Pitch of the audio effect. The value ranges between 0.5 and 2. The default value is 1 (no change to the pitch). The lower the value, the lower the pitch.

___

###  publish

• **publish**: *boolean*

Defined in types.ts:426

Set whether or not to publish the specified audio effect to the remote stream:
- true: The locally played audio effect is published to the Agora Cloud and the remote users can hear it.
- false: The locally played audio effect is not published to the Agora Cloud and the remote users cannot hear it.

___

###  soundId

• **soundId**: *number*

Defined in types.ts:394

ID of the specified audio effect. Each audio effect has a unique ID. If the audio effect is preloaded into the memory through the preloadEffect method, ensure that the soundID value is set to the same value as in the preloadEffect method.
