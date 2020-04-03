---
id: "_types_.lastmileprobeconfig"
title: "LastmileProbeConfig"
sidebar_label: "LastmileProbeConfig"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [LastmileProbeConfig](_types_.lastmileprobeconfig.md)

LastmileProbeConfig is startLastmileProbeTest's config parameter

**`property`** probeUplink: boolean | sets whether or not to test the uplink networks. some users, for example, the audience in a Live-broadcast channel, do not need such a test. true: enables the probe test. false: disables the probe test.

**`property`** probeDownlink: boolean | sets whether or not to probe the downlink network. true: enables the probe test. false: disables the probe test.

**`property`** expectedUplinkBitrate: integer | The expected maximum sending bitrate (Kbps) of the local user. The value ranges between 100 and 5000. We recommend setting this parameter according to the bitrate value set by setVideoEncoderConfiguration.

**`property`** expectedDownlinkBitrate: integer | The expected maximum receiving bitrate (Kbps) of the local user. The value ranges between 100 and 5000.

## Hierarchy

* **LastmileProbeConfig**

## Index

### Properties

* [expectedDownlinkBitrate](_types_.lastmileprobeconfig.md#expecteddownlinkbitrate)
* [expectedUplinkBitrate](_types_.lastmileprobeconfig.md#expecteduplinkbitrate)
* [probeDownlink](_types_.lastmileprobeconfig.md#probedownlink)
* [probeUplink](_types_.lastmileprobeconfig.md#probeuplink)

## Properties

###  expectedDownlinkBitrate

• **expectedDownlinkBitrate**: *number*

Defined in types.ts:604

___

###  expectedUplinkBitrate

• **expectedUplinkBitrate**: *number*

Defined in types.ts:603

___

###  probeDownlink

• **probeDownlink**: *boolean*

Defined in types.ts:602

___

###  probeUplink

• **probeUplink**: *boolean*

Defined in types.ts:601
