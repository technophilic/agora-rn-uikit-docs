---
id: customizing
title: Customizing the UI-Kit
---

The UI Kit uses a **styleProps object** which is passed to the AgoraUIKit Component which can be utilized to pass styling information for the child components inside the UI Kit, we can use react-native styling to change the look of everything, from buttons to the theme. 

Here's an example of an `App.js` to use a dark theme with square buttons:

```javascript
import React, { useState } from 'react';
import AgoraUIKit from './src/AgoraUIKit';
import { Dimensions, StyleSheet } from 'react-native';

let dimensions = {                          //get dimensions of the device to use in view styles
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appid: '<-----App ID here----->',
    channel: 'channel-x',
  };

  const callbacks = {
    onEndCall: () => setVideoCall(false),
  };
```
We use the same structure as the basic application and use Dimenions API to get device dimensions.
```javascript
  const custombtnstyle = {
    borderRadius: 23,
    borderWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#007aff',
    backgroundColor: "#111",
    marginHorizontal: 8 * StyleSheet.hairlineWidth,
  }
```
We can define an object with react-native styling to use to change the style of the default buttons.
```javascript
  const styleProps = {
    'minViewStyles': { 'width': 200, 'height': 150 },
    'maxViewStyles': { height: dimensions.height - 20 },
    'localControlStyles': {
      bottom: 0,
      height: 100,
      backgroundColor: '#111',
    },
    'minCloseBtnStyles': {
      width: 34,
      height: 34,
      borderRadius: 17,
      position: 'absolute',
      backgroundColor: "#111",
      borderWidth: 4 * StyleSheet.hairlineWidth,
      borderColor: '#007aff',
    },
    'BtnStyles': custombtnstyle,
    'remoteBtnStyles': {
      'muteRemoteAudio': custombtnstyle,
      'muteRemoteVideo': custombtnstyle,
      'remoteSwap': custombtnstyle,
    },
    'localBtnStyles': {
      'muteLocalAudio': { backgroundColor: "#111" },
      'muteLocalVideo': { backgroundColor: "#111" },
      'switchCamera': { backgroundColor: "#111" },
      'endCall': { backgroundColor: "#111" },
      'fullScreen': { backgroundColor: '#111' }
    },
    'theme': '#fff'
  };
```
We define the `styleProps` object with name of our child components to style and the value to be an object containing the styles.
```javascript
  return (
    videoCall ?
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} styleProps={styleProps} /> : <></>
  );

};

export default App;
```
We pass the styleProps to the `AgoraUIKit` component.