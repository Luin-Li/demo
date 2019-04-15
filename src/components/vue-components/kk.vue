<template>
  <div>
    <p>组件k</p>
    <slot></slot>
    <button @click="show=!show">显示动画</button>
    <transition name="animate" enter-active-class="swing" leave-active-class="lightSpeedOut">
      <p v-if="show" class="animated">animate.css</p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
</style>
