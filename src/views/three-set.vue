<template>
  <div class="set-page">
    <div class="block" v-for="(i,index) in block" :key="index">
      <div :id="i.name"></div>
      <div>{{i.label}}</div>
    </div>
    <div class="block">
      <canvas width="200" height="200" id="clock"></canvas>
    </div>
  </div>
</template>

<script>
import {drawLine} from '../components/draw-line.js'
import {drawNetwork} from '../components/draw-network.js'
import {drawBallTrack} from '../components/draw-ball-track.js'
import {drawLight} from '../components/draw-light.js'
import {drawClock} from '../components/draw-clock.js'
export default {
  data () {
    return {
      block: [
        {name: 'line',
         label: '画线',
         method: drawLine
        },
        {name: 'newwork',
         label: '画网格',
         method: drawNetwork
        },
        {
          name: 'ballTrack',
          label: '动态绘画字母',
          method: drawBallTrack
        },
        {
          name: 'light',
          label: '添加灯光',
          method: drawLight
        }
      ]
    }
  },
  methods: {
  },
  created () {
    this.$ajax({
      method: 'get',
      url: '/class'})
      .then((res) => {
        console.log(res.data)
    })
  },
  mounted() {
    this.block.forEach((item,index) => {
      this.block[index].method()
    })
    drawClock()
    // drawLine()
  },
}
</script>

<style scoped>
.set-page {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.block {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 2px dotted #da8ba6;

  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
