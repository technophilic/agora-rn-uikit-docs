import { ViewProps } from 'react-native';

/**
 * ChannelMediaInfo
 * @property channelName: string or is it?
 * @property token: string
 * @property uid: number
 */
export interface ChannelMediaInfo {
  /**Channel Name */
  channelName: string
  /**token used for joining the channel*/
  token?: string
  /**user ID*/
  uid?: number
}
/**
 * ChannelMediaConfiguration
 * @property src: 
 * @property channels: An array of {@link ChannelMediaInfo}
 * @description: The configuration of the media stream relay
 */
export interface ChannelMediaConfiguration {
  src?: {
    /**The name of the source channel. The default value is NULL, which means the SDK applies the name of the current channel. */
    channelName: string
    /**The token for joining the source channel. It is generated with the channelName and uid you set in srcInfo.
     * - If you have not enabled the App Certificate, set this parameter as the default value NULL, which means the SDK applies the App ID.
     * - If you have enabled the App Certificate, you must use the token generated with the channelName and uid, and the uid must be set as 0. 
     * */
    token?: string
    /**ID of the broadcaster whose media stream you want to relay. The default value is 0, which means the SDK generates a random UID. You must set it as 0. */
    uid?: number
  }
  /** An Array of destination channels. See {@link ChannelMediaInfo} for more info.*/
  channels: Array<ChannelMediaInfo>
}

/**
 * AgoraViewMode
 * @mode hidden Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have clipped contents.
 * @mode FIT Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due to the disparity in the aspect ratio are filled with black.
 */
export enum AgoraViewMode {
  HIDDEN = 1,
  FIT = 2
}

/**
 * UserInfo Object
 * @property uid: number
 * @property userAccount: string
 */
export interface AgoraUserInfo {
  /** The user ID. */
  uid: number
  /** The user account. */
  userAccount: string
};

/** 
 * VideoEncoderConfig details
 * @property width: number | The encoder video's width
 * @property height: number | The encoder video's height
 * @property bitrate: number | The encoder video's bitrate
 * @property frameRate: number | The frameRate of encoder video
 * @property orientationMode: number | The video orientation mode of the video
 * @orientationMode value range is [0 is "mode adapative", 1 is "mode fixed landscape", 2 is "mode fixed portrait"]
 */
export interface VideoEncoderConfig {
  width: number,
  height: number,
  bitrate: number,
  frameRate: number,
  orientationMode: number,
}

/**
 * Option is used to {@link init}
 * @member {@link appid} Sets the appid
 * @member {@link channelProfile} Number channelProfile Sets the channel mode. 0 is communication mode, 1 is broadcasting mode
 * @member {@link VideoEncoderConfig} sets video encoding config
 * @member {@link dualStream} is optional parameter only for enable for detail see [more](https://docs.agora.io/en/Video/API%20Reference/oc/Classes/AgoraRtcEngineKit.html#//api/name/enableDualStreamMode)
 * @member {@link mode} is optional sets only enable video / audio, 0 is audio mode, 1 is video mode
 * @member {@link clientRole} is only work in live mode, 1 is host, 2 is audience
 * @member {@link audioProfile} Sets audio profile to agora rtc sdk See more [details](https://docs.agora.io/en/Video/API%20Reference/oc/Constants/AgoraAudioProfile.html)
 * @member {@link audioScenario} Sets audio scenario to agora rtc sdk more [details](https://docs.agora.io/en/Video/API%20Reference/oc/Constants/AgoraAudioScenario.html)
 * @member {@link beauty} {@link BeautyOption}
 * @member {@link voice} {@link VoiceDecorator}
 */
export interface Option {
  appid: String,
  channelProfile: number,
  videoEncoderConfig: VideoEncoderConfig,
  dualStream: boolean,
  mode: number,
  clientRole: number,
  audioProfile: number,
  audioScenario: number,
  beauty?: BeautyOption,
  voice?: VoiceDecorator,
}

/**
 * VoiceDecorator is decorate local audio voice
 *
 * @description
 *   type 'reverbPreset' range values: [0 is "off", 1 is "popular", 2 is "rnb", 3 is "rock", 4 is "hiphop", 5 is "vocal concert", 6 is "KTV", 7 is "studio"]
 *   type 'changer' range values: [0 is "off", 1 is "old man", 2 is "baby boy", 3 is "baby girl", 4 is "zhubajie", 5 is "ethereal", 6 is "hulk"]
 * @member type: string | the range values ['changer' | 'reverbPreset'] This property is the identifier for audio voice decorator
 * @member value: number | the value for voice parameter option.
 */
