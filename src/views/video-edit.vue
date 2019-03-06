<template>
  <div class="video-editor-demo-page">
    <video id="demo" width="100" height="100" controls autoplay webkit-playsinline="true" playsinline="true" src="../assets/demo-video/4.mp4"></video>
    <div @click="get">点击</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      video: null
    }
  },
  methods: {
    get() {
      // 法一
      // let videoOrAudioElement = document.querySelector('demo');
      // var audioCtx = new AudioContext();
      // // let myVoice = new Audio('https://official.gowild.cn/hupo-ip/index/play-btn/hupo.mp3');
      // let ctx
      // if (window.AudioContext) {
      //   ctx = new AudioContext();
      // } else if (window.webkitAudioContext) {
      //   ctx = new webkitAudioContext();
      // } else {
      //   console.log('不支持')
      //   return false
      // }
      // let dest = ctx.createMediaStreamDestination();
      // let sourceNode = ctx.createMediaElementSource(videoOrAudioElement);
      // sourceNode.connect(dest);
      // sourceNode.connect(ctx.destination);
      // let audioTrack = dest.stream.getAudioTracks()[0];
      // let videoTrack = dest.stream.getVideoTracks()[0];
      // console.log(videoTrack)
    
    }
  },
  created () {
  },
  mounted() {
    // 法二
    var video = document.getElementById('demo');
    var mediaStream
    video.onplay = function() {
      console.log('pl')
      if (video.captureStream) {
        mediaStream = video.captureStream()
      } else if (video.webkitCaptureStream) {
        ctx = video.webkitCaptureStream();
      } else {
        console.log('不支持')
        return false
      }
      console.log(mediaStream)
      console.log('1',mediaStream.getAudioTracks()[0])
      console.log('2',mediaStream.getVideoTracks()[0])
    };
  }
}
</script>

<style scoped>
#demo{
  opacity: 1;
}
</style>
