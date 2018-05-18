export default {
    template:  `<div class = "pos">
                    <div v-for = "(item, index) in this.pictures" :key = "index" class = "pic" v-bind:class = "{tran: item.back}" v-mouse = "qrCode" v-click = "jump">
                        <!-- 内联图片对齐问题会导致间隙，改为块级元素 -->
                        <img v-bind:src = "item.path.split(' ')[0]" class = "block" v-bind:class = "{mask: item.mask}" />
                        <img v-bind:src = "item.path.split(' ')[1]" class = "block" />
                    </div>
                    <div v-bind:class = "{towards: pre}" class = "link">
                        <!--子元素覆盖住图片，保证悬浮在任何地方都触发链接-->
                        <div class = "prompt">
                            <p class = "title">扫二维码查看完整H5</p>
                        </div>
                    </div>
                </div>`,
    data(){
        return {
            //未悬浮时，link堆叠下移
            pre: true,
            links: ['http://h5.muxixyz.com/freshman', 'http://h5.muxixyz.com/freshman2017', 'http://h5.muxixyz.com/dogs', 'http://h5.muxixyz.com/ccnubox'],
        }
    },
    directives:{
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
    },
    methods:{
        qrCode(i, image, link){
            var path = this.pictures[i].path;
            this.pre = false;
            this.pictures[i].path = this.pathes[i];
            this.pictures[i].mask = true;

            var self = this; 
            image.onmouseleave = function(){
                self.pre = true;
                self.pictures[i].mask = false;
                self.pictures[i].path = path;
            }
            link.onmouseover = function(){
                self.pre = false;
                self.pictures[i].mask = true;
                self.pictures[i].path = self.pathes[i];
            }
            link.onmouseleave = function(){
                self.pre = true;
                self.pictures[i].mask = false;
                self.pictures[i].path = path;
            }
        },
        jump(path){
            var back = path.split('/').pop();
            var index = back.split('.')[0];
            var i = index[index.length - 1] - 1;
            window.location.href = this.links[i];
        }
    },
}