export interface VoiceDecorator {
  type: string,
  value: number
}

/** # [ Deprecated see [here](https://docs.agora.io/en/Voice/API%20Reference/java/deprecated.html#_deprecated000070)]*/
export interface PublisherConfig {
  width: number,
  height: number,
  framerate: number,
  bitrate: number,
  defaultLayout: number,
  lifeCycle: number,
  pubishUrl: string,
  rawStreamUrl: string,
  extraInfo: String,
  owner: boolean
}

/**The background image added to the CDN live publishing stream. Once a background image is added, the audience of the CDN live publishing stream can see it.*/
export interface BackgroundImage {
  /**HTTP/HTTPS URL address of the image on the broadcasting video. The maximum length of this parameter is 1024 bytes. */
  url: string,
  /**Position of the image on the upper left of the broadcasting video on the horizontal axis. */
  x: number,
  /**Position of the image on the upper left of the broadcasting video on the vertical axis. */
  y: number,
  /**Width of the image on the broadcasting video. */
  width: number,
  /**Height of the image on the broadcasting video. */
  height: number
}


export interface Size {
  /**
   * Width (pixel) of the video. The default value is 360.
   * - If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
   * - If you push audio streams to the CDN, set the value of width × height to 0 × 0.
   */
  width: number,
  /**
   * Height (pixel) of the video. The default value is 640.
   * - If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
   * - If you push audio streams to the CDN, set the value of width × height to 0 × 0.
   */
  height: number
}

export interface TranscodingUser {
  /**ID of the user in the CDN live streaming. */
  uid: number,
  /** Horizontal position of the video frame of the user from the top left corner of the CDN live streaming.*/
  x: number,
  /**Vertical position of the video frame of the user from the top left corner of the CDN live streaming. */
  y: number,
  /**Width of the video frame of the user on the CDN live streaming. The default value is 360. */
  width: number,
  /**Height of the video frame of the user on the CDN live streaming. The default value is 640. */
  height: number,
  /**The transparency of the video frame of the user in the CDN live stream that ranges between 0.0 and 1.0. 0.0 means that the video frame is completely transparent and 1.0 means opaque. The default value is 1.0. */
  alpha: number,
  /**
   * Layer position of video frame of the user on the CDN live streaming. The value ranges between 0 and 100. From v2.3.0, Agora SDK supports setting zOrder as 0.
   * - The smallest value is 0 (default value), which means that the video frame is at the bottom layer.
   * - The biggest value is 100, which means that the video frame is at the top layer.
   * Note: If the value is set lower than 0 or higher than 100, the ERR_INVALID_ARGUMENT error is reported.
   */
  zOrder: number,
  /**
   * The audio channel ranging between 0 and 5. The default value is 0.
   * - 0: (default) Supports dual channels. Depends on the upstream of the broadcaster.
   * - 1: The audio stream of the broadcaster uses the FL audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
   * - 2: The audio stream of the broadcaster uses the FC audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
   * - 3: The audio stream of the broadcaster uses the FR audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
   * - 4: The audio stream of the broadcaster uses the BL audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
   * - 5: The audio stream of the broadcaster uses the BR audio channel. If the broadcaster’s upstream uses multiple audio channels, these channels are mixed into mono first.
   * Note: Special players are needed if audioChannel is not set as 0.
  */
  audioChannel: number
}

export interface Color {
  red: number,
  green: number,
  blue: number,
  alpha: number
}

export enum VideoCodecProfile {
  BASELINE = 66,
  MAIN = 77,
  HIGH = 100
}

export enum AudioCodecProfile {
  LC_AAC = 0,
  HE_AAC = 1
}

export enum AudioSampleRate {
  TYPE_32000 = 32000,
  TYPE_44100 = 44100,
  TYPE_48000 = 48000,
}

/**
 * AgoraChannelStereo
 * @note Agora’s self-defined audio channel type. We recommend choosing ONE or TWO. Special players are required if you choose TRHEE, FOUR or FIVE:
 */
export enum AudioChannelStereo {
  ONE = 1,
  TWO = 2,
  TRHEE = 3,
  FOUR = 4,
  FIVE = 5
}

