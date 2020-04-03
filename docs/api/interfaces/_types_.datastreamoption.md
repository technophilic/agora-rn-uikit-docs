---
id: "_types_.datastreamoption"
title: "DataStreamOption"
sidebar_label: "DataStreamOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [DataStreamOption](_types_.datastreamoption.md)

## Hierarchy

* **DataStreamOption**

## Index

### Properties

* [ordered](_types_.datastreamoption.md#ordered)
* [reliable](_types_.datastreamoption.md#reliable)
* [streamId](_types_.datastreamoption.md#streamid)

## Properties

###  ordered

• **ordered**: *boolean*

Defined in types.ts:357

Sets whether or not the recipients receive the data stream in the sent order:
- true: The recipients receive the data in the sent order.
- false: The recipients do not receive the data in the sent order.

___

###  reliable

• **reliable**: *boolean*

Defined in types.ts:363

Sets whether or not the recipients are guaranteed to receive the data stream from the sender within five seconds:
- true: The recipients receive the data from the sender within five seconds. If the recipient does not receive the data within five seconds, the SDK triggers the onStreamMessageError callback and returns an error code.
- false: There is no guarantee that the recipients receive the data stream within five seconds and no error message is reported for any delay or missing data stream.

___

###  streamId

• **streamId**: *number*

Defined in types.ts:351

Stream ID of the DataStream
