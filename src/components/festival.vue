<template id = "festival">
    <div class = "pos">
        <img v-for = "(item, index) in this.pictures" :key = "index" v-bind:src = "item.path" v-bind:class = "{tran: item.back, blur: item.blur}" class = "picture" @mouseover = "qrCode(item, index)"/>
        <div v-bind:class = "{towards: pre}" class = "link"><h1 class = "title" @click = "jump">Click in!</h1></div>
    </div>
</template>

<script>
import mixin from '../mixin.js'

export default {
    name: 'festival',
    data(){
        return {
            pictures: [{path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
        }
    },
    mixins: [mixin]
}
</script>
<style>
</style>