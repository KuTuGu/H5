<script>
    import myMixin from '../mixin.js'
    import Vue from 'vue'

    var all = Vue.extend({
        name: 'all',
        data(){
            return {
                pathes: [
                         "/static/top1.png /static/down12.png", "/static/top1.png /static/down12.png", "/static/top1.png /static/down12.png", "/static/top1.png /static/down12.png",
                         "/static/top1.png /static/down12.png",
                        ],
                pictures:[
                          {path:"/static/top1.png /static/down11.png", back: false, mask: false}, {path:"/static/top1.png /static/down11.png", back: false, mask: false}, {path:"/static/top1.png /static/down11.png", back: false, mask: false}, {path:"/static/top1.png /static/down11.png", back: false, mask: false}, 
                          {path:"/static/top1.png /static/down11.png", back: false, mask: false}, {path:"/static/top2.png /static/down21.png", back: false, mask: false}, {path:"/static/top1.png /static/down11.png", back: true, mask: false}, {path:"/static/top1.png /static/down11.png", back: true, mask: false}, 
                         ],
            }
        }, 
        mixins: [myMixin],
    })

    var festival = Vue.extend({
        name: 'festival',
        //computed取代data，根据设备不同做出不同反应
        data(){
            return {
                pictures: [{path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
            }
        },
        mixins: [myMixin],
    })

    var activity = Vue.extend({
        name: 'activity',
        data(){
            return {
                pictures: [{path:"/static/pink.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
            }
        },
        mixins: [myMixin],
    })

    var hiring = Vue.extend({
        name: 'hiring',
        data(){
            return {
                pictures: [{path:"/static/pink.jpg", back: false, blur: false}, {path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
            }
        },
        mixins: [myMixin],
    })

    var other = Vue.extend({
        name: 'other',
        data(){
            return {
                pictures: [{path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:"/static/star.jpg", back: false, blur: false}, {path:"/static/stars.jpg", back: false, blur: false}]
            }
        },
        mixins: [myMixin],
    })

    export default {
        'all': all, 
        'festival': festival,
        'activity': activity, 
        'hiring': hiring, 
        'other': other,
    }
</script>
