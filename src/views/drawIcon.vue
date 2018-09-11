<template>
  <div class="gowild-back" id="gowild-icon">
    <img id="logo" src="../assets/logo.png"/>
    <div id="json"></div>
  </div>
</template>

<script>
import {saveIconData} from '../components/get-img-data.js'
import drawIcon from '../components/draw-icon.js'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    // saveIconData()
  },
  computed: {
  },
  watch: {
  },
}
</script>

<style scoped>
#logo{
  display: none;
}
</style>
