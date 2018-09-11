var fs = require("fs");

const saveIconData = () => {
	/**!
	** @author: zhangxinxu(.com) 2017-12-09
	** @description: http://www.zhangxinxu.com/wordpress/?p=6594
	** @licence: MIT licence
	*/
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
	
	var points = [];

	(function () {
		// 计算像素点需要的canvas
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		var width = 416;
		var height = 418;
		canvas.width = width;
		canvas.height = height;
		
		// get points方法
        var eleFile = document.getElementById('logo');
	
		// 压缩图片需要的一些元素和对象
        var reader = new FileReader(), img = new Image();
		
		// 选择的文件对象
		var file = null;
        img.src = eleFile.src
		// base64地址图片加载完毕后
		img.onload = function () {
			// 图片原始尺寸
			var originWidth = this.width;
			var originHeight = this.height;
			// 目标尺寸
			var targetWidth = originWidth, targetHeight = originHeight;
		
			// 按照canavs尺寸调整大小
			if (targetWidth > targetHeight)  {
				targetWidth = width;
				targetHeight = targetWidth * (originHeight / originWidth);
			} else {
				targetHeight = height;
				targetWidth = targetHeight * (originWidth / originHeight);
			}
		
			// 清除画布
			context.clearRect(0, 0, width, height);
			// 图片压缩
			context.drawImage(img, (width - targetWidth) / 2, (height - targetHeight) / 2, targetWidth, targetHeight);
			// 获得像素点坐标
			getPoints();
        };
		
		var getPoints = function () {
			// 间隙大小
			var gap = 1;
			var imgData = context.getImageData(0,0,width,height).data;

			var pos = [];
            var x = 0, y = 0, index = 0;
			for (var i=0; i<imgData.length; i+=(4*gap)) {
				if (imgData[i] == 56 && imgData[i+1] == 190 && imgData[i+2] == 239 && imgData[i+3] == 255) {
					// 塞入此时的坐标
					pos.push({
						x: x,
						y: y,
						z: 10
					});
				}
				index = Math.floor(i / 4);
				x = index % width;
				y = Math.floor(index / width);
				if (x >= width - gap) {
					i += gap * 4 * width;
				}
			}
			points = pos;
			
			saveImageData(points)

		};
		var saveImageData = ((points) => {
			var jsonse = JSON.stringify(points);
            var blob = new Blob([jsonse], {type: "application/json"});
            var url  = URL.createObjectURL(blob);

            var a = document.createElement('a');
            a.href = url;
            a.download = "img-data.json";
			document.getElementById('json').appendChild(a);
			a.click()
			URL.revokeObjectURL(a.href) // 释放URL对象
		})
	})();
};

export {saveIconData}