/**
 * @member {@link size} {@link Size}
 * @member {@link videoBitrate} integer number
 * @member {@link videoFramerate} integer number
 * @member {@link lowLatency} boolean
 * @member {@link videoGop} number
 * @member {@link videoCodecProfile} {@link VideoCodecProfile}
 * @member {@link audioCodecProfile} {@link AudioCodecProfile}
 * @member {@link audioSampleRate} {@link AudioSampleRate}
 * @member {@link watermark} {@link BackgroundImage}
 * @member {@link backgroundImage} {@link BackgroundImage}
 * @member {@link backgroundColor} Standard RGB hex number: e.g. 0xffffff 
 * @member {@link audioBitrate} number
 * @member {@link audioChannels} {@link AudioChannelStereo}
 * @member {@link transcodingUsers} Array,{@link TranscodingUser}>,
 * @member {@link transcodingExtraInfo} string
 */
export interface LiveTranscodingOption {
  /**
   * `{width: number,height: number}`
   * 
   * Height (pixel) of the video. The default value is 640.
   * - If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
   * - If you push audio streams to the CDN, set the value of width × height to 0 × 0.
   * 
   * Width (pixel) of the video. The default value is 360.
   * - If you push video streams to the CDN, set the value of width × height to at least 64 × 64, or the SDK adjusts it to 64 x 64.
   * - If you push audio streams to the CDN, set the value of width × height to 0 × 0.
   */
  size: Size,
  /** Bitrate (Kbps) of the CDN live output video stream. The default value is 400. Set this parameter according to the Video Bitrate Table. If you set a bitrate beyond the proper range, the SDK automatically adapts it to a value within the range.*/
  videoBitrate: number,
  /**Frame rate (fps) of the CDN live output video stream. The value range is [0, 30]. The default value is 15. Agora adjusts all values over 30 to 30. */
  videoFramerate: number,
  /**### [Deprecated] */
  lowLatency: boolean, // @deprecate lowLatency
  /**Gop of the video frames in the CDN live stream. The default value is 30 fps. */
  videoGop: number,
  /**Video codec profile type: {@link VideoCodecProfile}. Set it as BASELINE, MAIN, or HIGH (default). If you set this parameter to other values, Agora adjusts it to the default value HIGH.*/
  videoCodecProfile: VideoCodecProfile,
  /**Audio codec profile type {@link AudioCodecProfileType}. Set it as LC-AAC or HE-AAC. The default value is LC-AAC. */
  audioCodecProfile: AudioCodecProfile,
  /**Look at {@link AudioSampleRate} for more info. */
  audioSampleRate: AudioSampleRate,
  /**The watermark image added to the CDN live publishing stream. Ensure that the format of the image is PNG. Once a watermark image is added, the audience of the CDN live publishing stream can see it.*/
  watermark: BackgroundImage,
  /**The background image added to the CDN live publishing stream. Once a background image is added, the audience of the CDN live publishing stream can see it.*/
  backgroundImage: BackgroundImage,
  /**### [Deprecated] */
  backgroundColor: number,
  /**Bitrate (Kbps) of the CDN live audio output stream. The default value is 48 and the highest value is 128. */
  audioBitrate: number,
  /**Bitrate (Kbps) of the CDN live audio output stream. The default value is 48 and the highest value is 128. */
  audioChannels: AudioChannelStereo,
  /**An array of Transcoding users. Look at {@link TranscodingUser} for more info. */
  transcodingUsers: Array<TranscodingUser>,
  /**Reserved property. Extra user-defined information to send the Supplemental Enhancement Information (SEI) for the H.264/H.265 video stream to the CDN live client. Maximum length: 4096 Bytes. For more information on SEI frames, see SEI-related questions. */
  transcodingExtraInfo: string,
}

export interface VideoOption {
  /**User ID of the remote user. */
  uid: number,
  /**
   *- 1: RENDER_MODE_HIDDEN (Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have clipped contents).
   *- 2: RENDER_MODE_FIT (Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due to the disparity in the aspect ratio are filled with black).
   *- 3: This mode is **deprecated** and Agora does not recommend using this mode.
   **/
  renderMode: number,
  reactTag: number
}

