<template>
  <div class="set-page">
    <div class="block" v-for="(i,index) in block" :key="index">
      <div :id="i.name"></div>
      <div>{{i.label}}</div>
    </div>
  </div>
</template>

<script>
import {drawLine} from '../components/draw-line.js'
import {drawNetwork} from '../components/draw-network.js'
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
        }
      ]
    }
  },
  methods: {
  },
  created () {
  },
  mounted() {
    this.block.forEach((item,index) => {
      this.block[index].method()
    })
    // drawLine()
  },
}
</script>

<style scoped>
.set-page {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.block {
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 2px dotted #da8ba6;

  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
