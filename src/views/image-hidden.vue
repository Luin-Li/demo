<template>
  <div class="block">
    <div class="box">
      <canvas width="200" height="200" id="text"></canvas>
      <div class="text">附加信息图</div>
    </div>
    <div class="box">
      <img src="../assets/hupo.png" style="display:none" id="hupo"/>
      <canvas width="200" height="200" id="original-image"></canvas>
      <div class="text">原图</div>
    </div>
    <div class="box">
      <canvas width="200" height="200" id="new-image"></canvas>
      <div class="text">加了信息的图</div>
    </div>
    <div class="box">
      <canvas width="200" height="200" id="decode-image"></canvas>
      <div class="text">解密后的图</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textData: null, // 隐藏信息的像素数据
      originalImgData: null, // 原图的像素数据
      newImgData: null // 加了信息的图片像素数据
    }
  },
  methods: {
    drawMsgImage () { // 绘制隐藏信息
      let ctx = document.getElementById('text').getContext('2d')
      ctx.font = '14px Microsoft Yahei'
      ctx.fillText('这是隐藏信息...你看不见你看不见', 50, 180)
      this.textData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data
    },
    drawOriginalImage () { // 绘制原图
      let originalImgData
      let ctx = document.getElementById('original-image').getContext('2d')
      let originalImg = new Image()
      originalImg.onload = () => {
        ctx.drawImage(originalImg, 0, 0)
        originalImgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)

        this.drawNewImage('R', originalImgData)
      }
      
      let file = document.getElementById('hupo')
      originalImg.src = file.src
    },
    drawNewImage (color, originalImgData) { // 加密，color表示添加隐藏信息的颜色通道
      let newImgData = originalImgData.data
      let bit, offset
      switch (color) {
        case 'R': 
          bit = 0;
          offset = 3;
          break;
        case 'G':
          bit = 1;
          offset = 2;
          break;
        case 'B':
          bit = 2;
          offset = 1;
          break;
      }

      newImgData.forEach((item, index) => {
        if (index % 4 === bit) { // 隐藏信息的颜色通道
          if ((this.textData[index + offset] === 0) && (item % 2 === 1)) { // 无信息为奇数变偶数
            if (item === 255) {
              newImgData[index]--
            } else {
              newImgData[index]++
            }
          } else if ((this.textData[index + offset] !== 0) && (item % 2 === 0)) { // 有信息为偶数变奇数
            newImgData[index]++
          }
        }
      })

      let ctx = document.getElementById('new-image').getContext('2d')
      ctx.putImageData(originalImgData, 0, 0)
      this.drawHiddenMsg(originalImgData)
    },
    drawHiddenMsg (newImgData) { // 解密
      let decodeData = newImgData.data
      decodeData.forEach((item,index) => {
        if (index % 4 === 0) { // 红色通道
          if (item % 2 === 0) { // 偶数无信息
            decodeData[index] = 0
          } else { // 奇数有信息
            decodeData[index] = 255
          }
        } else if (index % 4 !== 3) { // 关闭其他通道,alpha通道值不变
          decodeData[index] = 0 
        }
      })

      let ctx = document.getElementById('decode-image').getContext('2d')
      ctx.putImageData(newImgData, 0, 0)
    }
  },
  mounted () {
    this.drawMsgImage()
    this.drawOriginalImage()

    // let originalImgData
    // let ctx = document.getElementById('original-image').getContext('2d')
    // let originalImg = new Image()
    // originalImg.onload = () => {
    //   ctx.drawImage(originalImg, 0, 0)
    //   originalImgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
    //   this.drawHiddenMsg(originalImgData)
    // }
    // let file = document.getElementById('hupo')
    // originalImg.src = file.src
  }
}
</script>

<style scoped>
.block{
  display: flex;
}
.box {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box .text{
  color: #f48fb1;
}
.box canvas{
  border: 1px solid #9E9E9E;
}
</style>
