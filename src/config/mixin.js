import directive from './directive.js'

export default {
    template:  `<div class = "pos">
                    <div v-for = "item in pictures" class = "pic" v-bind:class = "{tran: item.back}" v-mouse = "qrCode" v-click = "jump">
                        <!-- 内联图片对齐问题会导致间隙，改为块级元素 -->
                        <img v-bind:src = "item.path.split(' ')[0]" class = "block" v-bind:class = "{mask: item.mask}" />
                        <img v-bind:src = "item.path.split(' ')[1]" class = "block" />
                    </div>
                    <div v-show = "pre" class = "link">
                        <!--子元素覆盖住图片，保证悬浮在任何地方都触发链接-->
                        <div class = "prompt">
                            <p class = "title">扫二维码查看完整H5</p>
                        </div>
                    </div>
                </div>`,
    data(){
        return {
            //未悬浮时，link不显示
            pre: false,
            links: ['http://h5.muxixyz.com/freshman', 'http://h5.muxixyz.com/freshman2017', 'http://h5.muxixyz.com/dogs', 'http://h5.muxixyz.com/ccnubox'],
        }
    },
    directives: directive,
    methods:{
        qrCode(i, image, link){
            var path = this.pictures[i].path;
            this.pre = true;
            this.pictures[i].path = this.pathes[i];
            this.pictures[i].mask = true;

            var self = this; 
            image.onmouseleave = function(){
                self.pre = false;
                self.pictures[i].mask = false;
                self.pictures[i].path = path;
            }
            link.onmouseover = function(){
                self.pre = true;
                self.pictures[i].mask = true;
                self.pictures[i].path = self.pathes[i];
            }
            link.onmouseleave = function(){
                self.pre = false;
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
