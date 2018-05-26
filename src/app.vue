<template>
  <div id = "app">
    <div v-if = "!pc" class = "flag">木犀H5</div>
    <div class = "navigation" :class = "{side: !pc}">
        <img src  = "../static/logo.png" v-if = "pc" class = "logo"/>
        <!-- exact确保只有选中才改变颜色 -->
        <router-link class = "select" :class = "{linkW: !pc}" v-for = "(item, index) in category" :key = "index" :to = "{name: item.path}" exact>{{item.name}}</router-link>
    </div>
    <div class = "present">
        <router-view></router-view>
    </div> 
    <div class = "footer">Hello from Wuhan © 2014-2018 Muxistudio</div>
  </div>
</template>

<script>
import router from "./router/index.js"

export default {
  name: 'app',
  data(){
    return {
      pc: true,
      category: [{name:"全部",path:"all"},{name:"招新",path:"hiring"},{name:"节日",path:"festival"},{name:"活动",path:"activity"},{name:"其他",path:"other"}],
    }
  },
  created(){
    if(window.screen.width < window.screen.height)
      this.pc = false;
  },
  router
}
</script>

<style lang = "scss">
$windowMin: 400px;
$picWidth: 156px;
$picHeight: 288px;
$Border: 3px;
$linkWidth: 150px;
$downHeight: 72px;

html, body{
  width: 100%;
  height: 100%;
}
html{
  min-width: $windowMin;
}
body{
  background: white;
}
.flag{
  width: 100%;
  height: 57px;
  line-height: 57px;
  background-color: #00a0e9;
  font-size: 12px;
  color: white;
  text-align: center;
}
.navigation{
  height: 40px;
  width: 100%;
  line-height: 40px;
  /*子元素居中*/
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.logo{
  width: 90px;
  height: 40px;
  
}
.side{
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
}
.select{
  display: inline-block;
  font-size: 12px;
  color: #191743;
  width: 6%;
  margin-left: 1%;
  margin-right: 1%;
  text-decoration: none;
  text-align: center;
}
/*  .router-link-active指定激活样式  */
.router-link-active{
  border-bottom: $Border solid #00a0e9;
  color: #40b8ef;
}
.present{
  min-height: 615px;
  padding: 0 3% 20px 3%;
  background-color: #f4f6f8;
  border-bottom: $Border solid #e5e5e5;
}
.footer{
  text-align: center;
  height: 72px;
  line-height: 72px;
  color: #bfbfbf;
  font-size: 12px;
}
.pic{
  margin-top: 20px;
}
.block{
  display: block;
  width: $picWidth;
}
.mask{
  filter: brightness(10%);
}
.prompt{
  position: absolute;
  width: $picWidth;
  height: $picHeight;
  margin-top: -24px;
}
.title{
  height: 20px;
  line-height: 20px;
  color: white;
  /*减去自身高度*/
  margin-top: $picHeight - $downHeight - 28px;
  text-align: center;

}
.tran{
  width: $picWidth;
  height: 0;
  overflow: hidden;
}
.pos{
  /*以此为参照，读取offsetLeft值*/
  position: relative;
  width: $picWidth * 4 + 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.link{
  width: $picWidth;
  height: $picWidth;
  line-height: $picWidth;
  text-align: center;
  opacity: 0; 
  z-index: 10;
  transition: opacity 0.5s;
  position: absolute;
  background: url(/static/qr.png);
}
.link::before, .link::after{
  content: '';
  border: $Border solid black;
  position: absolute;
  transition: all 2s;
} 
.link::before{
  width: $linkWidth;
  border-width: 0 $Border;
  height: 0;
  top: 50%;    /*定义初始位置*/
  left: 0;
}
.link::after{
    border-width: $Border 0;
    width: 0;
    height: $linkWidth;
    top: 0;
    left: 50%;   /*定义初始位置*/
}
.link:hover{
  opacity: 0.7;
}
.link:hover::before{
    height:100%;
    top:0;
} 
.link:hover::after{
    width: 100%;
    left:0;
}
/*媒体查询, 移动端*/
@media screen and (max-width: 800px){
  .pos{
    width: $picWidth * 2 + 25px;
  }
}
.linkW{
  width: 25%;
  margin: 0;
}
</style>
