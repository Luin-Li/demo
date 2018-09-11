<template>
  <div>
    <!-- <el-input v-model="form.info"></el-input> -->
    <!-- <el-button type="primary" @click="sendMsg">发送</el-button> -->
    <!-- <p>{{data}}</p> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        info: ''
      },
      data: ''
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
    }
  },
  created () {
  }
}
</script>

<style scoped>
div {
  width: 50%;
}

</style>
