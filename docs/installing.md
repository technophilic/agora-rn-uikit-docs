---
id: installing
title: Installing the UIKit
---

## Create a new react native app

```
npx react-native init <project name>
```

## Installing peer dependencies

```
npm i react-native-vector-icons
npm i react-native-agora
```

## Link react native vector icons

<!--DOCUSAURUS_CODE_TABS-->

<!--Android-->
<br>
Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:
```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

<!--IOS-->
<br>
```
cd ios
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
cd ../
```
<br>
Add this to `ios/projectname/Info.plist`
```xml
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```


<!--END_DOCUSAURUS_CODE_TABS-->

## Installing the UIKit

```
npm i agora-rn-uikit
```

## Setup for autolinking (IOS only)

<!--DOCUSAURUS_CODE_TABS-->

<!--IOS-->

```
cd ios && pod install && cd ..
```

<!--END_DOCUSAURUS_CODE_TABS-->

**Done!**