export interface AudioRecordingOption {
  /**Absolute file path of the recording file. The string of the file name is in UTF-8. */
  filepath: String,
  /**	Sample rate (kHz) of the recording file. Supported values are as follows:
   * - 16
   * - (Default) 32
   * - 44.1
   * - 48 
   * */
  sampleRate: number,
  /**
   * The audio recording quality:
   * - AUDIO_RECORDING_QUALITY_LOW(0): Low audio-recording quality.
   * - AUDIO_RECORDING_QUALITY_MEDIUM(1): Medium audio-recording quality.
   * - AUDIO_RECORDING_QUALITY_HIGH(2): High audio-recording quality.
   */
  quality: number
}

export type Callback<T> = (err: any, data: any) => T;

export type Nullable<T> = T | null | undefined;

export type String = Nullable<string>;
export type Number = Nullable<number> | 0;

/**
 * **An AgoraViewProps object is passed into every {@link AgoraView} as props to render video streams**.
 */
export interface AgoraViewProps extends ViewProps {
  /**
   * - 1: RENDER_MODE_HIDDEN (Uniformly scale the video until it fills the visible boundaries. One dimension of the video may have clipped contents).
   * - 2: RENDER_MODE_FIT (Uniformly scale the video until one of its dimension fits the boundary. Areas that are not filled due to the disparity in the aspect ratio are filled with black).
   * Look at {@link AgoraViewMode} for more info.
   */
  mode: number,
  /**True if the View has to display Local Video. Defaults to false*/
  showLocalVideo: boolean,
  /**uid of the remote user */
  remoteUid: number,
  /**Set to True to overlay an AgoraView on top of another */
  zOrderMediaOverlay: boolean,
  /**ListItem Key. Look [here](https://reactjs.org/docs/lists-and-keys.html#keys) for more info. */
  [key:string]: any;
}

export interface DataStreamOption {
  /**Stream ID of the DataStream */
  streamId: number,
  /**
   * Sets whether or not the recipients receive the data stream in the sent order:
   * - true: The recipients receive the data in the sent order.
   * - false: The recipients do not receive the data in the sent order.
   */
  ordered: boolean,
  /**
   * Sets whether or not the recipients are guaranteed to receive the data stream from the sender within five seconds:
   * - true: The recipients receive the data from the sender within five seconds. If the recipient does not receive the data within five seconds, the SDK triggers the onStreamMessageError callback and returns an error code.
   * - false: There is no guarantee that the recipients receive the data stream within five seconds and no error message is reported for any delay or missing data stream.
   */
  reliable: boolean
}

/** Description of AudioMixingOption interface */
export interface AudioMixingOption {
  /** Specifies the absolute path of the local or online audio file to be mixed. Supported audio formats: mp3, mp4, m4a, aac, 3gp, mkv and wav. See [Supported Media Formats](https://developer.android.com/guide/topics/media/media-formats) for details. 
   * - If the path begins with /assets/, the audio file is in the /assets/ directory.
   * - Otherwise, the audio file is in the absolute path.
  */
  filepath: String,
  /** Sets which user can hear the audio mixing:
   * - true: Only the local user can hear the audio mixing.
   * - false: Both users can hear the audio mixing.
   * */
  loopback: boolean,
  /** Sets the audio mixing content:
   * - true: Only publish the specified audio file; the audio stream from the microphone is not published.
   * - false: The local audio file is mixed with the audio stream from the microphone.
*/
  replace: boolean,
  /** Sets the number of playback loops:
   * - Positive integer: Number of playback loops
   * - -1: Infinite playback loops 
   * */
  cycle: number
}

export interface PlayEffectOption {
  /**
   * ID of the specified audio effect. Each audio effect has a unique ID. If the audio effect is preloaded into the memory through the preloadEffect method, ensure that the soundID value is set to the same value as in the preloadEffect method.
   */
  soundId: number,
  /**
   * Absolute file path of the audio effect file.
   */
  filepath: String,
  /**
   * Sets the number of times the audio effect loops:
   * - 0: Plays the audio effect once.
   * - 1: Plays the audio effect twice.
   * - -1: Plays the audio effect in an indefinite loop until you call the stopEffect or stopAllEffects method.
   */
  loopcount: number,
  /**
   * Pitch of the audio effect. The value ranges between 0.5 and 2. The default value is 1 (no change to the pitch). The lower the value, the lower the pitch.
   */
  pitch: number,
  /**
   * Spatial position of the audio effect. The value ranges between -1.0 and 1.0.
   * - 0.0: The audio effect displays ahead.
   * - 1.0: The audio effect displays to the right.
   * - -1.0: The audio effect displays to the left.
   */
  pan: number,
  /**
   * Volume of the audio effect. The value ranges betwwen 0.0 and 100,0. The default value is 100.0. The lower the value, the lower the volume of the audio effect.
   */
  gain: number,
  /**
   * Set whether or not to publish the specified audio effect to the remote stream:
   * - true: The locally played audio effect is published to the Agora Cloud and the remote users can hear it.
   * - false: The locally played audio effect is not published to the Agora Cloud and the remote users cannot hear it.
   */
  publish: boolean
}

