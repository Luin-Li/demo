<template>
  <div>
    <!-- 模板语法 -->
    <!-- 模板语法一：插值 -->
    <div>{{a}}</div>
    <!-- 模板语法二：指令 -->
    <div :class="className">hello</div>
    <input v-model="a"/>
    <div @click="getInfo"></div>
    <!-- Class 与 Style 绑定 -->
    <div :class="{className: a === 'hello'}">hello</div>
    <div :style="{ color: 'red', fontSize: `${fontSize}px` }">{{a}}</div>
    <!-- 条件渲染 -->
    <div v-if="a === 'hello'"></div>
    <!-- 列表渲染 -->
    <div v-for="i in array" :key="i">{{i}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 'hello',
      className: 'h',
      fontSize: 30,
      array: [1,2,3]
    }
  },
  methods: {
    getInfo () {
      this.$ajax({
        method: 'get',
        url: '/msg'})
        .then((res) => {
          this.checked = res.data.data
        })
    }
  },
  created () { // 生命周期created 钩子可以用来在一个实例被创建之后执行代码
    // this.getData()
  },
  computed: { // 计算属性
    ac: function () {
    }
  },
  watch: { // 侦听器
    checked: function (val) {
    }
  },
}
</script>

<style scoped>

</style>
