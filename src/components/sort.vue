<script>
    import myMixin from '../mixin.js'
    import Vue from 'vue'

    var all = Vue.extend({
        name: 'all',
        data(){
            var pic = [
                      {path:"/static/top1.png /static/low1.png", back: false, mask: false}, {path:"/static/top2.png /static/low2.png", back: false, mask: false}, {path:"/static/top3.png /static/low3.png", back: false, mask: false}, {path:"/static/top4.png /static/low4.png", back: false, mask: false}, 
                      {path:"/static/top4.png /static/low4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
                     ],
                mob = [
                       {path:"/static/top1.png /static/down1.png", back: false, mask: false}, {path:"/static/top2.png /static/down2.png", back: false, mask: false}, {path:"/static/top3.png /static/down3.png", back: false, mask: false}, {path:"/static/top4.png /static/down4.png", back: false, mask: false}, 
                       {path:"/static/top4.png /static/down4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
                      ];
            if(window.screen.width < window.screen.height) 
                pic = mob;
            return {
                pathes: [
                         "/static/top1.png /static/down1.png", "/static/top2.png /static/down2.png", "/static/top3.png /static/down3.png", "/static/top4.png /static/down4.png",
                         "/static/top4.png /static/down4.png",
                        ],
                pictures: pic
            }
        }, 
        mixins: [myMixin],
    })

    var festival = Vue.extend({
        name: 'festival',
        data(){
            var pic = [
                      {path:"/static/top3.png /static/low3.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
                     ],
                mob = [
                       {path:"/static/top3.png /static/down3.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
                      ];
            if(window.screen.width < window.screen.height) 
                pic = mob;
            return {
                pathes: [
                         "/static/top3.png /static/down3.png",  
                        ],
                pictures: pic
            }
        }, 
        mixins: [myMixin],
    })

    var activity = Vue.extend({
        name: 'activity',
        data(){
            var pic = [
                      {path:"/static/top4.png /static/low4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
                     ],
                mob = [
                       {path:"/static/top4.png /static/down4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
                      ];
            if(window.screen.width < window.screen.height) 
                pic = mob;
            return {
                pathes: [
                         "/static/top4.png /static/down4.png",
                        ],
                pictures: pic
            }
        }, 
        mixins: [myMixin],
    })

    var hiring = Vue.extend({
        name: 'hiring',
        data(){
            var pic = [
                      {path:"/static/top1.png /static/low1.png", back: false, mask: false}, {path:"/static/top2.png /static/low2.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
                     ],
                mob = [
                       {path:"/static/top1.png /static/down1.png", back: false, mask: false}, {path:"/static/top2.png /static/down2.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
                      ];
            if(window.screen.width < window.screen.height) 
                pic = mob;
            return {
                pathes: [
                         "/static/top1.png /static/down1.png", "/static/top2.png /static/down2.png", 
                        ],
                pictures: pic
            }
        },
        mixins: [myMixin],
    })

    var other = Vue.extend({
        name: 'other',
        data(){
            var pic = [
                      {path:"/static/top4.png /static/low4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
                     ],
                mob = [
                       {path:"/static/top4.png /static/down4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
                      ];
            if(window.screen.width < window.screen.height) 
                pic = mob;
            return {
                pathes: [
                         "/static/top4.png /static/down4.png",
                        ],
                pictures: pic
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
