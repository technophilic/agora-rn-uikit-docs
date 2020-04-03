---
id: basic
title: Writing a basic application
---

<br>

Add the following to your App.js
```javascript
import React, { useState } from 'react';
import AgoraUIKit from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appid: '<-----App ID here----->',
    channel: 'test',
  };
  const callbacks = {
    onEndCall: () => setVideoCall(false)
  }
  return (
    videoCall ?
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} /> :<></>
  );
};

export default App;
```