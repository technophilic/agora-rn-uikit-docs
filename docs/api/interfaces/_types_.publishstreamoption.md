---
id: "_types_.publishstreamoption"
title: "PublishStreamOption"
sidebar_label: "PublishStreamOption"
---

[rn-agora-docs](../globals.md) › ["types"](../modules/_types_.md) › [PublishStreamOption](_types_.publishstreamoption.md)

## Hierarchy

* **PublishStreamOption**

## Index

### Properties

* [enable](_types_.publishstreamoption.md#enable)
* [url](_types_.publishstreamoption.md#url)

## Properties

###  enable

• **enable**: *boolean*

Defined in types.ts:564

Sets whether transcoding is enabled/disabled. If you set this parameter as true, ensure that you call the setLiveTranscoding method before this method.
- true: Enable transcoding. To transcode the audio or video streams when publishing them to CDN live, often used for combining the audio and video streams of multiple hosts in CDN live.
- false: Disable transcoding.

___

###  url

• **url**: *[String](../modules/_types_.md#string)*

Defined in types.ts:558

The CDN streaming URL in the RTMP format. The maximum length of this parameter is 1024 bytes. The URL address must not contain special characters, such as Chinese language characters.
