# 2 如何通过WebRTC进行音视频设备检测呢？
## 音频
- 采样率 
- 采样大小
- 模数转换 A/D
  - 奈奎斯特定理


## 视频设备
- 模数转换A/D模块，光学传感器，将光转换成RGB数据
- 获得RGB后，通过 DSP Digital Signal Procersser, 进行优化处理，如自动增强等。。
- 通过DSP处理后获得24位真彩色图片。3*8=24
- 此时的RGB图像只是临时数据。还要经过压缩、传输。编码器一般要使用YUV I1420，摄像头内部还要有一个将RGB图像转为YUV格式的图像。

什么是YUV呢？
色彩编码方法，主要用于电视系统以及模拟视频领域。
将亮点信息Y和色彩信息UV分离，没有UV就是黑白的

## webRtc设备管理的基本概念 
### 获取音视频设备列表
- [MediaDevices](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices)：提供访问连接到计算机上1的媒体设备的方法。摄像头、麦克风、屏幕截屏



###  设备检测
- MediaDeviceInfo：
  - deviceID
- 默认设备切换
- 先排查视频设备，再排查音频设备

### 小结
1. enumeateDevices
2. 设备切换


# 3 使用浏览器给自己拍照
1. 如何从采集的视频中获取到图片
2. 如何将处理后的图片保存成文件
3. 如何获取到图片进行滤镜处理


### 基础知识
1. 非编码帧 解码帧：可以直接连续播放的帧。摄像头采集的和解码器解码后的帧的都是非编码帧。非编码帧的格式一般都是YUY格式或者RGB格式。
2. 编码帧：通过编码器 H264/H265 、 VP8/VP9 压缩后的帧。
   1. 如H264,有三种：
      1. I帧，关键帧。压缩率低，可以单独解码完整的图像
      2. P帧，参考帧。压缩率高，解码依赖前面已经解码的数据
      3. B帧，前后参考帧。压缩率最高。解码依赖前面已经解码的帧还得依赖后面的P帧。

播放器获取的视频帧一定是非编码帧

### 如何获取视频流
1. 借助html5的video标签将视频播放

### 如何拍照
- cavans
### 如何下载
a链接下载

### 图片美化
- 滤镜处理 css3

### 问题
css滤镜处理的图片，下载后滤镜效果不存在了。如何处理


# 4. 如何把采集下来的视频录制下来

# 5. 浏览器抓取桌面，共享桌面
共享桌面的处理过程：抓屏、压缩编码、传输、解码、显示、控制

共享桌面的协议：
- RDP Remote DeskTop Protocal
- VNC Virtual NetWork Console

远程桌面协议一般分：
- 桌面数据处理：
  - 抓取 采集 ：DirectX等
  - 编码 压缩：webRtc采用的是视频编码技术，H264/VP8等；RDP/VNC采用图片压缩技术
  - 传输：通过流媒体传输协议。webRTC数据可以丢失。RDP/VNC不能丢
  - 解码：对比编码
  - 渲染：通过openGL/D3D进行渲染，webRTC和RDP/VNC可素
- 信令控制
  - 键盘事件
  - 鼠标事件
  - 事件消息处理


1. 抓取桌面  getDisplayMedia
 ```js
var promise = navigator.mediaDevices.getDisplayMedia(constraints);
 ```

2. 