export interface AudioFrameOption {
  /**Sets the sample rate (samplesPerSec) returned in the onPlaybackFrame callback, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz. */
  sampleRate: number,
  /**
   Sets the number of channels (channels) returned in the onPlaybackFrame callback:
   - 1: Mono
   - 2: Stereo 
   */
  channel: number,
  /**
   * Sets the use mode of the onPlaybackFrame callback:
   * - RAW_AUDIO_FRAME_OP_MODE_READ_ONLY(0): Read-only mode: Users only read the AudioFrame data without modifying anything. For example, when users acquire the data with the Agora SDK then push the RTMP streams.
   * - RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY(1): Write-only mode: Users replace the AudioFrame data with their own data. For example, users can use this mode when they acquire data by themselves.
   * - RAW_AUDIO_FRAME_OP_MODE_READ_WRITE(2): Read and write mode: Users read the data from AudioFrame, modify it, and then play it. For example, users can use this mode when they have their own sound-effect processing module, and want to do some voice post-processing, such as a voice change.
   */
  mode: number,
  /**
   * Sets the sample points (samples) returned in the onPlaybackFrame callback. samplesPerCall is usually set as 1024 for stream pushing. samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels), where sampleInterval ≥ 0.01 in seconds.
   */
  samplesPerCall: number
}

export interface MixedAudioFrameOption {
  /**
   * Sets the sample rate (samplesPerSec) returned in the onMixedAudioFrame callback, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
   */
  sampleRate: number,
  /**
   * Sets the sample points (samples) returned in the onMixedAudioFrame callback. samplesPerCall is usually set as 1024 for stream pushing. samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels), where sampleInterval ≥ 0.01 in seconds.
   */
  samplesPerCall: number
}

export interface ImageOption {
  /**Sets whether or not the watermark image is visible in the local video preview:
   * - true: The watermark image is visible in preview.
   * - false: The watermark image is not visible in preview. 
   * */
  visibleInPreview: boolean
  /**The watermark position in the portrait mode. */
  positionInPortraitMode: {
    /**The horizontal offset from the top-left corner. Defaults to 0*/
    x: number,
    /**The vertical offset from the top-left corner. Defaults to 0*/
    y: number,
    /**The width (pixels) of the watermark image. Defaults to 0*/
    width: number,
    /**The height (pixels) of the watermark image. Defaults to 0*/
    height: number,
  }
  /**The watermark position in the landscape mode. */
  positionInLandscapeMode: {
    /**The horizontal offset from the top-left corner. Defaults to 0*/
    x: number,
    /**The vertical offset from the top-left corner. Defaults to 0*/
    y: number,
    /**The width (pixels) of the watermark image. Defaults to 0*/
    width: number,
    /**The height (pixels) of the watermark image. Defaults to 0*/
    height: number,
  }
}

export interface VideoStreamOption {
  /**ID of the remote user sending the video stream.*/
  uid: number,
  /**
   * - 0 : High-stream video (High-resolution, high-bitrate video)
   * - 1 : Low-stream video (Low-resolution, low-bitrate video)
   */
  streamType: number
}

/**
 * Sets the default video-stream type
 */
export interface DefaultVideoStreamOption {
  /**
   * - 0 : High-stream video (High-resolution, high-bitrate video)
   * - 1 : Low-stream video (Low-resolution, low-bitrate video)
   */
  streamType: number
}

