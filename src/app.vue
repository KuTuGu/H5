<template>
  <div id = "app">
    <div class = "navigation">
        <router-link class = "select" v-for = "(item, index) in this.category" :key = "index" :to = "{name: item.path}"><div class = "active">{{item.name}}</div></router-link>
    </div>
    <div class = "present">
        <router-view></router-view>
    </div> 
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
$picHeight: 250px;
$linkBorder: 3px;

html, body{
  width: 100%;
  height: 100%;
}
html{
  min-width: $windowMin;
}
body{
  background: #e7e8ea;
}
.navigation{
  height: 30px;
  width: 100%;
  background-color: #363943;
  line-height: 30px;
  /*子元素居中*/
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.select{
  display: inline-block;
  font-size: 25px;
  color: white;
  width: 8%;
  text-decoration: none;
  margin-left: 3%;
  margin-right: 3%;
  text-align: center;
}
/*  .router-link-active指定激活样式  */
.router-link-active{
  .active{ 
    background: #27a5f5;
  }
}
.present{
  width: 90%;
  margin: 30px auto 0 auto;
  padding: 0 3% 20px 3%;
  background-color: #f3f3f3;
}
.picture{
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888;
}
.tran{
  width: $picWidth;
  height: 0;
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
  transition: opacity 2s;
  z-index: -1;
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
    border-width: 0 $linkBorder;
    width: 100%;
    height: 0;
    top: 50%;    /*定义初始位置*/
    left: -1 * $linkBorder;
}
.link::after{
    border-width: $linkBorder 0;
    width: 0;
    height: 100%;
    top: -1 * $linkBorder;
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

.title{
  font-size:30px;
  color: transparent;
  background-image: linear-gradient(to right,blue, purple 10%,blue 20%,purple 30%,blue 40%,purple 50%, blue 60%, purple 70%, blue 80%, purple 90%,blue);
  -webkit-background-clip: text;
  background-size: 200%,100%;
  transform: translate(0,20px);   /*鼠标移走，文字下移*/
  transition: transform .8s,opacity .8s;  /*设置动画时间*/
  animation: 4s flowlight linear infinite; /*无限匀速执行自定义行为*/
  display: none;/*默认pc*/
}
@keyframes flowlight{
    0%{/*初始状态，也可以用from*/
      background-position: 0 0;
    }
    100%{/*最终状态，也可以用to*/
      background-position: -100% 0;   
    }
}
.link:hover{
  .title{
    transform: translate(0);
    opacity: 1;
  }
} 
.blur{
  -webkit-filter: blur(10px); /* Chrome, Opera */
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
            filter: blur(10px);
}
.towards{
  z-index: 1;
}
/*媒体查询, 移动端*/
@media screen and (max-width: 800px){
  .active{
    font-size: 12px;
  }
  .link::before, .link::after{
    border: $linkBorder solid white;
  }
  .pos{
    width: $picWidth;
  }
  .title{
    display: inline;
  }
  .link{
    background-image: none;
    background-color: black;
  }
}
</style>
