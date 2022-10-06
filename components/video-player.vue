<template>
  <div :class="['video-player', { 'is-playing': isPlaying }]">
    <video ref="video" :src="src"></video>

    <img
      :src="
        isPlaying
          ? require('@/assets/images/common/pause.svg')
          : require('@/assets/images/common/play.svg')
      "
      :class="['video-player-button', buttonPosition]"
      @click="handlePlay"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    buttonPosition: { type: String, default: 'center' },
  },
  data() {
    return {
      isPlaying: false,
    }
  },
  mounted() {
    const videoEle = this.$refs.video

    // 暂停
    videoEle.addEventListener('pause', () => {
      this.isPlaying = false
    })

    // 结束
    videoEle.addEventListener('ended', () => {
      this.isPlaying = false
    })

    // 播放中
    videoEle.addEventListener('playing', () => {
      this.isPlaying = true
    })
  },
  methods: {
    handlePlay() {
      const videoEle = this.$refs.video

      if (this.isPlaying) {
        videoEle.pause()
      } else {
        const videos = document.querySelectorAll('video')

        videos.forEach(video => {
          video.pause()
        })

        videoEle.play()
      }
    },
  },
}
</script>

<style lang="scss">
.video-player {
  position: relative;
  display: flex;
  align-items: center;

  &.is-playing {
    &:hover {
      .video-player-button {
        opacity: 1;
      }
    }
    .video-player-button {
      opacity: 0;
    }
  }

  video {
    width: 100%;
  }

  &-button {
    width: var(--length-100px);
    height: var(--length-100px);

    position: absolute;
    cursor: pointer;
    opacity: 1;
    transition: opacity 225ms;

    &.center {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    &.right_bottom {
      right: var(--length-40px);
      bottom: var(--length-40px);
    }
  }
}
</style>