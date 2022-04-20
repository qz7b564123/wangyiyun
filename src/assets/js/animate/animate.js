export function animate(obj, target, callback) {
            // 清除之前的动画
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                // 计算出每次移动距离
                var step = (target - obj.offsetLeft) / 10;
                //  步数取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style.left = obj.offsetLeft + step + 'px';
 
                if (obj.offsetLeft == target) {
                    // 停止动画
                    clearInterval(obj.timer);
                    // 如果有回调函数，执行回调函数
                    if (callback) {
                        callback();
                    }
                }
 
            }, 30);
        }