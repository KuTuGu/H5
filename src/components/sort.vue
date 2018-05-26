<script>
    import myMixin from '../config/mixin.js'
    import Vue from 'vue'
    import path from '../config/path.js'

    var all = Vue.extend({
        name: 'all',
        mounted(){
            if(window.screen.width < window.screen.height) 
                this.pictures = path.all.mob;
        },
        data(){
            return {
                pathes: path.all.chanPic,
                pictures: path.all.pic,
            }
        }, 
        mixins: [myMixin],
    })

    var festival = Vue.extend({
        name: 'festival',
        mounted(){
            if(window.screen.width < window.screen.height) 
                this.pictures = path.festival.mob;
        },
        data(){
            return {
                pathes: path.festival.chanPic,
                pictures: path.festival.pic,
            }
        }, 
        mixins: [myMixin],
    })

    var activity = Vue.extend({
        name: 'activity',
        mounted(){
            if(window.screen.width < window.screen.height) 
                this.pictures = path.activity.mob;
        },
        data(){
            return {
                pathes: path.activity.chanPic,
                pictures: path.activity.pic,
            }
        }, 
        mixins: [myMixin],
    })

    var hiring = Vue.extend({
        name: 'hiring',
        mounted(){
            if(window.screen.width < window.screen.height) 
                this.pictures = path.hiring.mob;
        },
        data(){
            return {
                pathes: path.hiring.chanPic,
                pictures: path.hiring.pic,
            }
        }, 
        mixins: [myMixin],
    })

    var other = Vue.extend({
        name: 'other',
        mounted(){
            if(window.screen.width < window.screen.height) 
                this.pictures = path.other.mob;
        },
        data(){
            return {
                pathes: path.other.chanPic,
                pictures: path.other.pic,
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
