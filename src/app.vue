<template>
  <div id = "app">
    <input v-focus="conso"
    <div class = "navigation">
        <!-- exact确保只有选中才改变颜色 -->
        <router-link class = "select" v-for = "(item, index) in this.category" :key = "index" :to = "{name: item.path}" exact>{{item.name}}</router-link>
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
      category: [{name:"全部",path:"all"},{name:"招新",path:"hiring"},{name:"节日",path:"festival"},{name:"活动",path:"activity"},{name:"其他",path:"other"}],
    }
  },
  router
}
</script>

<style lang = "scss">
$windowMin: 300px;
$picWidth: 156px;
$picHeight: 227px;
$linkBorder: 3px;
$linkWidth: 150px;

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
.navigation{
  height: 40px;
  width: 100%;
  line-height: 40px;
  /*子元素居中*/
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #00a0e9; 
}
.select{
  display: inline-block;
  font-size: 18px;
  color: #191743;
  width: 8%;
  text-decoration: none;
  margin-left: 1%;
  margin-right: 1%;
  text-align: center;
}
/*  .router-link-active指定激活样式  */
.router-link-active{
    color: #40b8ef;
}
.present{
  min-height: 540px;
  padding: 0 3% 20px 3%;
  background-color: #f4f6f8;
  border-bottom: 4px solid #e5e5e5;
}
.footer{
  text-align: center;
  height: 72px;
  line-height: 72px;
  color: #bfbfbf;
  font-size: 18px;
}
.pic{
  margin-top: 20px;
}
.block{
  display: block;
}
.mask{
  filter: brightness(10%);
}
.prompt{
  margin-top: 100px;
  color: white; 
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
  transition: opacity 2s;
  position: absolute;
  background: url(/static/qr.png);
}
.link::before, .link::after{
  content: '';
  border: $linkBorder solid black;
  position: absolute;
  transition: all 2s;
} 
.link::before{
  width: $linkWidth;
  border-width: 0 $linkBorder;
  height: 0;
  top: 50%;    /*定义初始位置*/
  left: 0;
}
.link::after{
    border-width: $linkBorder 0;
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
.towards{
  display: none;
}
/*媒体查询, 移动端*/
@media screen and (max-width: 800px){
  .select{
    font-size: 12px;
  }
  .link::before, .link::after{
    border: $linkBorder solid white;
  }
  .pos{
    width: $picWidth;
  }
}
</style>
