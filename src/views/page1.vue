<template>
  <div>
    <el-checkbox v-model="checked">深圳</el-checkbox>
    <el-button type="primary" size="mini"  @click="getInfo">获取数据</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
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
  }
}
</script>

<style scoped>

</style>
