<template>
  <div class="set-page">
    <div class="block">
      <div id="line"></div>
      <div>画线</div>
    </div>
  </div>
</template>

<script>
import {drawLine} from '../components/draw-line.js'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted() {
    drawLine()
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
