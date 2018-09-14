<template>
  <div class="page">
    <!-- <el-menu default-active="1" class="menu">
      <router-link :to='menu[0].path'>
        <el-menu-item :index="menu[0].id">{{menu[0].name}}</el-menu-item>
      </router-link>
      <router-link :to='menu[1].path'>
        <el-menu-item :index="menu[1].id">{{menu[1].name}}</el-menu-item>
      </router-link>
    </el-menu> -->
    <div class="main-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // menu: [
      //   {id: '1', name: '首页', path: '/p'},
      //   {id: '2', name: '页面二', path: '/page2'}
      // ]
    }
  },
  methods: {
  }
}
</script>

<style>
.menu {
  position: absolute;
  width: 100px;
  height: 100%;
}
.main-container{
  /* margin-left: 10px; */
  /* margin-top: 10px; */
  /* width: 90%; */
}
</style>
