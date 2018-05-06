var tem = '<div class = "pos"><img v-for = "(item, index) in this.pictures" :key = "index" v-bind:src = "item.path" v-bind:class = "{tran: item.back, blur: item.blur}" class = "picture" @mouseover = "qrCode(item, index)" @click = "jump"/><div v-bind:class = "{towards: pre}" class = "link" @click = "jump"></div></div>';

export default {
    template: tem,
    data() {
        return {
            //未悬浮时，link堆叠下移
            pre: true,
        }
    },
    methods:{
        //悬浮触发链接
        qrCode(item, index){
            this.pre = false;

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
                this.pre = true;
                item.blur = false;
            }
            link.onmouseover = function(){
                this.pre = false;
                item.blur = true;
            }
            link.onmouseleave = function(){
                this.pre = true;
                item.blur = false;
            }
        },
        jump(){
            if(parseInt(window.innerWidth) <= 800){
                window.location.href = "https://www.baidu.com";
            }
        }
    },
}
