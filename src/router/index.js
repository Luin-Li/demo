import Vue from 'vue'
import Router from 'vue-router'

import page1 from '../views/page1.vue'
import page2 from '../views/page2.vue'
import drawIcon from '../views/drawIcon.vue'
import threeSet from '../views/three-set.vue'
import imageHidden from '../views/image-hidden.vue'
import videoEditor from '../views/video-edit.vue'
import shake from '../views/shake-shake.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/draw-icon',
      component: drawIcon,
      name: '首页'
    },
    {
      path: '/page2',
      component: page2,
      name: '页面2'
    },
    {
      path: '/three-set',
      component: threeSet,
      name: '示例'
    },
    {
      path: '/image-hidden',
      component: imageHidden,
      name: '图片隐身'
    },
    {
      path: '/video-editor',
      component: videoEditor,
      name: '视频编辑'
    },
    {
      path: '/three-set',
      component: threeSet,
      name: '示例'
    },
    {
      path: '/shake',
      component: shake,
      name: '摇一摇'
    }
  ]
})
