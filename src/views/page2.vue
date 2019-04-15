<template>
  <div>
    <kk>{{word}}</kk>
    <button @click="changeComponent">修改组件</button>
    <transition enter-active-class="bounceOut" leave-active-class="bounceOutDown">
      <component class="animated" :is="currentTabComponent"></component>
    </transition>

  </div>
</template>

<script>
import kk from '../components/vue-components/kk'
import k2 from '../components/vue-components/k2'
export default {
  data () {
    return {
      word: 'This is from parent’s content.',
      currentTabComponent: 'k1'
    }
  },
  methods: {
    sendMsg () {
      this.$ajax({
        method: 'post',
        url: '/update',
        data: this.form})
        .then((res) => {
          this.data = res.data.data
        })
    },
    changeComponent () {
      if (this.currentTabComponent === 'k1') {
        this.currentTabComponent = 'k2'
      } else {
        this.currentTabComponent = 'k1'
      }
    }
  },
  created () {
  },
  components: {
    kk,
    'k1': kk,
    k2
  }
}
</script>

<style scoped>
.animated.bounceOut{
  animation-delay: 1s;
  display: none;
}
</style>
