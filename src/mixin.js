export default {
    data() {
        return {
            //未悬浮时，link下移
            pre: false,
        }
    },
    methods:{
        //悬浮触发链接
        qrCode(item, index){
            this.pre = true;
            
            var image = document.getElementsByClassName("picture")[index];

            //根据名称，选择不同链接
            var path = image.src;
            //如果是最后的图片，直接返回
            if(path.split('/').pop() === 'transparent.jpg' || path.split('/').pop() === 'background.jpg')
                return;

            var imgWidth = parseInt(image.naturalWidth);
            var imgHeight = parseInt(image.naturalHeight);

            //利用下面的方法，可以计算图片左上角的坐标，从而确定链接坐标
            var x = image.offsetLeft
            var y = image.offsetTop

            var link = document.getElementsByClassName("link")[0];

            //设置链接区域坐标(注意阴影)
            link.style.top = y + imgHeight / 2 - imgWidth / 2 + 'px';
            link.style.left = x + 'px'; 
            item.blur = true;
            //image.className += ' blur';
            image.onmouseleave = function(){
                item.blur = false;
            }

            link.onmouseover = function(){
                item.blur = true;
            }
            link.onmouseleave = function(){
                item.blur = false;
            }
        },
        jump(){
            window.location.href = "https://www.baidu.com";
        }
    },
}