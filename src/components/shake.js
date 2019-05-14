const isSupportShake = () => {
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', shakeEventHandler, false);
  } else {
    alert('本设备不支持devicemotion事件');
  }
}

var THRESHOLD = 1000;
let preX, preY, preZ, x, y, z
preX = preY = preZ = x = y = z = 0;
var preTime = 0;

const shakeEventHandler = (event) => {
    var acceleration = event.accelerationIncludingGravity; 
    var curTime = new Date().getTime();
    var diffTime = curTime-preTime;

    if (diffTime > 100) { 
        preTime = curTime;  
        x = acceleration.x;  
        y = acceleration.y;  
        z = acceleration.z;  

        var accelerationDiff = Math.abs(x + y + z - preX - preY - preZ) / diffTime * 10000;  

        if (accelerationDiff > THRESHOLD) {  
            alert("摇一摇有惊喜！");  
        }  
        preX = x;  
        preY = y;  
        preZ = z;  
    }  
}

export {isSupportShake, shakeEventHandler}