export interface InjectStreamOption {
  /**The URL address to be added to the ongoing live broadcast. Valid protocols are RTMP, HLS, and HTTP-FLV.
   * - Supported audio codec type: AAC.
   * - Supported video codec type: H264(AVC). 
   * */
  url: String,
  config: {
    size: {
      /**Width of the added stream to the broadcast. The default value is 0, which is the same width as the original stream. */
      width: number,
      /**Height of the added stream to the broadcast. The default value is 0, which is the same height as the original stream. */
      height: number,
    },
    /**Video GOP of the added stream to the broadcast. The default value is 30 frames. */
    videoGop: number,
    /**Video bitrate of the added stream to the broadcast. The default value is 400 Kbps.
     * 
     *  Note: The setting of the video bitrate is closely linked to the resolution. If you set the video bitrate beyond a reasonable range, the SDK sets it within a reasonable range instead.
     */
    videoBitrate: number,
    /**Video frame rate of the added stream to the broadcast. The default value is 15 fps. */
    videoFramerate: number,
    /**Audio bitrate of the added stream to the broadcast. The default value is 48.
     * 
     *  Note: We recommend you use the default value and not reset it.
     */
    audioBitrate: number,
    /**Audio sample rate of the added stream to the broadcast. The default value is 44100 Hz. */
    audioSampleRate: number,
    /**Audio channels to add into the broadcast. The value ranges between 1 and 2. The default value is 1.
     *  Note: We recommend you use the default value and not reset it.
     */
    audioChannels: number
  }
}

export interface RemoveInjectStreamOption {
  /** HTTP/HTTPS URL address of the added stream to be removed. */
  url: String
}

export interface PublishStreamOption {
  /**
   * The CDN streaming URL in the RTMP format. The maximum length of this parameter is 1024 bytes. The URL address must not contain special characters, such as Chinese language characters.
   */
  url: String,
  /**
   * Sets whether transcoding is enabled/disabled. If you set this parameter as true, ensure that you call the setLiveTranscoding method before this method.
   * - true: Enable transcoding. To transcode the audio or video streams when publishing them to CDN live, often used for combining the audio and video streams of multiple hosts in CDN live.
   * - false: Disable transcoding.
   */
  enable: boolean
}

export interface RemovePublishStreamOption {
  /**The RTMP URL address to be removed. The maximum length of this parameter is 1024 bytes. */
  url: String
}

export interface PositionOption {
  /**The horizontal coordinate of the touch point in the view. */
  x: number,
  /**The vertical coordinate of the touch point in the view. */
  y: number
}

/**
 * BeautyOption is setBeautyEffectOptions's option parameter
 * @property lighteningContrastLevel: integer | lightening contrast level and the value ranges is low: 0, normal: 1, high: 2
 * @property lighteningLevel: float | brightness level and the value ranges between 0.0 (original) and 1.0.
 * @property smoothnessLevel: float | The sharpness level. The value ranges between 0.0 (original) and 1.0. This parameter is usually used to remove blemishes.
 * @property rednessLevel: float | The redness level. The value ranges between 0.0 (original) and 1.0. This parameter adjusts the red saturation level.
 */
export interface BeautyOption {
  lighteningContrastLevel: number,
  lighteningLevel: number,
  smoothnessLevel: number,
  rednessLevel: number,
}

/**
 * LastmileProbeConfig is startLastmileProbeTest's config parameter
 * @property probeUplink: boolean | sets whether or not to test the uplink networks. some users, for example, the audience in a Live-broadcast channel, do not need such a test. true: enables the probe test. false: disables the probe test.
 * @property probeDownlink: boolean | sets whether or not to probe the downlink network. true: enables the probe test. false: disables the probe test.
 * @property expectedUplinkBitrate: integer | The expected maximum sending bitrate (Kbps) of the local user. The value ranges between 100 and 5000. We recommend setting this parameter according to the bitrate value set by setVideoEncoderConfiguration.
 * @property expectedDownlinkBitrate: integer | The expected maximum receiving bitrate (Kbps) of the local user. The value ranges between 100 and 5000.
 */
export interface LastmileProbeConfig {
  probeUplink: boolean,
  probeDownlink: boolean,
  expectedUplinkBitrate: number,
  expectedDownlinkBitrate: number
}


/**
 * CameraCapturerConfiguration is setCameraCapturerConfiguration's config parameter
 * @property preference: number | The Camera capture preference and the value range is [0 is "(default) self-adapts the camera output parameters to the system performance and network conditions to balance CPU consumption and video preview quality.", 1 is "prioritizes the system performance. The SDK chooses the dimension and frame rate of the local camera capture closest to those set by setVideoEncoderConfiguration.", 2 is "prioritizes the local preview quality. The SDK chooses higher camera output parameters to improve the local video preview quality. This option requires extra CPU and RAM usage for video pre-processing."]
 */
export interface CameraCapturerConfiguration {
  preference: number
  cameraDirection: number
}
