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
    let arr = [1,2,3,4,5,6,null,{b: 2}, {a: 2}]
    let arr_a = _.chunk(arr, 2) // 深切割，切完后arr改动不会影响arr_a
    let arr_b = _.compact(arr) // 移除假值（false、null、 0、""、undefined， 以及NaN 都是 “假值”）
    let arr_c = _.difference(arr, [null,2]) // 排除相同项
    let arr_d = _.differenceBy(arr, [{a: 1}], 'a') // 只要对象包含{a:1}都被移除即使该对象不止一个a一个属性
    console.log(arr_d)
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
