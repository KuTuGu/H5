export default {
    mouse:{
        inserted: function(el, binding, vNode){
            // "移动端" 直接退出
            if(window.screen.width < window.screen.height)
                return;
            var pics = document.getElementsByClassName('pic'),
                link = document.getElementsByClassName("link")[0],
                len = pics.length;
            for(var i = 0;i < len;i++){
                pics[i].onmouseover = (function(i){
                    return function(){
                        var image = pics[i],
                            style = window.getComputedStyle(image),
                            imgWidth = parseInt(style.width),
                            imgHeight = parseInt(style.height);

                        //利用下面的方法，可以计算图片左上角的坐标，从而确定链接坐标
                        var x = image.offsetLeft;
                        var y = image.offsetTop;

                        var path = image.childNodes[0].src;
                        //如果是最后的图片，直接返回
                        if(path.split('/').pop() === 'continue.png')
                            return;

                        var move = binding.value(i, image, link);
                        
                        //设置链接区域坐标(注意阴影)
                        link.style.top = y + imgHeight / 2 - imgWidth / 2 - 40 + 'px';
                        link.style.left = x + 'px'; 

                    }
                })(i)
            }
        }
    },
    click:{
        inserted: function(el, binding, vNode){
            // "pc端" 直接退出
            if(window.screen.width > window.screen.height)
                return;
            var pics = document.getElementsByClassName('pic'),
                len = pics.length;

            for(var i = 0;i < len;i++){
                pics[i].onclick = (function(i){
                    return function(){
                        var image = pics[i];

                        var path = image.childNodes[0].src;
                        //如果是最后的图片，直接返回
                        if(path.split('/').pop() === 'continue.png')
                            return;

                        binding.value(image.childNodes[2].src);
                    }
                })(i)
            }
        }
    }
}